import type { MetadataRoute } from "next";

import { buildAbsoluteUrl, sitemapRoutes } from "@/lib/content";

export const dynamic = "force-static";

/**
 * Only real, crawlable pages go in the sitemap.
 * Fragment URLs (e.g. /projects#ashrat) are ignored by Google — they
 * all resolve to the same HTML as /projects and waste crawl budget.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapRoutes.map((route) => ({
    url: buildAbsoluteUrl(route.path),
    changeFrequency: "weekly" as const,
    // AR home is a translation, not the canonical root — lower priority
    priority: route.page === "home" && route.locale === "en" ? 1 : route.page === "home" ? 0.9 : 0.8,
    lastModified: new Date()
  }));
}
