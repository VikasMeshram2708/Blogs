import Link from "next/link";
import React from "react";
import { ModeToggle } from "../mode-toggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background shadow-md border-b">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
          <Link href="/">ShivStance Blogs</Link>
        </h2>
        <ModeToggle />
      </nav>
    </header>
  );
}
