import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://motioneducareschool.in/launch",
      lastModified: new Date().toISOString(),
      priority: 1.0,
    },
  ];
}
