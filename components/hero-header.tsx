import { cn } from "@/lib/utils";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type BlogsHeaderProps = {
  title: string;
  className?: string;
};

export default function HeroHeader({ title, className }: BlogsHeaderProps) {
  return (
    <header
      className={cn(
        "w-full flex flex-col text-muted bg-secondary  relative",
        "px-4 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32",
        className
      )}
    >
      <div className="absolute top-10 left-36">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Title centered */}
      <div className="text-center max-w-3xl mx-auto">
        <h1
          className={cn(
            "font-bold leading-tight text-gray-900 dark:text-white",
            "text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
          )}
        >
          {title}
        </h1>
      </div>
    </header>
  );
}
