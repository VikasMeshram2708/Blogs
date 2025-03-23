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
      className="object-cover  rounded"
      width={500}
      height={350}
      src={urlFor(url).url()}
      alt={title}
    />
  );
}
