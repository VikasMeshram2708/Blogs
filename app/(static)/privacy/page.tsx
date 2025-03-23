import { client } from "@/sanity/lib/client";
import { groq, PortableText } from "next-sanity";
import React from "react";
import { Privacy } from "@/sanity.types";
import { portableTextComponents } from "@/lib/portableComponents";
import BlogsHeader from "@/components/blogs/blogs-header";
import { TypedObject } from "sanity";

export default async function PolicyPage() {
  async function getPolicy(): Promise<Privacy[] | null> {
    try {
      return await client.fetch(groq`*[_type == "privacy"]`);
    } catch (error) {
      console.error("Error fetching privacy policy:", error);
      return null;
    }
  }

  const policyData = await getPolicy();
  const content: TypedObject[] = policyData?.[0]?.content ?? [];

  return (
    <div className="min-h-screen w-full">
      <BlogsHeader title="Privacy Policy" />
      <div className="max-w-3xl mx-auto p-5">
        {content.length > 0 ? (
          <PortableText value={content} components={portableTextComponents} />
        ) : (
          <p className="text-gray-500">No privacy policy content available.</p>
        )}
      </div>
    </div>
  );
}
