import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Menu, User } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { navItems } from "@/data";

export default function Navbar() {
  return (
    <nav className="w-full border-b drop-shadow">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <Link href="/">
          <h1 className="text-xl font-bold">Vikas Blogs</h1>
        </Link>
        <ul className="hidden text-xs lg:flex items-center gap-3">
          {Array.isArray(navItems) &&
            navItems?.map((item) => (
              <Link key={item.href} href={item.href}>
                <li className="capitalize">{item.title}</li>
              </Link>
            ))}
        </ul>
        <Button
          className="cursor-pointer hidden lg:flex items-center gap-2"
          variant={"outline"}
        >
          <User />
          Hire Me
        </Button>

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
              <Button className="cursor-pointer" variant={"outline"}>
                <User />
                Hire Me
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
