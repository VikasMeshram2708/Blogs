// import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default async function Home() {
  const res = await fetch("https://shrimo.com/fake-api/blog");
  const data: { blogs: Blog[] } = await res.json();

  return (
    <main className="min-h-screen w-full">
      <div className="container mx-auto px-6 py-2 lg:py-10">
        <ul className="grid grid-cols-3 gap-5">
          {data?.blogs.map((blog) => (
            <Card
              key={blog._id}
              className="max-w-xl mx-auto drop-shadow-lg hover:scale-105 duration-300 ease-in"
            >
              <Link href={`/${blog._id}`}>
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
              </Link>
            </Card>
          ))}
        </ul>
      </div>
    </main>
  );
}
