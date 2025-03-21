import { cn } from "@/lib/utils";

type BlogsHeaderProps = {
  title: string;
  className?: string;
};

export default function BlogsHeader({ title, className }: BlogsHeaderProps) {
  return (
    <div
      className={cn(
        "w-full bg-foreground/30 flex flex-col py-12 lg:py-24 xl:py-36 items-center text-muted justify-center",
        className
      )}
    >
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">{title}</h2>
    </div>
  );
}
