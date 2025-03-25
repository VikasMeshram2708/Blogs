import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "sonner";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Revolutionizing Pet Care: Expert Advice & Trending Services | PashuCare",
  description:
    "Explore cutting-edge pet care trends, expert veterinary insights, and innovative services for your furry companions at PashuCare. Join the movement of modern pet parenting today!",
  keywords: [
    "Modern pet care",
    "Trending pet services",
    "Veterinary insights",
    "Pet health innovations",
    "Holistic pet wellness",
    "Pet hygiene solutions",
    "Smart pet products",
    "Online vet consultations",
  ],
  openGraph: {
    title:
      "Revolutionizing Pet Care: Expert Advice & Trending Services | PashuCare",
    url: "https://pashucare.com",
    description:
      "Explore cutting-edge pet care trends, expert veterinary insights, and innovative services for your furry companions at PashuCare. Join the movement of modern pet parenting today!",
    locale: "en_IN",
    type: "website",
    images: [
      "https://ik.imagekit.io/wciw9sobc/Pashucare/seo/pashucare.png?updatedAt=1742888053705",
    ],
  },
  twitter: {
    title: "Join the Modern Pet Care Revolution | PashuCare",
    card: "summary_large_image",
    creator: "@VikasMeshram",
    description:
      "Discover trending pet care solutions and expert advice at PashuCare. Transform your approach to pet parenting today!",
    images: [
      "https://ik.imagekit.io/wciw9sobc/Pashucare/seo/pashucare.png?updatedAt=1742888053705",
    ],
  },
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
        {process.env.NODE_ENV === "production" && (
          <Script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9887574030892768"
            crossOrigin="anonymous"
          ></Script>
        )}

        <div className="relative flex min-h-screen flex-col justify-between">
          <Navbar />
          <Toaster position="top-right" />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
