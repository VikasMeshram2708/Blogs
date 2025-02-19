import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { Suspense } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type BlogDetailsPageProps = {
  params: {
    id: string;
  };
};
export default async function BlogDetailsPage(params: BlogDetailsPageProps) {
  const { id } = params.params;

  const res = await fetch("https://shrimo.com/fake-api/blog");
  const data: { blogs: Blog[] } = await res.json();

  const blog: Blog | null = data.blogs.find((item) => item._id === id) ?? null;

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="min-h-screen bg-background w-full">
      <div className="container mx-auto px-6 py-2 drop-shadow-lg">
        <Breadcrumb className="my-5">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/${id}`}>{blog.title}</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Suspense
          fallback={
            <h2 className="text-sm font-semibold italic">Processing...</h2>
          }
        >
          <Card
            key={blog._id}
            className="max-w-xl mx-auto drop-shadow-lg hover:scale-105 duration-300 ease-in"
          >
            <CardHeader>
              <CardTitle className="line-clamp-1 capitalize">
                {blog.title}
              </CardTitle>
              <CardDescription className="line-clamp-2 capitalize">
                {blog.content}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p> Category: {blog.category}</p>
              <p> Status: {blog.status}</p>
              <p> Tags: {blog.tags}</p>
            </CardContent>
            <CardFooter>
              <p>
                Date:{" "}
                {new Date(blog.publishDate).toLocaleDateString([], {
                  minute: "2-digit",
                  hour: "2-digit",
                })}
              </p>
            </CardFooter>
          </Card>
        </Suspense>
      </div>
    </div>
  );
}
