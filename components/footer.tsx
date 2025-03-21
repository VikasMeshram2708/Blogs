import { socialMediaLinks as socialLinks } from "@/data";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-foreground text-muted p-5">
      <div className="max-w-7xl mx-auto px-4 lg:px-0 flex items-center justify-between">
        <section>
          <Link href="/">
            <h1 className="text-xl md:text-2xl lg:text-3xl">Vikas Blogs</h1>
          </Link>
          <ul className="flex gap-2 py-2">
            {socialLinks &&
              socialLinks?.map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    target="_blank"
                    className="capitalize text-xs"
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
          </ul>
        </section>
        <address>
          <h1>Nagpur, Maharashtra, India</h1>
          <p>Pincode, 441110</p>
        </address>
      </div>
      <p className="text-center text-sm">
        Copyright &copy; Vikas Meshram {new Date().getFullYear()}
      </p>
    </footer>
  );
}
