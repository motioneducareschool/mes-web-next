// app/robots.ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api", // Disallow all API routes
          "/private/", // Example of other private routes (optional)
        ],
      },
    ],
    sitemap: "https://motioneducareschool.in/sitemap.xml",
  };
}
