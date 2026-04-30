"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Mail,
  Menu,
  X
} from "lucide-react";

import type { Locale, PageId } from "@/lib/content";
import { getPath, siteConfig } from "@/lib/content";

type RevealProps = {
  children: ReactNode;
  className?: string;
};

type NavItem = {
  id: PageId;
  label: string;
  href: string;
};

type ProjectCard = {
  slug: string;
  title: string;
  image: string;
  gallery: string[];
  subtitle: Record<Locale, string>;
  description: Record<Locale, string[]>;
  tags: string[];
};

type Testimonial = {
  name: Record<Locale, string>;
  title: Record<Locale, string>;
  quote: Record<Locale, string>;
};

type Article = {
  slug: string;
  title: Record<Locale, string>;
  kicker: Record<Locale, string>;
  image: string;
  summary: Record<Locale, string>;
};

export function DocumentLanguageSync({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  return null;
}

export function Reveal({ children, className = "" }: RevealProps) {
  return <div className={["animate-fade-up", className].join(" ")}>{children}</div>;
}

function useSmoothPresence(duration = 240) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  const open = () => {
    setMounted(true);
    window.setTimeout(() => setVisible(true), 10);
  };

  const close = () => {
    setVisible(false);
    window.setTimeout(() => setMounted(false), duration);
  };

  return { mounted, visible, open, close };
}

function useSwipe(options: { onNext: () => void; onPrev: () => void; threshold?: number }) {
  const { onNext, onPrev, threshold = 45 } = options;
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const [pointerStartX, setPointerStartX] = useState<number | null>(null);
  const [pointerEndX, setPointerEndX] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);

  const applySwipe = (startX: number | null, endX: number | null) => {
    if (startX === null || endX === null) return;
    const delta = startX - endX;

    if (delta > threshold) onNext();
    if (delta < -threshold) onPrev();
  };

  const finishSwipe = () => {
    applySwipe(touchStartX, touchEndX);
    setTouchStartX(null);
    setTouchEndX(null);
    setDragOffset(0);
  };

  const finishPointerSwipe = () => {
    applySwipe(pointerStartX, pointerEndX);
    setPointerStartX(null);
    setPointerEndX(null);
    setDragOffset(0);
  };

  return {
    dragOffset,
    onTouchStart: (event: React.TouchEvent<HTMLElement>) => {
      const x = event.changedTouches[0]?.clientX ?? null;
      setTouchStartX(x);
      setTouchEndX(x);
      setDragOffset(0);
    },
    onTouchMove: (event: React.TouchEvent<HTMLElement>) => {
      const x = event.changedTouches[0]?.clientX ?? null;
      setTouchEndX(x);
      if (touchStartX !== null && x !== null) {
        setDragOffset(x - touchStartX);
      }
    },
    onTouchEnd: finishSwipe,
    onPointerDown: (event: React.PointerEvent<HTMLElement>) => {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
      setPointerStartX(event.clientX);
      setPointerEndX(event.clientX);
      setDragOffset(0);
    },
    onPointerMove: (event: React.PointerEvent<HTMLElement>) => {
      if (pointerStartX === null) return;
      setPointerEndX(event.clientX);
      setDragOffset(event.clientX - pointerStartX);
    },
    onPointerUp: (event: React.PointerEvent<HTMLElement>) => {
      try { (event.currentTarget as HTMLElement).releasePointerCapture(event.pointerId); } catch(e) {}
      finishPointerSwipe();
    },
    onPointerCancel: (event: React.PointerEvent<HTMLElement>) => {
      try { (event.currentTarget as HTMLElement).releasePointerCapture(event.pointerId); } catch(e) {}
      setPointerStartX(null);
      setPointerEndX(null);
      setDragOffset(0);
    }
  };
}

