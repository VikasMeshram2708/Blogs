import { client } from "@/sanity/lib/client";
import { groq, PortableText } from "next-sanity";
import React from "react";
import { Privacy } from "@/sanity.types";
import { portableTextComponents } from "@/lib/portableComponents";
import { TypedObject } from "sanity";
import HeroHeader from "@/components/hero-header";

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
    <div className="min-h-screen w-full relative">
      <HeroHeader title="Privacy Policy" />
      {/* <div className="bg-gradient-to-br from-rose-200 via-white to-rose-400 z-0 absolute top-0 opacity-50 bg-cyan-500 rounded-full w-[500px] h-[250px] blur-3xl"></div> */}
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
