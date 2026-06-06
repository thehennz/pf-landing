import type { MetadataRoute } from "next";

// ⚠️  Обновите когда переедете на постоянный домен
const SITE_URL = "https://fhs2.duckdns.org:8443";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
