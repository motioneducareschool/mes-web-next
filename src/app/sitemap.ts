// app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yourwebsite.com";

  const routes = [
    "",
    "/about",
    "/academics",
    "/academics/middle-school",
    "/academics/play-school",
    "/academics/primary-school",
    "/academics/senior-school",
    "/admissions",
    "/calendar",
    "/careers",
    "/contact",
    "/faqs",
    "/fees",
    "/gallery",
    "/hostel",
    "/labs",
    "/library",
    "/results",
    "/timetables",
    "/transport",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));
}
