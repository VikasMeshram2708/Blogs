import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VBlogs | Expert-Curated Blogs on Tech, Lifestyle, Health & More",
  description:
    "Explore trending and insightful blogs on technology, lifestyle, health, and personal growth. VBlogs brings expert opinions, guides, and tips tailored for modern readers.",
  keywords: [
    "vblogs, tech blogs, lifestyle tips, health and wellness blogs, blog website India, expert blog articles, trending blogs 2025, personal development blogs, modern blog platform",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative flex min-h-screen flex-col justify-between">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
