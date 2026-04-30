import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenText,
  BriefcaseBusiness,
  Download,
  Globe,
  LayoutDashboard,
  Mail,
  Sparkles
} from "lucide-react";

import {
  AnimatedHeroShapes,
  ArticleScroller,
  AnimatedMetric,
  DocumentLanguageSync,
  MobileMenu,
  ProjectGallery,
  QuickContactForm,
  Reveal,
  TestimonialsCarousel,
  VideoDialog
} from "@/components/client";
import type { Locale, PageId } from "@/lib/content";
import {
  aboutHighlights,
  articles,
  buildAbsoluteUrl,
  experienceItems,
  faqItems,
  getPath,
  heroContent,
  navPages,
  offerCards,
  pageMetadata,
  profileFacts,
  projects,
  services,
  siteConfig,
  skillMeters,
  socialLinks,
  strengthBlocks,
  testimonials
} from "@/lib/content";

type SitePageProps = {
  locale: Locale;
  page: PageId;
  path: string;
};

const socialIconMap = {
  Email: Mail
};

const pageGhostTitles: Record<PageId, string> = {
  home: "BUILDING SYSTEMS",
  about: "PROFILE",
  projects: "WORKING PROCESS",
  career: "CAREER MAP",
  articles: "RECENT NEWS"
};

