import type { MetadataRoute } from "next";

import { buildAbsoluteUrl, sitemapRoutes } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapRoutes.map((route) => ({
    url: buildAbsoluteUrl(route.path),
    changeFrequency: "monthly",
    priority: route.page === "home" ? 1 : 0.8
  }));
}
