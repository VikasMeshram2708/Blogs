"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import contactBg from "@/public/pets/cute-cat.png";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsLetterSchema } from "@/models/newsletter";
import { toast } from "sonner";
import { Loader } from "lucide-react";

export default function GetInTouch() {
  const form = useForm<newsLetterSchema>({
    resolver: zodResolver(newsLetterSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: newsLetterSchema) {
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: data.email }),
      });

      const json = await response.json();
      form.reset();

      if (!response.ok || json.error) {
        toast.error(json.error || "Subscription failed. Please try again.");
        return;
      }

      toast.success(json.message || "Thanks for subscribing!");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="relative min-h-[450px] max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-lg">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={contactBg}
          alt="Cute pet background"
          fill
          className="object-cover w-full h-full"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 h-full w-full px-6 py-16 md:py-24 flex flex-col items-center justify-center text-white text-center">
        <h2 className="text-4xl md:text-5xl font-bold drop-shadow-lg mb-4">
          Stay Updated with PashuCare
        </h2>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8 drop-shadow-md">
          Join our newsletter and get the latest livestock care tips, news, and
          insights — right in your inbox.
        </p>

        {/* Form */}
        <div className="w-full max-w-md">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="Enter your email"
                        className="bg-white text-gray-900 placeholder-gray-500 rounded-lg py-5 px-4 focus:ring-2 focus:ring-amber-500"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button
                disabled={
                  !form.formState.isDirty || form.formState.isSubmitting
                }
                type="submit"
                size="lg"
                className="w-full bg-amber-600 hover:bg-amber-700 py-5 text-lg rounded-xl transition-all duration-200 hover:scale-105"
              >
                {form.formState.isSubmitting ? (
                  <Loader className="animate-spin duration-300" />
                ) : (
                  "Subscribe Now"
                )}
              </Button>
            </form>
          </Form>

          <p className="text-sm text-white/80 mt-4">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
}
