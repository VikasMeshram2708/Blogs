import { Blog } from "@/sanity.types";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Link from "next/link";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const getBlogsContent = async ({
  blogId,
}: {
  blogId: string;
}): Promise<Blog[] | null> => {
  try {
    const query = groq`*[_type=="blog"]{_id, title, slug}`;
    const res: Blog[] = await client.fetch(query);

    return res?.filter((blog) => blog._id !== blogId);
  } catch (error) {
    console.error(error);
    return null;
  }
};

type BlogsContentTableProps = {
  blogId: string;
};
export default async function BlogsContentTable({
  blogId,
}: BlogsContentTableProps) {
  const data = await getBlogsContent({ blogId });

  return (
    <div className="w-full h-auto">
      <div className="max-w-lg mx-auto p-4">
        <Card>
          <CardHeader>
            <CardTitle>Contents</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid gap-4">
              {data &&
                data?.map((blog, idx) => (
                  <Link
                    href={`/${blog.slug?.current}?uid=${blog._id}`}
                    key={blog._id}
                  >
                    <div className="flex items-center gap-2">
                      <CardTitle className="capitalize text-xs">
                        {idx + 1}
                      </CardTitle>
                      <CardDescription className="capitalize text-xs">
                        {blog?.title}
                      </CardDescription>
                    </div>
                  </Link>
                ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
