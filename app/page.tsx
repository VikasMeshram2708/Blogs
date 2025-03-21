import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BlogImage from "@/components/home/blog-image";
// import Hero from "@/components/home/hero";
import Link from "next/link";
import { getBlogs } from "@/lib/getBlogs";
import { Skeleton } from "@/components/ui/skeleton";

export default async function Home() {
  const allBlogs = await getBlogs();

  if (!allBlogs) {
    return (
      <div className="min-h-screen w-full p-5">
        {/* <Hero /> */}
        <ul className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-12">
          {Array.from({ length: 6 })?.map((_, idx) => (
            <Card
              key={idx}
              className="relative border-none shadow-none outline-none p-0 bg-transparent"
            >
              <CardContent className="p-0">
                <Skeleton className="w-full h-[500px]" />
              </CardContent>
              <CardHeader className="p-0 -mt-3">
                <Skeleton className="w-full h-2" />
              </CardHeader>
            </Card>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full">
      {/* <Hero /> */}
      <ul className="py-6 md:py-8 lg:py-12 xl:py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-12 xl:gap-14 max-w-7xl mx-auto px-4 lg:px-8">
        {allBlogs?.map((blog, idx) => (
          <Card
            key={idx}
            className="border-none shadow-none outline-none p-0 bg-transparent"
          >
            <CardContent className="p-0">
              <BlogImage
                title={blog.title || ""}
                // @ts-ignore
                url={(blog.image as string) || ""}
              />
            </CardContent>
            <CardHeader className="p-0 -mt-3">
              <Link href={`/${blog.slug?.current}?uid=${blog._id}`}>
                <CardTitle className="leading-snug capitalize">
                  {blog.title}
                </CardTitle>
              </Link>
            </CardHeader>
          </Card>
        ))}
      </ul>
    </div>
  );
}
