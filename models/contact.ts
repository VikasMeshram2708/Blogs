import * as z from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(100, { message: "Name cannot exceed 100 characters." })
    .regex(/^[A-Za-z]+$/, {
      message: "Name must contain alphabets only.",
    }),
  email: z
    .string()
    .min(5, { message: "Email is required." })
    .max(100, { message: "Email is too long." })
    .email({ message: "Please enter a valid email." }),
  message: z
    .string()
    .min(2, { message: "Message must be at least 2 characters." })
    .max(500, { message: "Message cannot exceed 500 characters." }),
});

export type contactSchema = z.infer<typeof contactSchema>;
