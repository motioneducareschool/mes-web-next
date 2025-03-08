// app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api", "/api/*", "/private", "/admin", "/dashboard"], // Add restricted routes
      },
    ],
    sitemap: "https://motioneducareschool.in/sitemap.xml",
  };
}
