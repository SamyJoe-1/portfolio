import { NextResponse } from "next/server";

import {
  articles,
  buildAbsoluteUrl,
  experienceItems,
  projects,
  services,
  siteConfig
} from "@/lib/content";

export const dynamic = "force-static";

export function GET() {
  const lines = [
    `# ${siteConfig.name}`,
    "",
    "> Full-Stack Software Engineer based in Cairo, Egypt. Specializes in Laravel, PHP, React, Tailwind, DevOps, and AI automation systems.",
    "",
    "## Primary Pages",
    `- Home: ${buildAbsoluteUrl("/")}`,
    `- About: ${buildAbsoluteUrl("/about")}`,
    `- Projects: ${buildAbsoluteUrl("/projects")}`,
    `- Career: ${buildAbsoluteUrl("/career")}`,
    `- Articles: ${buildAbsoluteUrl("/articles")}`,
    "",
    "## Expertise",
    ...services.map((service) => `- ${service.title.en}: ${service.summary.en}`),
    "",
    "## Experience Highlights",
    ...experienceItems.map(
      (item) =>
        `- ${item.period} | ${item.role} @ ${item.company}: ${item.summary.en}`
    ),
    "",
    "## Selected Projects",
    ...projects.map(
      (project) =>
        `- ${project.title}: ${project.subtitle.en} | Stack: ${project.tags.join(", ")}`
    ),
    "",
    "## Topic Pages",
    ...articles.map(
      (article) =>
        `- ${article.title.en}: ${buildAbsoluteUrl(`/articles#${article.slug}`)}`
    )
  ].join("\n");

  return new NextResponse(lines, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}
