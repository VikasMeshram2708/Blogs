import { socialMediaLinks as socialLinks } from "@/data";
import React from "react";
import { NavHeader } from "./navbar";

export default function Footer() {
  return (
    <footer className="w-full bg-foreground text-muted p-5">
      <div className="max-w-7xl mx-auto px-4 lg:px-0 flex items-center justify-between">
        <section>
          <NavHeader className="text-white" />
          <ul className="flex gap-2 p-4">
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
      <p className="text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Vikas Meshram. All rights reserved.
      </p>
    </footer>
  );
}
