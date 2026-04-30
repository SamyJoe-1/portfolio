import type { MetadataRoute } from "next";

import { buildAbsoluteUrl, sitemapRoutes, projects, articles } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = sitemapRoutes.map((route) => ({
    url: buildAbsoluteUrl(route.path),
    changeFrequency: "weekly",
    priority: route.page === "home" ? 1 : 0.8
  }));

  // Map out deep links for all Projects
  projects.forEach((project) => {
    routes.push({
      url: buildAbsoluteUrl(`/projects#${project.slug}`),
      changeFrequency: "monthly",
      priority: 0.7
    });
    routes.push({
      url: buildAbsoluteUrl(`/ar/projects#${project.slug}`),
      changeFrequency: "monthly",
      priority: 0.7
    });
  });

  // Map out deep links for all Articles
  articles.forEach((article) => {
    routes.push({
      url: buildAbsoluteUrl(`/articles#${article.slug}`),
      changeFrequency: "monthly",
      priority: 0.6
    });
    routes.push({
      url: buildAbsoluteUrl(`/ar/articles#${article.slug}`),
      changeFrequency: "monthly",
      priority: 0.6
    });
  });

  return routes;
}