export function SitePage({ locale, page, path }: SitePageProps) {
  const isArabic = locale === "ar";
  const faq = faqItems[locale];
  const pageMeta = pageMetadata[locale][page];

  const navItems = navPages.map((item) => ({
    ...item,
    label: item.label[locale],
    href: getPath(locale, item.id)
  }));

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: siteConfig.name,
      url: buildAbsoluteUrl(path),
      image: buildAbsoluteUrl("/assets/images/about/og.png"),
      jobTitle: "Full-Stack Software Engineer",
      description: pageMeta.description,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cairo",
        addressCountry: "EG"
      },
      sameAs: socialLinks.map((link) => link.href),
      knowsAbout: [
        "Laravel",
        "PHP",
        "React",
        "Tailwind CSS",
        "RESTful API",
        "Linux",
        "DevOps",
        "OpenAI API",
        "Automation"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": page === "articles" ? "FAQPage" : page === "projects" ? "CollectionPage" : "ProfilePage",
      name: pageMeta.title,
      description: pageMeta.description,
      url: buildAbsoluteUrl(path),
      mainEntity:
        page === "articles"
          ? faq.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer
              }
            }))
          : undefined
    }
  ];

  return (
    <main
      dir={isArabic ? "rtl" : "ltr"}
      className={`min-h-screen overflow-x-clip ${isArabic ? "locale-ar font-arabic" : ""}`}
    >
      <DocumentLanguageSync locale={locale} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />

      <div className="site-bg-gradient pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(67,137,202,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(67,137,202,0.12),transparent_24%)]" />

      <SiteHeader currentPage={page} locale={locale} navItems={navItems} />

      {page === "home" ? (
        <>
          <HeroSection locale={locale} />
          <AboutSection locale={locale} />
          <CareerSection locale={locale} compact />
          <ServicesSection locale={locale} />
          <ProjectsSection locale={locale} compact />
          <TestimonialsSection locale={locale} />
          <OfferSection locale={locale} />
          <ArticlesSection locale={locale} compact />
          <ContactSection locale={locale} />
        </>
      ) : null}

      {page === "about" ? (
        <>
          <PageLead
            locale={locale}
            ghostTitle={pageGhostTitles[page]}
            eyebrow={isArabic ? "ملف مهني" : "Profile Overview"}
            titleHtml={
              isArabic
                ? "مهندس يبني <span class=\"inline-accent\">المنتج والعملية</span> معًا"
                : "An engineer who builds the <span class=\"inline-accent\">product and the operation</span>"
            }
            description={
              isArabic
                ? "هذه الصفحة توضح كيف أفكر، كيف أعمل، وما نوع القيمة التي أقدمها عندما أمتلك المنتج من البداية حتى الإطلاق."
                : "This page explains how I think, how I work, and what kind of value I bring when I own a product from scope to launch."
            }
          />
          <ProfileFactsSection locale={locale} />
          <StrengthsSection locale={locale} />
          <ServicesSection locale={locale} />
          <TestimonialsSection locale={locale} />
          <ContactSection locale={locale} />
        </>
      ) : null}

      {page === "projects" ? (
        <>
          <PageLead
            locale={locale}
            ghostTitle={pageGhostTitles[page]}
            eyebrow={isArabic ? "مختارات أعمال" : "Selected Case Studies"}
            titleHtml={
              isArabic
                ? "مشاريع حقيقية <span class=\"inline-accent\">بحجم تشغيل فعلي</span>"
                : "Real systems with <span class=\"inline-accent\">real operating weight</span>"
            }
            description={
              isArabic
                ? "هذه المشاريع تجمع بين التعقيد التشغيلي، ووضوح المعمارية، والقدرة على التسليم والإطلاق. كل مشروع هنا له منطق بزنس واضح وأثر ملموس."
                : "These projects combine operational complexity, architectural clarity, and actual shipping discipline. Each one solves a real business workflow with measurable impact."
            }
          />
          <ProjectsSection locale={locale} compact={false} />
          <ContactSection locale={locale} />
        </>
      ) : null}

      {page === "career" ? (
        <>
          <PageLead
            locale={locale}
            ghostTitle={pageGhostTitles[page]}
            eyebrow={isArabic ? "رحلة وخبرة" : "Experience and Delivery"}
            titleHtml={
              isArabic
                ? "من التدريب إلى <span class=\"inline-accent\">التملك الكامل للمنتج</span>"
                : "From teaching to <span class=\"inline-accent\">full product ownership</span>"
            }
            description={
              isArabic
                ? "المسيرة هنا ليست مجرد تواريخ. هي دليل على كيف تطورت طريقة الشغل: من التدريس، إلى الفريلانس، إلى بناء أنظمة معقدة أمتلكها بالكامل."
                : "This is more than a timeline. It shows how the work evolved: from teaching, to freelancing, to owning complex systems end to end."
            }
          />
          <CareerSection locale={locale} compact={false} />
          <TestimonialsSection locale={locale} />
          <OfferSection locale={locale} />
          <ContactSection locale={locale} />
        </>
      ) : null}

      {page === "articles" ? (
        <>
          <PageLead
            locale={locale}
            ghostTitle={pageGhostTitles[page]}
            eyebrow={isArabic ? "محتوى وخبرة" : "Notes and Breakdowns"}
            titleHtml={
              isArabic
                ? "صفحات محتوى <span class=\"inline-accent\">تفهم كيف أفكر</span>"
                : "Content pages that show <span class=\"inline-accent\">how I think</span>"
            }
            description={
              isArabic
                ? "بدلًا من روابط فارغة، هذه الصفحة تحول خبرات التنفيذ إلى صفحات موضوعية ثابتة تساعد الزوار وAI agents على فهم طريقة عملي."
                : "Instead of shallow placeholder links, this page turns implementation experience into static topic pages that help visitors and AI agents understand how I work."
            }
          />
          <ArticlesSection locale={locale} compact={false} />
          <FaqSection locale={locale} />
          <ContactSection locale={locale} />
        </>
      ) : null}

      <SiteFooter locale={locale} />
    </main>
  );
}

