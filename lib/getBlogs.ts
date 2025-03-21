import { Blog } from "@/sanity.types";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export async function getBlogs(): Promise<Blog[] | null> {
  try {
    return client.fetch(groq`*[_type=="blog"] | order(created_on desc)`);
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}

export async function getBlog({
  blogId,
}: {
  blogId: string;
}): Promise<Blog | null> {
  if (!blogId) return null;

  try {
    console.log("Fetching blog with ID:", { blogId });

    // Use a parameterized query to prevent injection
    const query = groq`*[_type == "blog" && _id == $blogId][0]`;
    const blog = await client.fetch(query, { blogId });

    console.log("Fetched blog:", { blog });
    return blog || null;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}
