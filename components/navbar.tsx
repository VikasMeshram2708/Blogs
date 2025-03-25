"use client";

import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Menu, PawPrint } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { navItems } from "@/data";
import { cn } from "@/lib/utils";
import NewsLetterDialog from "./newsDialog";
import { motion } from "motion/react";

type NavHeaderProps = {
  className?: string;
};
export const NavHeader = ({ className }: NavHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
    >
      <Link
        href="/"
        className="flex items-center gap-2 text-gray-900 dark:text-white"
      >
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <PawPrint className={cn("w-5 h-5 text-primary", className)} />
        </motion.span>
        <motion.h1
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
          className={cn("text-base font-semibold tracking-tight", className)}
        >
          Pashu Care
        </motion.h1>
      </Link>
    </motion.div>
  );
};
export default function Navbar() {
  return (
    <nav className="w-full border-b drop-shadow">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <NavHeader />
        <ul className="hidden text-xs lg:flex items-center gap-3">
          {Array.isArray(navItems) &&
            navItems?.map((item) => (
              <Link key={item.href} href={item.href}>
                <li className="capitalize">{item.title}</li>
              </Link>
            ))}
        </ul>
        <section className="hidden lg:flex items-center gap-4">
          <NewsLetterDialog />
          <a
            href="https://vikasmeshram-portfolio.vercel.app"
            target="_blank"
            className={cn("cursor-pointer flex items-center gap-2")}
          >
            Hire Me
          </a>
        </section>

        {/* Menu bar */}
        <Sheet>
          <SheetTrigger className="lg:hidden">
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <Link href="/">
                  <h1 className="text-xl font-bold">Vikas Blogs</h1>
                </Link>
              </SheetTitle>
            </SheetHeader>
            <ul className="p-5 flex flex-col gap-4">
              {Array.isArray(navItems) &&
                navItems?.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <li className="capitalize">{item.title}</li>
                  </Link>
                ))}
            </ul>
            <SheetFooter>
              <NewsLetterDialog />
              <a
                href="https://vikasmeshram-portfolio.vercel.app"
                target="_blank"
                className={cn(
                  "cursor-pointer",
                  buttonVariants({ variant: "link" })
                )}
              >
                Hire Me
              </a>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
