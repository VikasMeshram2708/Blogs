// app/sitemap.ts
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch all blog slugs and UIDs
  const blogs = await client.fetch(groq`
    *[_type == "blog"]{
      "slug": slug.current,
      _updatedAt,
      _id
    }
  `);

  const staticPages = [
    {
      url: "https://blogs-app-sage.vercel.app",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://blogs-app-sage.vercel.app/blogs",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://blogs-app-sage.vercel.app/privacy",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://blogs-app-sage.vercel.app/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://blogs-app-sage.vercel.app/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const blogPages = blogs.map(
    (blog: { slug: string; _updatedAt: string; _id: string }) => ({
      url: `https://blogs-app-sage.vercel.app/${blog.slug}?uid=${blog._id}`,
      lastModified: new Date(blog._updatedAt),
      changeFrequency: "weekly",
      priority: 0.7,
    })
  );

  return [...staticPages, ...blogPages];
}
