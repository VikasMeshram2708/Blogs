import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BlogImage from "@/components/home/blog-image";
import Link from "next/link";
import { getBlogs } from "@/lib/getBlogs";
import { Skeleton } from "@/components/ui/skeleton";

export default async function Home() {
  const allBlogs = await getBlogs();

  const BlogCardSkeleton = () => (
    <Card className="bg-transparent border-none shadow-none p-0">
      <CardContent className="p-0">
        <Skeleton className="w-full h-[300px] rounded-xl" />
      </CardContent>
      <CardHeader className="p-0 mt-3 space-y-2">
        <Skeleton className="w-3/4 h-4 rounded-md" />
        <Skeleton className="w-1/2 h-3 rounded-md" />
      </CardHeader>
    </Card>
  );

  if (!allBlogs) {
    return (
      <div className="min-h-screen w-full p-6">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {Array.from({ length: 6 }).map((_, idx) => (
            <BlogCardSkeleton key={idx} />
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full px-4 sm:px-6 lg:px-8">
      <ul className="py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-10 max-w-7xl mx-auto px-4">
        {allBlogs.map((blog, idx) => (
          <Card key={idx} className="border-none outline-none shadow-none p-0">
            <CardContent className="p-0">
              <BlogImage
                title={blog.title || ""}
                // @ts-expect-error accept the fate
                url={(blog.image as string) || ""}
              />
            </CardContent>
            <CardHeader className="p-0 lg:-mt-2">
              <Link href={`/${blog.slug?.current}?uid=${blog._id}`}>
                <CardTitle className="p-0">{blog.title}</CardTitle>
              </Link>
            </CardHeader>
          </Card>
        ))}
      </ul>
    </div>
  );
}
