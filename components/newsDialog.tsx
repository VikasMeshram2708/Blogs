"use client";
import React, { useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsLetterSchema } from "@/models/newsletter";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Loader } from "lucide-react";

export default function NewsLetterDialog() {
  const dialogRef = useRef<HTMLButtonElement | null>(null);
  const form = useForm<newsLetterSchema>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(newsLetterSchema),
  });

  const onSubmit = async (data: newsLetterSchema) => {
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
        toast.error(json.error || "Failed");
        return;
      }
      toast.success(json.message || "Thanks for subscribing.");
      dialogRef.current?.click();
      return;
    } catch (error) {
      throw error;
    }
  };
  return (
    <Dialog>
      <DialogTrigger ref={dialogRef} asChild>
        <Button variant="default">Subscribe</Button>
      </DialogTrigger>

      <DialogContent className="space-y-6">
        <DialogHeader>
          <DialogTitle>Join the Newsletter</DialogTitle>
          <DialogDescription>
            Be the first to read my latest blogs, insights, and tutorials —
            delivered straight to your inbox.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 w-full"
          >
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="title">Email Address</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="you@example.com" required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              disabled={!form.formState.isDirty || form.formState.isSubmitting}
              type="submit"
              className="w-full"
            >
              {form.formState.isSubmitting ? (
                <Loader className="animate-spin duration-300" />
              ) : (
                "Subscribe"
              )}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
