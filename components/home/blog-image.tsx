"use client";
import { urlFor } from "@/sanity/lib/image";
import { Image } from "next-sanity/image";

export default function BlogImage({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  return (
    <Image
      className="object-cover"
      width={500}
      height={500}
      src={urlFor(url).url()}
      alt={title}
    />
  );
}
