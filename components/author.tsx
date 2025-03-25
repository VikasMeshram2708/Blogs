import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import type { Author } from "@/sanity.types";
import { Button } from "./ui/button";

async function getAuthor(): Promise<Author[] | null> {
  try {
    const query = groq`*[_type=="author"]`;
    return client.fetch(query);
  } catch (error) {
    console.error(error);
    return null;
  }
}
getAuthor();
export default async function Author() {
  const authors = await getAuthor();
  const author = authors?.[0];
  return (
    <Card className="max-w-4xl mx-auto p-4 md:p-6 shadow-xl rounded-2xl bg-white dark:bg-gray-950">
      <CardContent className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="shrink-0">
          <Image
            alt={author?.nickName || author?.name || "Author image"}
            src={urlFor(author?.image || "").url()}
            width={200}
            height={200}
            className="rounded-full object-cover border-4 border-gray-200 dark:border-gray-800 shadow-md"
          />
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-sm uppercase tracking-wide text-muted-foreground mb-2">
            Article by
          </h2>
          <CardTitle className="text-2xl font-semibold capitalize text-primary mb-3">
            {author?.name}
          </CardTitle>
          <CardDescription className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            {author?.name} is the voice behind this blog — a passionate newcomer
            driven by curiosity, creativity, and a deep desire to grow. This
            isn’t just another blog; it’s the beginning of an exciting journey
            into the world of storytelling, learning, and digital discovery.
            With every post, {author?.name} aims to inspire, connect, and bring
            fresh perspectives to curious minds like yours. Whether you're here
            to explore new ideas, find motivation, or simply learn something new
            — you're in the right place. Welcome to the start of something
            meaningful.
          </CardDescription>
          <ul className="flex items-center gap-2 drop-shadow-2xl py-5">
            {author?.socialMedia?.map((media) => (
              <Button
                variant={"outline"}
                key={media.url}
                className="capitalize"
              >
                {media.platform}
              </Button>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
