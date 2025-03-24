import { getBlog, getBlogs } from "@/lib/getBlogs";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "@/lib/portableComponents";
import BlogsHeader from "@/components/blogs/blogs-header";
import { Metadata } from "next";

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
    <div className="min-h-screen w-full bg-gray-50 dark:bg-gray-900">
      <BlogsHeader title={blog?.title as string} />
      <div className="max-w-3xl mx-auto px-4 lg:px-0 py-8">
        <div className="prose prose-lg max-w-none text-gray-800 dark:text-gray-200">
          <PortableText
            value={blog?.content || []}
            components={portableTextComponents}
          />
        </div>

        {/* <center className="py-5">
          <BlogImage
            title={blog?.title || ""}
            url={(blog.image as string) || ""}
          />
        </center> */}
      </div>
    </div>
  );
}