function SiteHeader({
  locale,
  currentPage,
  navItems
}: {
  locale: Locale;
  currentPage: PageId;
  navItems: Array<{ id: PageId; label: string; href: string }>;
}) {
  const switchHref =
    locale === "en" ? getPath("ar", currentPage) : getPath("en", currentPage);

  return (
    <>
      <div className="site-topbar border-b border-white/8 bg-[#081221]">
        <div className="shell hidden items-center justify-between py-1.5 lg:flex">
          <div className="flex items-center gap-3">
            <Link href={socialLinks[2].href} target="_blank" className="primary-button h-9 px-4 py-0 text-sm">
              <SocialSymbol label="WhatsApp" />
              {locale === "en" ? "WhatsApp" : "واتساب"}
            </Link>
            <span className="text-sm text-white/55">
              Software Engineer | Freelancer | Automation Builder
            </span>
          </div>

          <div className="flex items-center gap-2">
            {socialLinks.map((link) => {
              const Icon = socialIconMap[link.label as keyof typeof socialIconMap];
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  target={
                    link.href.startsWith("http") || link.href.startsWith("mailto:")
                      ? "_blank"
                      : undefined
                  }
                  className="icon-button"
                  aria-label={link.label}
                >
                  {Icon ? <Icon className="h-4 w-4" /> : <SocialSymbol label={link.label} />}
                </Link>
              );
            })}
            <Link href={switchHref} className="ghost-button ml-2 h-9 px-4 py-0 text-sm">
              {locale === "en" ? "العربية" : "English"}
            </Link>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-white/8 bg-ink/85 backdrop-blur-xl">
        <div className="shell flex items-center justify-between gap-4 py-4">
          <Link href={getPath(locale, "home")} className="flex items-center relative">
            <Image
              src="/assets/images/main/logo.png"
              alt="SamyJoe logo"
              width={220}
              height={60}
              priority
              className="logo-dark h-auto w-[194px] md:w-[228px]"
            />
            <Image
              src="/assets/images/main/logo-light.png"
              alt="SamyJoe logo"
              width={220}
              height={60}
              priority
              className="logo-light absolute left-0 top-1/2 -translate-y-1/2 h-auto w-[194px] md:w-[228px] opacity-0 pointer-events-none"
            />
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`nav-pill ${currentPage === item.id ? "nav-pill-active" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link href={siteConfig.cvPath} className="ghost-button">
              <Download className="h-4 w-4" />
              CV
            </Link>
            <Link href={socialLinks[2].href} target="_blank" className="primary-button">
              <ArrowRight className="h-4 w-4" />
              {locale === "en" ? "Let's Talk" : "لنتحدث"}
            </Link>
          </div>

          <MobileMenu
            locale={locale}
            currentPage={currentPage}
            navItems={navItems}
            topLabel={locale === "en" ? "Open menu" : "فتح القائمة"}
          />
        </div>
      </header>
    </>
  );
}

function HeroSection({ locale }: { locale: Locale }) {
  const isArabic = locale === "ar";
  const hero = heroContent[locale];

  return (
    <section id="home" className="section-shell relative overflow-hidden pt-10 md:pt-16">
      <AnimatedHeroShapes />

      <div className="shell grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <div className="max-w-3xl">
            <p
              className="eyebrow"
              dangerouslySetInnerHTML={{ __html: hero.eyebrowHtml ?? hero.eyebrow }}
            />
            <h1
              className="mt-6 font-display text-5xl uppercase leading-[0.92] text-white sm:text-6xl lg:text-7xl"
              dangerouslySetInnerHTML={{ __html: hero.titleHtml }}
            />
            <p className="section-copy mt-8 max-w-2xl border-s-4 border-brand ps-5 text-lg leading-9">
              {hero.subtitle}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href={siteConfig.cvPath} className="primary-button">
                <Download className="h-4 w-4" />
                {hero.primaryCta}
              </Link>
              <Link href={getPath(locale, "projects")} className="ghost-button">
                <ArrowRight className={`h-4 w-4 ${isArabic ? "rotate-180" : ""}`} />
                {hero.secondaryCta}
              </Link>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/10 bg-panel/70 p-5">
                <p className="text-3xl font-semibold text-brand">4+</p>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/55">
                  {hero.statOne}
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-panel/70 p-5">
                <p className="text-3xl font-semibold text-brand">20-50</p>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/55">
                  {hero.statTwo}
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="relative">
          <div className="relative mx-auto max-w-[640px]">
            <div className="absolute -top-12 right-6 h-40 w-40 rounded-full border border-brand/25" />
            <div className="absolute -bottom-7 left-4 h-24 w-24 rounded-full bg-brand/10 blur-2xl" />
            <Image
              src="/assets/images/hero/1.png"
              alt="SamyJoe portrait"
              width={700}
              height={760}
              priority
              className="relative z-10 mx-auto h-auto w-full max-w-[560px] animate-float-slow object-contain"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AboutSection({ locale }: { locale: Locale }) {
  const about = aboutHighlights[locale];

  return (
    <section id="about" className="section-shell section-alt bg-white/[0.02]">
      <div className="shell grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <Reveal>
          <p className="eyebrow">{about.eyebrow}</p>
          <h2
            className="section-title mt-3"
            dangerouslySetInnerHTML={{ __html: about.titleHtml }}
          />
          <p className="section-copy mt-6 border-s-4 border-brand ps-5 text-lg leading-9">
            {about.body}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/68">
            {about.extended}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {profileFacts.map((fact) => (
              <span key={fact.label.en} className="outline-chip">
                <strong className="text-white">{fact.label[locale]}:</strong> {fact.value[locale]}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal className="lg:justify-self-end w-full max-w-[600px]">
          <VideoDialog
              locale={locale}
              title={locale === "en" ? "SamyJoe intro video" : "فيديو تعريفي لسامي جو"}
              thumbnail="/assets/images/about/cover.png"
          />
        </Reveal>
      </div>
    </section>
  );
}

function CareerSection({
  locale,
  compact
}: {
  locale: Locale;
  compact: boolean;
}) {
  const intro = {
    en: {
      eyebrow: "My Experience",
      titleHtml: "My <span class=\"inline-accent\">Journey</span>",
      description:
        "From dropshipping platforms and CRMs to network management tools and AI-driven recruitment pipelines."
    },
    ar: {
      eyebrow: "خبرتي",
      titleHtml: "مسيرتي <span class=\"inline-accent\">المهنية</span>",
      description:
        "من منصات dropshipping وCRMs إلى أدوات إدارة الشبكات وخطوط التوظيف المدعومة بالذكاء الاصطناعي."
    }
  }[locale];

  return (
    <section id="career" className="section-shell">
      <div className="shell">
        <SectionHeader
          eyebrow={intro.eyebrow}
          titleHtml={intro.titleHtml}
          description={intro.description}
          ghostTitle={compact ? "" : pageGhostTitles.career}
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          {experienceItems.map((item, index) => (
            <Reveal
              key={`${item.company}-${item.period}`}
              className={`career-card rounded-[1.5rem] border border-white/10 p-6 transition duration-500 hover:-translate-y-2 hover:border-brand/40 hover:bg-panel/65 ${
                index % 2 === 0 ? "bg-panel/35" : "bg-transparent"
              }`}
            >
              <p className="text-sm text-white/45">{item.period}</p>
              <h3 className="mt-3 text-xl font-semibold text-brand">{item.role}</h3>
              <p className="mt-1 text-sm uppercase tracking-[0.18em] text-white/55">
                {item.company} - {item.mode}
              </p>
              <p className="mt-4 text-sm leading-7 text-white/72">{item.summary[locale]}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {skillMeters.map((skill) => (
            <Reveal key={skill.label}>
              <AnimatedMetric value={skill.value} label={skill.label} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection({ locale }: { locale: Locale }) {
  return (
    <section id="services" className="section-shell section-alt bg-white/[0.02]">
      <div className="shell">
        <SectionHeader
          eyebrow={locale === "en" ? "WHAT I DO" : "ما الذي أقدمه"}
          titleHtml={
            locale === "en"
              ? "My <span class=\"inline-accent\">Services</span>"
              : "خدماتي <span class=\"inline-accent\">الأساسية</span>"
          }
          description={
            locale === "en"
              ? "End-to-end engineering — from system architecture and backend APIs to frontend interfaces, real-time features, and full server deployment."
              : "هندسة من الأول للآخر — من معمارية النظام وBackend APIs إلى الواجهات وReal-time features والنشر الكامل."
          }
          ghostTitle="MY SERVICES"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title.en} className="service-card">
              <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 text-brand">
                {index === 0 ? (
                  <LayoutDashboard className="h-7 w-7" />
                ) : index === 1 ? (
                  <Sparkles className="h-7 w-7" />
                ) : index === 2 ? (
                  <Globe className="h-7 w-7" />
                ) : index === 3 ? (
                  <BookOpenText className="h-7 w-7" />
                ) : index === 4 ? (
                  <BriefcaseBusiness className="h-7 w-7" />
                ) : (
                  <LayoutDashboard className="h-7 w-7" />
                )}
              </div>
              <h3 className="text-2xl font-semibold text-white">{service.title[locale]}</h3>
              <p className="mt-4 text-base leading-8 text-white/72">{service.summary[locale]}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection({
  locale,
  compact
}: {
  locale: Locale;
  compact: boolean;
}) {
  return (
    <section id="projects" className="section-shell">
      <div className="shell">
        <SectionHeader
          eyebrow={locale === "en" ? "Portfolio" : "الأعمال"}
          titleHtml={
            locale === "en"
              ? "Key <span class=\"inline-accent\">Projects</span>"
              : "أهم <span class=\"inline-accent\">المشاريع</span>"
          }
          description={
            locale === "en"
              ? "Production-grade systems built solo — from architecture to deployment. Real platforms, real users, real impact across multiple industries."
              : "أنظمة Production-grade تم بناؤها بشكل فردي — من المعمارية حتى الإطلاق. منصات حقيقية، مستخدمون حقيقيون، وأثر ملموس."
          }
          ghostTitle="WORKING PROCESS"
        />

        <div className="mt-12">
          <ProjectGallery locale={locale} projects={projects} showInlineDetails={!compact} />
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection({ locale }: { locale: Locale }) {
  return (
    <section id="testimonials" className="section-shell section-alt bg-white/[0.02]">
      <div className="shell">
        <SectionHeader
          eyebrow={locale === "en" ? "Client Feedback" : "آراء العملاء"}
          titleHtml={
            locale === "en"
              ? "What <span class=\"inline-accent\">Clients</span> Say"
              : "ماذا يقول <span class=\"inline-accent\">العملاء</span>"
          }
          description={
            locale === "en"
              ? "Real feedback from real clients who trust me with their projects."
              : "آراء حقيقية من عملاء حقيقيين وثقوا بي في مشاريعهم."
          }
          ghostTitle="TESTIMONIALS"
        />

        <div className="mt-12">
          <TestimonialsCarousel locale={locale} items={testimonials} />
        </div>
      </div>
    </section>
  );
}

function OfferSection({ locale }: { locale: Locale }) {
  return (
    <section id="offer" className="section-shell">
      <div className="shell">
        <SectionHeader
          eyebrow={locale === "en" ? "HOW I WORK" : "كيف أعمل"}
          titleHtml={
            locale === "en"
              ? "What You <span class=\"inline-accent\">Get</span>"
              : "ماذا <span class=\"inline-accent\">ستحصل عليه</span>"
          }
          description={
            locale === "en"
              ? "Not just code — a complete engineering partner who owns the full cycle from architecture to production."
              : "ليس مجرد كود — بل شريك هندسي كامل يمتلك الدورة كاملة من المعمارية حتى الإنتاج."
          }
          ghostTitle="SPECIFICATIONS"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {offerCards.map((card, index) => (
            <Reveal
              key={card.title.en}
              className={`pricing-card ${index === 1 ? "pricing-card-active" : ""}`}
            >
              <div
                className={`mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl ${
                  index === 1 ? "bg-white text-slate-950" : "bg-white/8 text-brand"
                }`}
              >
                {index === 0 ? (
                  <LayoutDashboard className="h-7 w-7" />
                ) : index === 1 ? (
                  <Sparkles className="h-7 w-7" />
                ) : (
                  <BriefcaseBusiness className="h-7 w-7" />
                )}
              </div>
              <h3 className="text-2xl font-semibold">{card.title[locale]}</h3>
              <p className={`mt-4 text-base leading-8 ${index === 1 ? "text-white" : "text-white/76"}`}>
                {card.body[locale]}
              </p>
              <div className="mt-6">
                <Link
                  href={socialLinks[2].href}
                  target="_blank"
                  className={index === 1 ? "primary-button offer-active-button" : "primary-button"}
                >
                  <ArrowRight className="h-4 w-4" />
                  {locale === "en" ? "Let's Talk" : "لنتحدث"}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArticlesSection({
  locale,
  compact
}: {
  locale: Locale;
  compact: boolean;
}) {
  return (
    <section id="articles" className="section-shell section-alt bg-white/[0.02]">
      <div className="shell">
        <SectionHeader
          eyebrow={locale === "en" ? "TECH ARTICLES" : "مقالات تقنية"}
          titleHtml={
            locale === "en"
              ? "Latest <span class=\"inline-accent\">Blog</span> Posts"
              : "أحدث <span class=\"inline-accent\">المقالات</span>"
          }
          description={
            locale === "en"
              ? "Engineering insights, Laravel tips, system design breakdowns, and lessons from real production systems."
              : "أفكار هندسية ونصائح Laravel وتحليلات تصميم أنظمة ودروس من أنظمة حقيقية على الهواء."
          }
          ghostTitle="RECENT NEWS"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article) => (
            <Reveal
              key={article.slug}
              className="overflow-hidden rounded-[1.7rem] border border-white/10 bg-panel/60 transition duration-500 hover:-translate-y-2 hover:border-brand/45 hover:shadow-brand"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title[locale]}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-brand/80">
                  {article.kicker[locale]}
                </p>
                <h3 className="mt-4 text-2xl font-semibold leading-8 text-white">
                  {article.title[locale]}
                </h3>
                <p className="mt-4 text-base leading-8 text-white/72">
                  {article.summary[locale]}
                </p>
                <Link
                  href={`${getPath(locale, "articles")}#${article.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand"
                >
                  {locale === "en" ? "Read the topic page" : "اقرأ الصفحة"}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        {!compact ? (
          <div className="mt-16 grid gap-8">
            {articles.map((article) => (
              <article
                key={`${article.slug}-detail`}
                id={article.slug}
                className="grid gap-7 rounded-[2rem] border border-white/10 bg-panel/50 p-7 md:p-10 lg:grid-cols-[0.95fr_1.05fr]"
              >
                <div className="relative min-h-[280px] overflow-hidden rounded-[1.5rem] border border-white/10">
                  <Image
                    src={article.image}
                    alt={article.title[locale]}
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-brand/80">
                    {article.kicker[locale]}
                  </p>
                  <h3 className="mt-3 font-display text-4xl uppercase leading-none">
                    {article.title[locale]}
                  </h3>
                  <p className="mt-6 text-base leading-8 text-white/75">
                    {article.summary[locale]}
                  </p>
                  <div className="mt-8 grid gap-4 text-base leading-8 text-white/72">
                    <p>
                      {locale === "en"
                        ? "I treat each of these topics as a working principle rather than content marketing. The emphasis is on how decisions are made, where complexity hides, and how delivery stays practical."
                        : "أتعامل مع هذه الموضوعات كمبادئ عمل حقيقية وليس كـ content marketing. التركيز هنا على كيف تُتخذ القرارات، وأين يختبئ التعقيد، وكيف يظل التنفيذ عمليًا."}
                    </p>
                    <p>
                      {locale === "en"
                        ? "That makes the page useful for clients, collaborators, recruiters, and AI systems trying to understand the style and depth of work behind the portfolio."
                        : "وهذا يجعل الصفحة مفيدة للعملاء والمتعاونين والباحثين عن التوظيف وحتى AI systems التي تحاول فهم عمق وأسلوب العمل وراء البورتفوليو."}
                    </p>
                  </div>
                </div>
              </article>
            ))}

            <ArticleScroller locale={locale} items={articles} />
          </div>
        ) : null}
      </div>
    </section>
  );
}

