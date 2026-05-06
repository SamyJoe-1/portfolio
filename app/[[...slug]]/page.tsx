import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SitePage } from "@/components/site-page";
import {
  buildAbsoluteUrl,
  getPageMetadata,
  getPath,
  resolveRoute,
  siteConfig,
  staticRouteParams
} from "@/lib/content";

type Params = {
  slug?: string[];
};

type PageProps = {
  params: Promise<Params>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return staticRouteParams;
}

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const route = resolveRoute((await params).slug);

  if (!route) {
    return {};
  }

  const meta = getPageMetadata(route.locale, route.page);
  const canonical = getPath(route.locale, route.page);

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: buildAbsoluteUrl(canonical),
      languages: {
        "en": buildAbsoluteUrl(getPath("en", route.page)),
        "ar": buildAbsoluteUrl(getPath("ar", route.page)),
        "x-default": buildAbsoluteUrl(getPath("en", route.page))
      }
    },
    openGraph: {
      type: "website",
      title: meta.title,
      description: meta.description,
      url: buildAbsoluteUrl(canonical),
      siteName: `${siteConfig.name} Portfolio`,
      locale: route.locale === "ar" ? "ar_EG" : "en_US",
      images: [
        {
          url: `${siteConfig.siteUrl}/assets/images/about/og.png`,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} Portfolio`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [`${siteConfig.siteUrl}/assets/images/about/og.png`]
    }
  };
}

export default async function Page({ params }: PageProps) {
  const route = resolveRoute((await params).slug);

  if (!route) {
    notFound();
  }

  return (
    <SitePage locale={route.locale} page={route.page} path={route.path} />
  );
}
