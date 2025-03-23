import { cn } from "@/lib/utils";

type BlogsHeaderProps = {
  title: string;
  className?: string;
};

export default function BlogsHeader({ title, className }: BlogsHeaderProps) {
  return (
    <header
      className={cn(
        "w-full bg-foreground/30 text-muted flex items-center justify-center text-center",
        "px-4 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32",
        className
      )}
    >
      <h1
        className={cn(
          "font-bold leading-tight",
          "text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
        )}
      >
        {title}
      </h1>
    </header>
  );
}
