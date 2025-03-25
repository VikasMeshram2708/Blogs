import { getBlog, getBlogs } from "@/lib/getBlogs";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "@/lib/portableComponents";

import BlogsHeader from "@/components/blogs/blogs-header";
import { Metadata } from "next";

import Author from "@/components/author";
import BlogsContentTable from "@/components/blogs/blogs-content-table";

type BlogParams = {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    uid: string;
  }>;
};

export async function generateStaticParams() {
  const blogs = await getBlogs();
  return (
    blogs?.map((blog) => ({
      slug: blog?.slug?.current || "blog slug",
    })) ?? []
  );
}

export async function generateMetadata(props: BlogParams): Promise<Metadata> {
  const { uid } = await props.searchParams;
  const blog = await getBlog({ blogId: decodeURIComponent(uid) });

  return {
    title: blog?.title || "Blog post",
  };
}

export default async function Blog(props: BlogParams) {
  const { slug } = await props.params;
  const { uid } = await props.searchParams;

  const blog = await getBlog({ blogId: decodeURIComponent(uid) });

  if (!slug || !uid || !blog) {
    return notFound();
  }

  return (
    <div className="min-h-screen w-full">
      <BlogsHeader title={blog?.title as string} />

      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 lg:px-8 py-8 gap-8">
        {/* Left Column: Content Table */}
        <aside className="w-full lg:w-1/4 hidden lg:block">
          <BlogsContentTable blogId={uid} />
        </aside>

        {/* Main Content */}
        <main className="w-full lg:w-3/4 max-w-none">
          <PortableText
            value={blog?.content || []}
            components={portableTextComponents}
          />
          <div className="mt-12">
            <Author />
          </div>
        </main>
      </div>
    </div>
  );
}
