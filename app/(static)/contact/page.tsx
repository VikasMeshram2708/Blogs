"use client";

import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Loader } from "lucide-react";

const contactSchema = z.object({
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

type ContactSchema = z.infer<typeof contactSchema>;

export default function Contact() {
  const form = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactSchema) => {
    await new Promise((resolve) => {
      console.log("data", data);
      setTimeout(resolve, 3000);
    });
    form.reset();
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2">
      {/* Left side banner */}
      <div className="bg-muted p-8 flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
        <p className="text-muted-foreground max-w-sm">
          Have questions, feedback, or just want to say hello? Fill out the form
          and we’ll get back to you shortly.
        </p>
      </div>

      {/* Right side form */}
      <div className="flex items-center justify-center p-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full max-w-xl space-y-6"
          >
            {/* Name */}
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="you@example.com"
                      autoComplete="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Message */}
            <FormField
              name="message"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      rows={5}
                      placeholder="Type your message here..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button
              disabled={!form.formState.isDirty || form.formState.disabled}
              type="submit"
              className="w-full"
            >
              {form.formState.isSubmitting ? (
                <Loader className="animate-spin duration-300" />
              ) : (
                "Send Message"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
