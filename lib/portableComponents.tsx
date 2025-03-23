import { urlFor } from "@/sanity/lib/image";
import { PortableTextComponents } from "@portabletext/react";
import Image from "next/image";

export const portableTextComponents: PortableTextComponents = {
  // Custom rendering for images
  types: {
    image: ({ value }: { value: any }) => (
      <div className="my-8 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
        <Image
          src={urlFor(value).url()}
          // src={value?.asset?.url || ""}
          alt={value?.alt || "Blog Image"}
          width={500}
          height={350}
          className="w-full h-auto object-cover"
        />
        {value?.caption && (
          <figcaption className="mt-2 text-center text-sm text-gray-600">
            {value.caption}
          </figcaption>
        )}
      </div>
    ),
  },
  // Custom rendering for block elements (headings, paragraphs)
  block: {
    h1: ({ children }: { children?: React.ReactNode }) => (
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
        {children}
      </h1>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="text-3xl md:text-4xl font-bold mb-5 text-gray-800 dark:text-gray-200">
        {children}
      </h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
        {children}
      </h3>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-400">
        {children}
      </p>
    ),
  },
  // Custom rendering for marks (e.g., links, bold, italic)
  marks: {
    link: ({
      children,
      value,
    }: {
      children?: React.ReactNode;
      value?: any;
    }) => (
      <a
        href={value?.href || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
      >
        {children}
      </a>
    ),
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-bold text-gray-900 dark:text-white">
        {children}
      </strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em className="italic text-gray-800 dark:text-gray-300">{children}</em>
    ),
  },
  // Custom rendering for lists
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => {
      if (!children) return null;
      return (
        <ul className="list-disc pl-5 my-4 text-gray-700 dark:text-gray-400">
          {children}
        </ul>
      );
    },
    number: ({ children }: { children?: React.ReactNode }) => {
      if (!children) return null;
      return (
        <ol className="list-decimal pl-5 my-4 text-gray-700 dark:text-gray-400">
          {children}
        </ol>
      );
    },
  },
};