export function MobileMenu({
  locale,
  currentPage,
  navItems,
  topLabel
}: {
  locale: Locale;
  currentPage: PageId;
  navItems: NavItem[];
  topLabel: string;
}) {
  const menu = useSmoothPresence(280);

  useEffect(() => {
    document.body.style.overflow = menu.mounted ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu.mounted]);

  const switchHref =
    locale === "en" ? getPath("ar", currentPage) : getPath("en", currentPage);

  return (
    <>
      <button
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-brand hover:text-brand lg:hidden"
        onClick={menu.open}
        type="button"
        aria-label={topLabel}
      >
        <Menu className="h-5 w-5" />
      </button>

      {menu.mounted ? (
        <div
          className={`fixed inset-0 z-[80] flex items-start justify-center _overflow-y-auto px-4 py-4 transition duration-300 lg:hidden ${
            menu.visible ? "bg-ink/80 backdrop-blur-xl" : "bg-ink/0 backdrop-blur-none"
          }`}
          onClick={menu.close}
        >
          <div
            className={`relative w-full max-w-md flex-shrink-0 rounded-[2rem] border border-white/10 bg-[#091320]/95 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.45)] transition duration-300 ${
              menu.visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <Link className="flex items-center" href={getPath(locale, "home")} onClick={menu.close}>
                <Image
                  src="/assets/images/main/logo.png"
                  alt="SamyJoe logo"
                  width={220}
                  height={60}
                  className="h-auto w-[188px]"
                />
              </Link>
              <button
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white"
                onClick={menu.close}
                type="button"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-8 grid gap-3 pb-6">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  className={`rounded-2xl border px-5 py-4 text-lg transition ${
                    currentPage === item.id
                      ? "border-brand bg-brand-gradient text-white"
                      : "border-white/10 bg-white/5 text-white/88 hover:border-brand/50"
                  }`}
                  href={item.href}
                  onClick={menu.close}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="grid gap-3 border-t border-white/10 pt-6">
              <Link className="primary-button justify-center" href={siteConfig.cvPath}>
                CV / Resume
              </Link>
              <Link className="ghost-button justify-center" href={switchHref} onClick={menu.close}>
                {locale === "en" ? "العربية" : "English"}
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export function VideoDialog({
  locale,
  title,
  thumbnail
}: {
  thumbnail: string;
  locale: Locale;
  title: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  void locale;

  return (
    <>
      <button 
        type="button" 
        onClick={() => setIsOpen(true)}
        className="group relative w-full max-w-[600px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-panel shadow-brand transition duration-500 hover:shadow-brand-glow lg:min-w-[480px]"
      >
        <div className="relative w-full" style={{ paddingBottom: "75%" }}>
          <Image src={thumbnail} alt={title} fill className="object-cover transition duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-ink/40 transition duration-500 group-hover:bg-ink/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white shadow-lg transition duration-500 group-hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 ml-1">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </div>
          </div>
        </div>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
          <div className="relative w-full max-w-4xl overflow-hidden rounded-[1.75rem] border border-white/10 bg-panel shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="absolute right-0 top-0 z-10 flex justify-end p-4">
              <button type="button" onClick={() => setIsOpen(false)} className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-brand">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/JYz4Gr_dySQ?si=eiWR_fPnq-HKsdk-&autoplay=1"
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}


export function ProjectGallery({
  locale,
  projects,
  showInlineDetails = false
}: {
  locale: Locale;
  projects: ProjectCard[];
  showInlineDetails?: boolean;
}) {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showMoreDesc, setShowMoreDesc] = useState(false);
  const projectModal = useSmoothPresence(260);

  const activeProject =
    activeProjectIndex === null ? null : projects[activeProjectIndex];

  useEffect(() => {
    document.body.style.overflow = projectModal.mounted ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [projectModal.mounted]);

  const openProject = (index: number) => {
    setActiveProjectIndex(index);
    setActiveImageIndex(0);
    setShowMoreDesc(false);
    projectModal.open();
  };

  const closeProject = () => {
    projectModal.close();
    window.setTimeout(() => {
      setActiveProjectIndex(null);
      setActiveImageIndex(0);
      setShowMoreDesc(false);
    }, 260);
  };

  const goPrevImage = () => {
    if (!activeProject) return;
    setActiveImageIndex((current) =>
      current === 0 ? activeProject.gallery.length - 1 : current - 1
    );
  };

  const goNextImage = () => {
    if (!activeProject) return;
    setActiveImageIndex((current) =>
      current === activeProject.gallery.length - 1 ? 0 : current + 1
    );
  };

  const gallerySwipe = useSwipe({ onNext: goNextImage, onPrev: goPrevImage });

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <button
            key={project.slug}
            type="button"
            onClick={() => openProject(index)}
            className="group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-panel text-start transition duration-500 hover:-translate-y-2 hover:border-brand/45 hover:shadow-brand"
          >
            <div className="relative h-[360px] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-transparent" />
              <div className="absolute inset-0 bg-brand/0 transition duration-500 group-hover:bg-brand/85" />
              <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-brand/85 group-hover:text-white/70">
                  {project.tags.slice(0, 3).join(" / ")}
                </p>
                <h3 className="mt-3 font-display text-3xl uppercase leading-none text-white">
                  {project.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm text-white/78 group-hover:text-white">
                  {project.subtitle[locale]}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white">
                  {locale === "en" ? "View case study" : "عرض تفاصيل المشروع"}
                  <ExternalLink className="h-4 w-4" />
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {showInlineDetails ? (
        <div className="mt-14 grid gap-8">
          {projects.map((project) => (
            <article
              key={`${project.slug}-detail`}
              id={project.slug}
              className="rounded-[2rem] border border-white/10 bg-panel/70 p-7 md:p-10"
            >
              <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-brand/80">
                    {project.tags.join(" / ")}
                  </p>
                  <h3 className="mt-3 font-display text-4xl uppercase leading-none">
                    {project.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-lg text-white/74">
                    {project.subtitle[locale]}
                  </p>
                  <div className="mt-6 grid gap-4 text-base leading-8 text-white/82">
                    {project.description[locale].map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
                <div className="relative min-h-[320px] overflow-hidden rounded-[1.5rem] border border-white/10">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : null}

      {activeProject && projectModal.mounted ? (
        <div
          className={`fixed inset-0 z-[95] px-4 py-6 transition duration-300 ${
            projectModal.visible ? "bg-ink/92 backdrop-blur-xl" : "bg-ink/0 backdrop-blur-0"
          }`}
          onClick={closeProject}
        >
          <div
            className={`mx-auto flex h-full w-full max-w-6xl flex-col rounded-[2rem] border border-white/10 bg-[#08111b] transition duration-300 ${
              projectModal.visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 md:px-7">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-brand/80">
                  {activeProject.tags.slice(0, 3).join(" / ")}
                </p>
                <h3 className="mt-2 font-display text-3xl uppercase">
                  {activeProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={closeProject}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white"
                aria-label="Close project"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="grid flex-1 gap-0 overflow-y-auto lg:grid-cols-[1.15fr_0.85fr] lg:overflow-hidden">
              <div className="flex flex-col border-b border-white/10 p-5 lg:border-b-0 lg:border-r lg:border-white/10 md:p-7 lg:overflow-y-auto custom-scrollbar">
                <div
                  className="relative min-h-[320px] flex-1 overflow-hidden rounded-[1.5rem] border border-white/10 touch-pan-y select-none"
                  {...gallerySwipe}
                >
                  <div
                    className="flex h-full w-full transition-transform duration-500 ease-out"
                    dir="ltr"
                    style={{
                      transform: `translateX(calc(-${activeImageIndex * 100}% + ${gallerySwipe.dragOffset}px))`
                    }}
                  >
                    {activeProject.gallery.map((image, index) => (
                      <div key={image} className="relative h-full min-w-full">
                        <Image
                          src={image}
                          alt={`${activeProject.title} preview ${index + 1}`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 55vw"
                          className="object-cover pointer-events-none"
                          draggable={false}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    {activeProject.gallery.map((image, index) => (
                      <button
                        key={image}
                        type="button"
                        onClick={() => setActiveImageIndex(index)}
                        className={`h-16 w-16 overflow-hidden rounded-2xl border transition ${
                          index === activeImageIndex ? "border-brand" : "border-white/10"
                        }`}
                      >
                        <Image
                          src={image}
                          alt=""
                          width={64}
                          height={64}
                          className="h-full w-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={goPrevImage}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5"
                      aria-label="Previous image"
                    >
                      <ArrowLeft className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={goNextImage}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5"
                      aria-label="Next image"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col p-5 md:p-7 lg:overflow-hidden">
                <p className="text-sm uppercase tracking-[0.24em] text-brand/80 shrink-0">
                  {activeProject.subtitle[locale]}
                </p>
                <div className="mt-6 flex-1 overflow-y-auto pr-2 lg:min-h-0 custom-scrollbar">
                  <div className="grid gap-4 text-base leading-8 text-white/82">
                    {activeProject.description[locale].map((paragraph, idx) => {
                      if (!showMoreDesc && idx > 0) return null;
                      return <p key={paragraph}>{paragraph}</p>;
                    })}
                  </div>
                  {activeProject.description[locale].length > 1 && (
                    <button
                      type="button"
                      onClick={() => setShowMoreDesc(!showMoreDesc)}
                      className="mt-4 text-sm font-medium text-brand hover:text-white transition"
                    >
                      {showMoreDesc 
                        ? (locale === "en" ? "Show less" : "عرض أقل") 
                        : (locale === "en" ? "Show more" : "عرض المزيد")}
                    </button>
                  )}
                </div>
                <div className="mt-8 flex flex-wrap gap-2 shrink-0">
                  {activeProject.tags.map((tag) => (
                    <span key={tag} className="outline-chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export function TestimonialsCarousel({
  locale,
  items
}: {
  locale: Locale;
  items: Testimonial[];
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % items.length);
    }, 4800);

    return () => window.clearInterval(timer);
  }, [items.length]);

  const goPrev = () => {
    setIndex((current) => (current === 0 ? items.length - 1 : current - 1));
  };

  const goNext = () => {
    setIndex((current) => (current + 1) % items.length);
  };

  const testimonialSwipe = useSwipe({ onNext: goNext, onPrev: goPrev });

  return (
    <div
      className="rounded-[2rem] border border-white/10 bg-panel/75 p-7 shadow-brand touch-pan-y select-none md:p-10"
      {...testimonialSwipe}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          dir="ltr"
          style={{
            transform: `translateX(calc(-${index * 100}% + ${testimonialSwipe.dragOffset}px))`
          }}
        >
          {items.map((item) => (
            <div key={item.name.en} className="min-w-full">
              <div
                dir={locale === "ar" ? "rtl" : "ltr"}
                className="grid gap-8 lg:grid-cols-[0.65fr_1fr] lg:items-center"
              >
                <div className="flex items-center gap-5">
                  <div className="relative h-24 w-24 overflow-hidden rounded-full border border-white/10 bg-white">
                    <Image
                      src="/assets/images/reviews/1.jpg"
                      alt={item.name[locale]}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-brand/80">
                      {item.name[locale]}
                    </p>
                    <p className="text-sm uppercase tracking-[0.22em] text-white/55">
                      {locale === "en" ? "Client Feedback" : "رأي العميل"}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-xl font-semibold leading-9 text-white md:text-2xl">
                    {item.quote[locale]}
                  </p>
                  <div className="mt-6 flex items-center justify-between gap-4">
                    <p className="text-sm text-white/55">{item.title[locale]}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-2">
        {items.map((item, itemIndex) => (
          <button
            key={item.name.en}
            type="button"
            onClick={() => setIndex(itemIndex)}
            className={`h-2.5 rounded-full transition ${
              itemIndex === index ? "w-8 bg-brand" : "w-2.5 bg-white/20"
            }`}
            aria-label={`Go to testimonial ${itemIndex + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export function AnimatedMetric({
  value,
  label
}: {
  value: number;
  label: string;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;

    let frame = 0;
    const totalFrames = 48;
    const timer = window.setInterval(() => {
      frame += 1;
      const progress = frame / totalFrames;
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(value * eased));

      if (frame >= totalFrames) {
        setDisplayValue(value);
        window.clearInterval(timer);
      }
    }, 24);

    return () => window.clearInterval(timer);
  }, [started, value]);

  return (
    <div
      className="rounded-[1.8rem] border border-white/10 bg-panel/45 p-6 text-center"
      ref={(node) => {
        if (!node || started) return;

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setStarted(true);
                observer.disconnect();
              }
            });
          },
          { threshold: 0.35 }
        );

        observer.observe(node);
      }}
    >
      <div className="relative mx-auto h-40 w-40">
        <svg viewBox="0 0 160 160" className="h-full w-full -rotate-90">
          <circle cx="80" cy="80" r="64" stroke="rgba(255,255,255,0.1)" strokeWidth="10" fill="none" />
          <circle
            cx="80"
            cy="80"
            r="64"
            stroke="#4389ca"
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={402}
            strokeDashoffset={402 - (402 * displayValue) / 100}
            className="transition-all duration-200"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-3xl font-semibold text-brand">
          {displayValue}%
        </div>
      </div>
      <p className="mt-4 font-medium text-white/88">{label}</p>
    </div>
  );
}

export function ArticleScroller({
  locale,
  items
}: {
  locale: Locale;
  items: Article[];
}) {
  const duplicated = useMemo(() => [...items, ...items], [items]);

  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-panel/55 py-4">
      <div className="animate-marquee-slow flex min-w-max items-center gap-5 px-5">
        {duplicated.map((article, index) => (
          <Link
            key={`${article.slug}-${index}`}
            href={`${getPath(locale, "articles")}#${article.slug}`}
            className="inline-flex items-center gap-3 whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/76 transition hover:border-brand/50 hover:text-white"
          >
            <span className="text-brand">{article.kicker[locale]}</span>
            <span>{article.title[locale]}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function QuickContactForm({ locale }: { locale: Locale }) {
  const [email, setEmail] = useState("");

  const labels = {
    en: {
      placeholder: "Enter your email",
      button: "Start the conversation",
      helper: "This opens your mail client with a prefilled intro."
    },
    ar: {
      placeholder: "اكتب بريدك الإلكتروني",
      button: "ابدأ المحادثة",
      helper: "سيتم فتح البريد مع رسالة جاهزة كبداية."
    }
  }[locale];

  return (
    <form
      className="flex flex-col gap-3 md:flex-row"
      onSubmit={(event) => {
        event.preventDefault();
        const subject = encodeURIComponent(
          locale === "en" ? "Project inquiry from portfolio" : "استفسار مشروع من الموقع"
        );
        const body = encodeURIComponent(
          locale === "en"
            ? `Hi Samy,\n\nI found your portfolio and I would like to talk about a project.\nContact email: ${email || "please reply here"}`
            : `أهلًا سامي،\n\nشفت البورتفوليو وعايز أتكلم بخصوص مشروع.\nالبريد للتواصل: ${email || "الرد على نفس الإيميل"}`
        );

        window.open(
          `mailto:${siteConfig.email}?subject=${subject}&body=${body}`,
          "_blank",
          "noopener,noreferrer"
        );
      }}
    >
      <div className="flex-1">
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder={labels.placeholder}
          className="w-full rounded-full border border-white/10 bg-white/5 px-5 py-3.5 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-brand/55"
        />
        <p className="mt-2 text-xs text-white/45">{labels.helper}</p>
      </div>
      <button type="submit" className="primary-button justify-center">
        <Mail className="h-4 w-4" />
        {labels.button}
      </button>
    </form>
  );
}

export function AnimatedHeroShapes() {
  const [shapes, setShapes] = useState<Array<{ id: number; type: 'circle' | 'square' | 'triangle'; size: number; left: number; top: number; tx: number; ty: number; duration: number; delay: number; opacity: number; rotation: number }>>([]);

  useEffect(() => {
    const types: Array<'circle' | 'square' | 'triangle'> = ['circle', 'square', 'triangle'];
    const count = Math.floor(Math.random() * 12) + 14; // Random count between 14 and 25
    const newShapes = [];

    for (let i = 0; i < count; i++) {
      newShapes.push({
        id: i,
        type: types[Math.floor(Math.random() * types.length)],
        size: Math.floor(Math.random() * 24) + 16, // 16px to 40px
        left: Math.floor(Math.random() * 95), // 0% to 95%
        top: Math.floor(Math.random() * 95), // 0% to 95%
        tx: (Math.random() - 0.5) * 500, // Move around randomly up to 250px each way
        ty: (Math.random() - 0.5) * 500,
        duration: Math.floor(Math.random() * 20) + 20, // 20s to 40s
        delay: Math.random() * -30, // Negative delay so they start immediately at different points
        opacity: (Math.random() * 0.3) + 0.1, // 0.1 to 0.4
        rotation: Math.random() * 360 // Random initial rotation
      });
    }
    setShapes(newShapes);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {shapes.map((shape) => {
        const style = {
          left: `${shape.left}%`,
          top: `${shape.top}%`,
          opacity: shape.opacity,
          width: `${shape.size}px`,
          height: `${shape.size}px`,
          '--tx': `${shape.tx}px`,
          '--ty': `${shape.ty}px`,
          '--rot': `${shape.rotation}deg`,
          animation: `hero-random-move ${shape.duration}s ease-in-out ${shape.delay}s infinite alternate`
        } as React.CSSProperties;

        const svgProps = {
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "1.5",
          className: "w-full h-full text-brand"
        };

        return (
          <div key={shape.id} className="absolute text-brand" style={style}>
            {shape.type === 'circle' && (
              <svg {...svgProps}><circle cx="12" cy="12" r="10" /></svg>
            )}
            {shape.type === 'square' && (
              <svg {...svgProps}><rect x="3" y="3" width="18" height="18" rx="2" /></svg>
            )}
            {shape.type === 'triangle' && (
              <svg {...svgProps}><polygon points="12 3 21 19 3 19" strokeLinejoin="round" /></svg>
            )}
          </div>
        );
      })}
    </div>
  );
}
