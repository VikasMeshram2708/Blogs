import * as z from "zod";

export const newsLetterSchema = z.object({
  email: z.string().email(),
});

export type newsLetterSchema = z.infer<typeof newsLetterSchema>;
