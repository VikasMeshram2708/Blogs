import prisma from "@/lib/prisma";
import { rateLimiter } from "@/lib/ratelimit";
import { contactSchema } from "@/models/contact";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    // rate limiter
    try {
      // rate limiter
      await rateLimiter(req);
    } catch (error) {
      console.error(error);
      return new Response(
        JSON.stringify({
          success: false,
          error: "Too many requests. Please try again later.",
        }),
        { status: 429 }
      );
    }

    // sanitize
    const body = await req.json();
    // console.log("incd", body);

    const sanitize = contactSchema.safeParse(body);
    if (!sanitize.success) {
      return new Response(
        JSON.stringify({
          success: false,
          error: sanitize.error.format(),
        })
      );
    }
    await prisma.contact.create({
      data: sanitize.data,
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "form submitted.",
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
