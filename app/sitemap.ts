// app/sitemap.ts
import type { MetadataRoute } from "next";

const BASE_URL = "https://adi.smgcat.site"; 

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Static routes you want indexed
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/logs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
  return staticRoutes;
}