function ProfileFactsSection({ locale }: { locale: Locale }) {
  return (
    <section className="section-shell">
      <div className="shell grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {profileFacts.map((fact) => (
          <Reveal
            key={fact.label.en}
            className="rounded-[1.6rem] border border-white/10 bg-panel/55 p-6"
          >
            <p className="text-xs uppercase tracking-[0.26em] text-brand/80">
              {fact.label[locale]}
            </p>
            <p className="mt-4 text-lg leading-8 text-white/86">{fact.value[locale]}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function StrengthsSection({ locale }: { locale: Locale }) {
  return (
    <section className="section-shell section-alt bg-white/[0.02]">
      <div className="shell">
        <SectionHeader
          eyebrow={locale === "en" ? "Working Style" : "طريقة العمل"}
          titleHtml={
            locale === "en"
              ? "What defines the <span class=\"inline-accent\">way I build</span>"
              : "ما الذي يحدد <span class=\"inline-accent\">أسلوبي في البناء</span>"
          }
          description={
            locale === "en"
              ? "A mix of systems thinking, product ownership, and practical automation across both software and operations."
              : "مزيج من systems thinking وproduct ownership وأتمتة عملية عبر البرمجيات والعمليات."
          }
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {strengthBlocks.map((block) => (
            <Reveal key={block.title.en} className="rounded-[1.8rem] border border-white/10 bg-panel/60 p-7">
              <h3 className="text-2xl font-semibold text-white">{block.title[locale]}</h3>
              <p className="mt-4 text-base leading-8 text-white/75">{block.body[locale]}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection({ locale }: { locale: Locale }) {
  const items = faqItems[locale];

  return (
    <section className="section-shell">
      <div className="shell">
        <SectionHeader
          eyebrow={locale === "en" ? "FAQ" : "أسئلة شائعة"}
          titleHtml={
            locale === "en"
              ? "Helpful <span class=\"inline-accent\">profile context</span>"
              : "سياق <span class=\"inline-accent\">مفيد وسريع</span>"
          }
          description={
            locale === "en"
              ? "These answers exist for both humans and AI systems trying to understand the profile quickly."
              : "هذه الإجابات موجودة للزوار ولـ AI systems التي تحاول فهم الملف المهني بسرعة."
          }
        />

        <div className="mt-12 grid gap-5">
          {items.map((item) => (
            <Reveal key={item.question} className="rounded-[1.5rem] border border-white/10 bg-panel/50 p-6 md:p-7">
              <h3 className="text-xl font-semibold text-white">{item.question}</h3>
              <p className="mt-4 text-base leading-8 text-white/74">{item.answer}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection({ locale }: { locale: Locale }) {
  return (
    <section className="section-shell section-alt bg-white/[0.02]">
      <div className="shell">
        <div className="contact-section-bg relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#08111a] px-6 py-10 md:px-10 md:py-14">
          <div className="contact-map-overlay absolute inset-0 bg-[url('/assets/images/backdrop/map.png')] bg-cover bg-center opacity-[0.14]" />
          <div className="relative z-10 grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
            <Reveal>
              <p className="eyebrow">
                {locale === "en" ? "Let's Work Together" : "خلينا نشتغل سوا"}
              </p>
              <h2
                className="section-title mt-3 max-w-2xl"
                dangerouslySetInnerHTML={{
                  __html:
                    locale === "en"
                      ? "Have a project? Let's <span class=\"inline-accent\">build it together</span>"
                      : "عندك مشروع؟ يلا <span class=\"inline-accent\">نبنيه معًا</span>"
                }}
              />
              <p className="section-copy mt-5 max-w-2xl text-lg leading-9">
                {locale === "en"
                  ? "You can reach me for freelance delivery, product ownership, architecture cleanup, automation ideas, or a sharper frontend rebuild."
                  : "تقدر تتواصل معي من أجل تنفيذ مشروع فريلانس، أو تملك منتج، أو تحسين معمارية، أو أفكار automation، أو إعادة بناء واجهة بشكل أقوى."}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={socialLinks[2].href} target="_blank" className="primary-button">
                  <SocialSymbol label="WhatsApp" />
                  WhatsApp
                </Link>
                <Link href={`mailto:${siteConfig.email}`} target="_blank" className="ghost-button">
                  <Mail className="h-4 w-4" />
                  {siteConfig.email}
                </Link>
              </div>
            </Reveal>

            <Reveal className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 md:p-7">
              <QuickContactForm locale={locale} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function PageLead({
  locale,
  ghostTitle,
  eyebrow,
  titleHtml,
  description
}: {
  locale: Locale;
  ghostTitle: string;
  eyebrow: string;
  titleHtml: string;
  description: string;
}) {
  return (
    <section className="section-shell relative overflow-hidden pt-12 md:pt-16">
      {ghostTitle ? <div className="ghost-title top-10">{ghostTitle}</div> : null}
      <div className="shell relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_0.75fr] lg:items-end">
          <Reveal>
            <p className="eyebrow">{eyebrow}</p>
            <h1
              className="mt-4 font-display text-5xl uppercase leading-[0.95] text-white sm:text-6xl"
              dangerouslySetInnerHTML={{ __html: titleHtml }}
            />
          </Reveal>
          <Reveal>
            <p className="section-copy border-s-4 border-brand ps-5 text-lg leading-9">
              {description}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={siteConfig.cvPath} className="ghost-button">
                <Download className="h-4 w-4" />
                CV
              </Link>
              <Link href={getPath(locale, "home")} className="primary-button">
                <ArrowRight className={`h-4 w-4 ${locale === "ar" ? "rotate-180" : ""}`} />
                {locale === "en" ? "Back to home" : "العودة للرئيسية"}
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  titleHtml,
  description,
  ghostTitle
}: {
  eyebrow: string;
  titleHtml: string;
  description: string;
  ghostTitle?: string;
}) {
  return (
    <div className="relative">
      {ghostTitle ? <div className="ghost-title">{ghostTitle}</div> : null}
      <div className="relative z-10 grid gap-8 lg:grid-cols-[0.95fr_0.85fr] lg:items-end">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h2
            className="section-title mt-3"
            dangerouslySetInnerHTML={{ __html: titleHtml }}
          />
        </Reveal>
        <Reveal>
          <p className="section-copy border-s-4 border-brand ps-5 text-lg leading-9">
            {description}
          </p>
        </Reveal>
      </div>
    </div>
  );
}

function SocialSymbol({ label }: { label: string }) {
  if (label === "LinkedIn") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
        <path d="M4.98 3.5A2.49 2.49 0 1 0 5 8.48 2.49 2.49 0 0 0 4.98 3.5ZM3 9.75h3.96V21H3Zm6.48 0h3.8v1.54h.05c.53-1 1.83-2.06 3.78-2.06 4.05 0 4.8 2.67 4.8 6.14V21h-3.96v-5.06c0-1.2-.02-2.76-1.68-2.76-1.69 0-1.95 1.32-1.95 2.68V21H9.48Z" />
      </svg>
    );
  }

  if (label === "WhatsApp") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    );
  }

  if (label === "GitHub") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
        <path d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.82-.26.82-.58v-2.03c-3.34.73-4.04-1.42-4.04-1.42-.54-1.37-1.34-1.73-1.34-1.73-1.1-.75.08-.74.08-.74 1.2.08 1.84 1.24 1.84 1.24 1.08 1.84 2.82 1.31 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.48-1.34-5.48-5.95 0-1.31.46-2.38 1.23-3.22-.12-.3-.53-1.54.12-3.2 0 0 1-.33 3.3 1.23a11.4 11.4 0 0 1 6 0c2.29-1.56 3.28-1.24 3.28-1.24.66 1.67.25 2.91.13 3.21.77.84 1.23 1.91 1.23 3.22 0 4.62-2.82 5.64-5.51 5.94.43.38.82 1.1.82 2.22v3.29c0 .32.21.7.83.58A12 12 0 0 0 12 .5Z" />
      </svg>
    );
  }

  if (label === "YouTube") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8ZM9.6 15.8V8.2l6.6 3.8Z" />
      </svg>
    );
  }

  return <Globe className="h-4 w-4" />;
}

function SiteFooter({ locale }: { locale: Locale }) {
  return (
    <footer className="border-t border-white/8 bg-ink">
      <div className="shell flex flex-col gap-5 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <Image
            src="/assets/images/main/logo.png"
            alt="SamyJoe logo"
            width={220}
            height={60}
            className="h-auto w-[184px] md:w-[214px]"
          />

        </div>
        <div className="flex flex-wrap items-center gap-3">
          {socialLinks.map((link) => {
            const Icon = socialIconMap[link.label as keyof typeof socialIconMap];
            return (
              <Link
                key={link.label}
                href={link.href}
                target={
                  link.href.startsWith("http") || link.href.startsWith("mailto:")
                    ? "_blank"
                    : undefined
                }
                className="icon-button"
                aria-label={link.label}
              >
                {Icon ? <Icon className="h-4 w-4" /> : <SocialSymbol label={link.label} />}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="border-t border-white/6">
        <div className="shell py-4 text-center text-sm text-white/42">
          {locale === "en" ? "© 2026 All Rights Reserved." : "© 2026 جميع الحقوق محفوظة."}{" "}
          <span className="font-medium text-brand">{siteConfig.name}</span>
        </div>
      </div>
    </footer>
  );
}
