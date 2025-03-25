import prisma from "@/lib/prisma";
import { rateLimiter } from "@/lib/ratelimit";
import { newsLetterSchema } from "@/models/newsletter";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    // rate limiter
    await rateLimiter(req);

    // sanitize
    const body = await req.json();
    // console.log("incd", body);
    const sanitize = newsLetterSchema.safeParse(body);

    if (!sanitize.success) {
      return new Response(
        JSON.stringify({
          error: sanitize.error.flatten().fieldErrors.email,
          success: false,
        })
      );
    }

    const { email } = sanitize.data;
    // find if already exist
    const userExists = await prisma.subscription.findUnique({
      where: {
        email: String(email),
      },
    });

    if (userExists) {
      return new Response(
        JSON.stringify({
          error: "User already exists",
          success: false,
        })
      );
    }

    // store in db
    await prisma.subscription.create({
      data: {
        email: email,
      },
    });

    return new Response(
      JSON.stringify({
        message: "Success",
        success: true,
      })
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        error: "Something went wrong. Please try again.",
        success: false,
      })
    );
  }
};
