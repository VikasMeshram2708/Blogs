import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/studio", "/studio/:path*", "/api", "/api/:path*"],
      },
    ],
    sitemap: "https://pashucare.com/sitemap.xml",
  };
}
