import type { Metadata, Viewport } from "next";

import { siteConfig } from "@/lib/content";

import "./globals.css";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.siteUrl,
  image: `${siteConfig.siteUrl}/assets/images/about/og.png`,
  jobTitle: "Full-Stack Software Engineer",
  description:
    "Full-Stack Software Engineer with 4+ years of experience building production-grade web applications.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cairo",
    addressCountry: "EG"
  },
  sameAs: [
    "https://www.linkedin.com/in/samyjoe/",
    "https://github.com/samyjoe-1",
    "https://www.youtube.com/channel/UCysKhBz_ADaCNhF282Ii51A"
  ],
  knowsAbout: [
    "Laravel",
    "PHP",
    "React",
    "MySQL",
    "Docker",
    "Linux",
    "RESTful API",
    "AI automation"
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  applicationName: `${siteConfig.name} Portfolio`,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d0d0d"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="U9YmoN--q2_6QqGtVigkw2OJFAgvTBv7Yvo-uRNL0x8"
        />
        <meta
          name="google-site-verification"
          content="sg7YIWkeqMJ3oVowhCr4TRsWzkka09WoeR9ZDbaunv8"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Rubik:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400&family=Poppins:wght@300;400;500;600;700;800&family=Noto+Sans+Arabic:wght@300;400;500;600;700&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
