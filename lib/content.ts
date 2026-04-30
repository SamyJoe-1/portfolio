export type Locale = "en" | "ar";
export type PageId = "home" | "about" | "projects" | "career" | "articles";

type LocalizedText = Record<Locale, string>;

type PageMeta = {
  title: string;
  description: string;
  keywords: string[];
};

export const siteConfig = {
  name: "SamyJoe",
  siteUrl:
      process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
      "https://samyjoe-1.github.io/portfolio",
  email: "samyjoe01011000@gmail.com",
  phone: "+20 100 741 5843",
  location: "Cairo, Egypt",
  cvPath: "/api/download-cv"
};

export const navPages: Array<{ id: PageId; label: LocalizedText }> = [
  { id: "home", label: { en: "Home", ar: "الرئيسية" } },
  { id: "about", label: { en: "About", ar: "عني" } },
  { id: "projects", label: { en: "Projects", ar: "المشاريع" } },
  { id: "career", label: { en: "Career", ar: "المسيرة" } },
  { id: "articles", label: { en: "Articles", ar: "المحتوى" } }
];

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/samyjoe/"
  },
  {
    label: "GitHub",
    href: "https://github.com/samyjoe-1"
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/201007415843"
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCysKhBz_ADaCNhF282Ii51A"
  }
];

export const pageMetadata: Record<Locale, Record<PageId, PageMeta>> = {
  en: {
    home: {
      title: "SamyJoe | Full-Stack Software Engineer",
      description:
          "Production-grade systems, zero to live deployment. SamyJoe builds Laravel, PHP, React, Tailwind, DevOps, and AI automation products from Cairo for clients worldwide.",
      keywords: [
        "SamyJoe portfolio",
        "Full-Stack Software Engineer",
        "Laravel expert",
        "PHP developer Egypt",
        "React Tailwind portfolio"
      ]
    },
    about: {
      title: "About SamyJoe | Full-Stack Engineer Profile",
      description:
          "Deep profile of SamyJoe, a software engineer, freelancer, instructor, and automation builder focused on shipping high-impact web systems.",
      keywords: [
        "About SamyJoe",
        "SamyJoe profile",
        "software engineer Cairo",
        "freelance full-stack engineer"
      ]
    },
    projects: {
      title: "Projects | SamyJoe Portfolio",
      description:
          "Selected systems built by SamyJoe across dropshipping, recruitment, civic tech, fintech, marketplaces, healthcare, and network management.",
      keywords: [
        "SamyJoe projects",
        "Laravel case studies",
        "software portfolio",
        "AI recruitment platform"
      ]
    },
    career: {
      title: "Career | Experience, Services, and Delivery",
      description:
          "Career timeline, engineering specialties, testimonials, and delivery principles that define how SamyJoe ships production-ready systems.",
      keywords: [
        "SamyJoe career",
        "software engineer experience",
        "technical instructor Egypt",
        "freelancer portfolio"
      ]
    },
    articles: {
      title: "Articles | Engineering Notes and System Breakdowns",
      description:
          "Topic pages from SamyJoe covering full-stack architecture, AI automation, engineering process, and lessons from real product delivery.",
      keywords: [
        "SamyJoe articles",
        "engineering notes",
        "Laravel architecture",
        "AI automation content"
      ]
    }
  },
  ar: {
    home: {
      title: "سامي جو | مهندس برمجيات Full-Stack",
      description:
          "بورتفوليو سامي جو: بناء أنظمة Production-grade من الصفر حتى الإطلاق باستخدام Laravel وPHP وReact وTailwind وDevOps وAI Automation.",
      keywords: [
        "سامي جو",
        "مهندس Full-Stack",
        "Laravel",
        "PHP",
        "React Tailwind"
      ]
    },
    about: {
      title: "عن سامي جو | الملف المهني",
      description:
          "صفحة تعريفية أعمق عن سامي جو كمطور، فريلانسر، مدرب تقني، وباني حلول Automation وAI.",
      keywords: [
        "عن سامي جو",
        "الملف المهني",
        "مهندس برمجيات مصر",
        "فريلانسر Full-Stack"
      ]
    },
    projects: {
      title: "المشاريع | أعمال سامي جو",
      description:
          "استعراض للمشاريع والأنظمة التي بناها سامي جو في التجارة، والتوظيف، والخدمات الحكومية، والصحة، والشبكات، والأسواق الرقمية.",
      keywords: [
        "مشاريع سامي جو",
        "أعمال Laravel",
        "بورتفوليو مطور",
        "منصة توظيف بالذكاء الاصطناعي"
      ]
    },
    career: {
      title: "المسيرة | الخبرة والخدمات",
      description:
          "الخط الزمني للخبرة، والتخصصات الهندسية، وآراء العملاء، وأسلوب التسليم الذي يميز سامي جو.",
      keywords: [
        "خبرة سامي جو",
        "المسيرة المهنية",
        "مدرب تقني",
        "فريلانسر مصر"
      ]
    },
    articles: {
      title: "المحتوى | ملاحظات هندسية وتقسيمات تقنية",
      description:
          "صفحات محتوى تلخص خبرة سامي جو في هندسة الأنظمة وAI Automation وطرق بناء المنتجات بشكل production-ready.",
      keywords: [
        "محتوى سامي جو",
        "مقالات هندسية",
        "Laravel",
        "AI Automation"
      ]
    }
  }
};

export const heroContent = {
  en: {
    eyebrow: "Hi, I'm SamyJoe",
    eyebrowHtml: "Hi, I'm <span class=\"hero-underline\">SamyJoe</span>",
    titleHtml:
        "Code is not a job. <span class=\"inline-accent\">It's a lifestyle.</span>",
    subtitle:
        "Full-Stack Software Engineer based in Cairo, Egypt — specializing in Laravel, PHP Backend Engineering, RESTful API Design & Linux Server Administration",
    primaryCta: "Download CV",
    secondaryCta: "Explore Projects",
    statOne: "4+ years building real products",
    statTwo: "20-50 shipped freelance systems"
  },
  ar: {
    eyebrow: "أهلًا، أنا SamyJoe",
    eyebrowHtml: "أهلًا، أنا <span class=\"hero-underline\">SamyJoe</span>",
    titleHtml:
        "الكود ليس مجرد وظيفة. <span class=\"inline-accent\">إنه أسلوب حياة.</span>",
    subtitle:
        "مهندس برمجيات Full-Stack من القاهرة، مصر — متخصص في Laravel وPHP Backend Engineering وRESTful API Design وLinux Server Administration",
    primaryCta: "تحميل الـ CV",
    secondaryCta: "استعراض المشاريع",
    statOne: "4+ سنوات في بناء منتجات حقيقية",
    statTwo: "20-50 نظام Freelance تم تسليمه"
  }
};

export const aboutHighlights = {
  en: {
    eyebrow: "About Me",
    titleHtml: "I'm a <span class=\"inline-accent\">Full-Stack</span> Engineer",
    body:
        "Proactive and solution-oriented Full-Stack Software Engineer with 4+ years of experience building production-grade web applications from zero to live deployment. Specialties include end-to-end system architecture, Laravel/PHP backend engineering, RESTful API design, Linux server administration, and real-time data dashboards.",
    extended:
        "My edge is not just writing code. It is understanding the full business flow, cutting operational friction, and building systems that teams can actually run and scale."
  },
  ar: {
    eyebrow: "عني",
    titleHtml: "أنا مهندس <span class=\"inline-accent\">Full-Stack</span>",
    body:
        "مهندس برمجيات Full-Stack استباقي وعملي، أمتلك خبرة تتجاوز 4 سنوات في بناء Web Applications بمستوى Production-grade من الصفر حتى الإطلاق الفعلي. أركز على End-to-end system architecture وLaravel/PHP backend engineering وRESTful API design وLinux server administration ولوحات البيانات اللحظية.",
    extended:
        "القيمة التي أقدمها لا تقتصر على كتابة الكود، بل تمتد إلى فهم الـ business flow بالكامل، وتقليل الاحتكاك داخل العمليات، وبناء أنظمة يمكن للفرق تشغيلها وتوسيعها بثقة."
  }
};

export const profileFacts = [
  {
    label: { en: "Base", ar: "الموقع" },
    value: { en: "Cairo, Egypt", ar: "القاهرة، مصر" }
  },
  {
    label: { en: "Core Stack", ar: "التقنيات الأساسية" },
    value: {
      en: "Laravel, PHP, React, Tailwind, MySQL, Linux",
      ar: "Laravel, PHP, React, Tailwind, MySQL, Linux"
    }
  },
  {
    label: { en: "Special Focus", ar: "مجال التركيز" },
    value: {
      en: "APIs, dashboards, automation, real-time systems",
      ar: "APIs, dashboards, automation, real-time systems"
    }
  },
  {
    label: { en: "Work Modes", ar: "أسلوب العمل" },
    value: {
      en: "Freelance, remote, hybrid, product ownership",
      ar: "Freelance, remote, hybrid, product ownership"
    }
  }
];

export const strengthBlocks = [
  {
    title: { en: "Business-aware engineering", ar: "هندسة تفهم البزنس" },
    body: {
      en: "I translate messy operational needs into clean system boundaries, flows, and interfaces that teams can use confidently.",
      ar: "أحوّل الاحتياجات التشغيلية المعقدة إلى system boundaries وflows وواجهات واضحة يمكن للفرق استخدامها بثقة."
    }
  },
  {
    title: { en: "Solo ownership", ar: "تملك كامل للمشروع" },
    body: {
      en: "From scoping and architecture to deployment and support, I am comfortable owning the full delivery cycle without handoff gaps.",
      ar: "من الـ scoping والمعمارية حتى الـ deployment والدعم، أستطيع تملك دورة التسليم كاملة بدون handoff gaps."
    }
  },
  {
    title: { en: "Automation obsession", ar: "شغف بالأتمتة" },
    body: {
      en: "I actively look for repeatable pain points and replace them with automations, AI-assisted flows, and operational shortcuts.",
      ar: "أبحث دائمًا عن نقاط الألم المتكررة وأحوّلها إلى automations وAI-assisted flows وshortcuts تجعل الشغل أسرع وأكثر كفاءة."
    }
  }
];

export const experienceItems = [
  {
    period: "Dec 2024 - Present",
    role: "Software Engineer - Full-Stack",
    company: "Clickshare",
    mode: "Hybrid",
    summary: {
      en: "Sole engineer owning a full multi-role dropshipping & logistics platform — traders, marketers, agents, warehouse, call center modules. Engineered real-time analytics, wallet management, role-based access control, and Pusher event system.",
      ar: "المهندس الوحيد خلف منصة dropshipping ولوجستيات متعددة الأدوار، تشمل warehouse وmarketers وagents وcall center وwallet وanalytics."
    }
  },
  {
    period: "Sep 2025 - Feb 2026",
    role: "Full-Stack Engineer & DevOps",
    company: "Massar",
    mode: "Remote",
    summary: {
      en: "Delivered AI-driven recruitment automation covering CV parsing, job matching, scoring, filtering, and interview scheduling.",
      ar: "قدمت نظام توظيف مدعومًا بالذكاء الاصطناعي يشمل CV parsing وjob matching وscoring وfiltering وinterview scheduling."
    }
  },
  {
    period: "Nov 2023 - Dec 2024",
    role: "Technical Instructor",
    company: "BlackHorse",
    mode: "Cairo",
    summary: {
      en: "Designed and delivered a full-stack engineering curriculum from scratch — PHP, Laravel, DB design, Blade, Bootstrap, Tailwind, JS. Mentored 50–100 developers. Awarded Best Instructor.",
      ar: "صممت ودرّست منهج Full-Stack كامل من الصفر، مع إرشاد 50 إلى 100 مطور، والحصول على لقب Best Instructor."
    }
  },
  {
    period: "Oct 2021 - Present",
    role: "Freelance Full-Stack Developer",
    company: "Khamsat, Mostaql, Nafezly, Upwork",
    mode: "Remote",
    summary: {
      en: "Delivered 20–50 production-grade projects — e-commerce stores, CRMs, booking platforms, dashboards, and API integrations. Consistent 5-star rating across the Arab region.",
      ar: "سلّمت من 20 إلى 50 نظام Production في مجالات e-commerce وCRMs وbooking وdashboards وautomation workflows وintegrations."
    }
  }
];

export const skillMeters = [
  { label: "Laravel / PHP", value: 90 },
  { label: "Vue.js / React.js", value: 80 },
  { label: "MySQL / DB Design", value: 85 },
  { label: "DevOps / Linux", value: 80 }
];

export const services = [
  {
    title: {
      en: "Backend Engineering",
      ar: "Backend Engineering"
    },
    summary: {
      en: "Laravel, PHP, Livewire, RESTful API design, Eloquent ORM, authentication & authorization, cron jobs, Pusher real-time events, WhatsApp & SMTP notifications, and third-party API integrations.",
      ar: "بناء Backend قوي باستخدام Laravel وPHP وLivewire، مع RESTful API Design وEloquent ORM وauthentication & authorization وcron jobs وPusher real-time events وإشعارات WhatsApp وSMTP وربط Third-party APIs."
    }
  },
  {
    title: {
      en: "Frontend Development",
      ar: "Frontend Development"
    },
    summary: {
      en: "Vue.js, React.js, Bootstrap, Tailwind CSS, jQuery, Blade Templates, Vite — responsive, performant, production-ready interfaces with SweetAlert2, Select2, DataTables, and SwiperJS.",
      ar: "تطوير Frontend باعتماد Vue.js وReact.js وBootstrap وTailwind CSS وjQuery وBlade Templates وVite لبناء واجهات Responsive وسريعة وجاهزة للProduction، مع SweetAlert2 وSelect2 وDataTables وSwiperJS."
    }
  },
  {
    title: {
      en: "DevOps & Infrastructure",
      ar: "DevOps & Infrastructure"
    },
    summary: {
      en: "Linux/VPS administration, Nginx, Docker, CI/CD pipelines, Cloudflare, SSL, Git/GitHub — full server setup, configuration, and deployment from scratch to live production.",
      ar: "إدارة Linux/VPS وNginx وDocker وCI/CD pipelines وCloudflare وSSL وGit/GitHub، مع إعداد كامل للسيرفرات والنشر من الصفر حتى بيئة Production."
    }
  },
  {
    title: {
      en: "Technical Training & Mentorship",
      ar: "Technical Training & Mentorship"
    },
    summary: {
      en: "Curriculum design and live instruction for full-stack engineering — PHP, Laravel, database design, JavaScript, and modern frontend stacks. Mentored 50–100 developers through production-grade projects within intensive programs. Awarded Best Instructor at BlackHorse.",
      ar: "تصميم مناهج وتدريب مباشر في Full-Stack Engineering يغطي PHP وLaravel وDatabase Design وJavaScript وModern Frontend Stacks. قمت بإرشاد 50 إلى 100 مطور عبر مشاريع Production-grade داخل برامج مكثفة، وحصلت على لقب Best Instructor في BlackHorse."
    }
  },
  {
    title: {
      en: "Workflow Automation & AI Integration",
      ar: "Workflow Automation & AI"
    },
    summary: {
      en: "End-to-end automation pipelines using N8N, OpenAI API, and custom agent scripting — covering CV parsing, job matching, candidate scoring, and smart task routing. Eliminates manual bottlenecks and scales operations without adding headcount.",
      ar: "بناء Automation pipelines متكاملة باستخدام N8N وOpenAI API وcustom agent scripting، تشمل CV Parsing وJob Matching وCandidate Scoring وSmart Task Routing. النتيجة هي تقليل الاختناقات اليدوية وتوسيع التشغيل بدون الحاجة إلى زيادة Headcount."
    }
  },
  {
    title: {
      en: "Database Architecture & Data Modeling",
      ar: "Database Architecture"
    },
    summary: {
      en: "Relational database design across MySQL, MariaDB, and PostgreSQL — schema design, data integrity constraints, migration versioning, query optimization, and backup & recovery strategies built for production-grade systems.",
      ar: "تصميم Relational Databases على MySQL وMariaDB وPostgreSQL، بداية من Schema Design وData Integrity Constraints ووصولًا إلى Migration Versioning وQuery Optimization وخطط Backup & Recovery المناسبة لأنظمة Production-grade."
    }
  }
];


export const projects = [
  {
    slug: "clickshare",
    title: "Clickshare",
    image: "/assets/images/projects/1.png",
    gallery: [
      "/assets/images/projects/clickshare/1.png",
      "/assets/images/projects/clickshare/2.png",
      "/assets/images/projects/clickshare/3.png",
      "/assets/images/projects/clickshare/4.png",
      "/assets/images/projects/clickshare/5.png"
    ],
    subtitle: {
      en: "End-to-End Dropshipping & Logistics Platform",
      ar: "منصة dropshipping ولوجستيات متكاملة"
    },
    description: {
      en: [
        "Clickshare is a full-cycle dropshipping and logistics platform that owns the entire pipeline — from sourcing and stocking products all the way to order fulfillment, shipping, and exporting profit reports.",
        "The system is built around multi-role architecture: marketers focus solely on generating leads while the platform handles everything else — warehouse operations, agent workflows, call center management, logistics coordination, and financial tracking via an integrated wallet system.",
        "Key highlights include real-time analytics dashboards giving traders and marketers full visibility into sales performance, stock levels, and fulfillment status — plus a competitive reports engine that directly drives sharper business decisions and measurable revenue growth across active merchants.",
        "Built and owned solo as the sole engineer — from architecture through production."
      ],
      ar: [
        "تدير Clickshare الدورة الكاملة من sourcing وإدارة المخزون حتى fulfillment والشحن والتقارير وربحية التشغيل.",
        "المنصة تدعم أدوارًا متعددة للتجار والمسوقين والـ warehouse والـ call center والإدارة، مع real-time analytics وwallet management.",
        "تم بناؤها وتملكها بالكامل بشكل فردي، من المعمارية حتى الإطلاق الفعلي."
      ]
    },
    tags: ['PHP', 'Laravel', 'Livewire', 'MySQL', 'Pusher', 'Tailwind CSS', 'Bootstrap', 'Vite', 'RESTful API', 'Cron Jobs', 'WhatsApp Notifications', 'Role-Based Access Control']
  },
  {
    slug: "crm",
    title: "CRM Tasks",
    image: "/assets/images/projects/2.png",
    gallery: [
      "/assets/images/projects/crm/1.png",
      "/assets/images/projects/crm/2.png",
      "/assets/images/projects/crm/3.png",
      "/assets/images/projects/crm/4.png",
      "/assets/images/projects/crm/5.png"
    ],
    subtitle: {
      en: "All-in-One Task Management, Chat & Knowledge Hub",
      ar: "نظام مهام ودردشة ومعرفة داخلية"
    },
    description: {
      en: [
        "CRM Tasks is an all-in-one productivity platform built to evolve into a full social media and AI agent management tool — currently delivering a production-grade task and knowledge management system.",
        "At its core it's a Trello-style board system with role-based workflow management, letting teams create, assign, and track tasks across boards with full pipeline visibility. It also includes a documents and secret vault section where teams can store internal docs, credentials, and sensitive information securely.",
        "The platform features real-time chat powered by Pusher for instant team communication, and a reports module that surfaces performance insights across tasks and team activity.",
        "Built solo from zero — designed with scalability in mind to support AI agent integrations and social media management as next phases."
      ],
      ar: [
        "منتج workflow شبيه بـ Trello مع role-based task management ودردشة لحظية وتوثيق داخلي آمن.",
        "تم تصميمه ليتوسع لاحقًا باتجاه AI agent workflows وإدارة عمليات أوسع."
      ]
    },
    tags: ['PHP', 'Laravel', 'Pusher', 'MySQL', 'Bootstrap', 'JavaScript', 'jQuery', 'Real-Time Events', 'Role-Based Access', 'Reporting']
  },
  {
    slug: "bridge",
    title: "Bridge",
    image: "/assets/images/projects/3.png",
    gallery: [
      "/assets/images/projects/bridge/1.png",
      "/assets/images/projects/bridge/2.png",
      "/assets/images/projects/bridge/3.png",
      "/assets/images/projects/bridge/4.png",
      "/assets/images/projects/bridge/5.png"
    ],
    subtitle: {
      en: "MikroTik & Internet Network Management Platform",
      ar: "منصة لإدارة MikroTik وشبكات الإنترنت"
    },
    description: {
      en: [
        "Bridge is a mission-critical network management platform designed for ISPs, cafés, and large venues that run MikroTik-based internet infrastructure.",
        "Clients connect their MikroTik device to the platform and instantly hand over full remote control — Bridge takes it from there. The system generates internet voucher cards with custom configurations, bandwidth limits, and expiry settings, which the venue owner can sell directly to end users.",
        "The platform handles the full subscription lifecycle of connected devices — installation management, renewal tracking, expiry alerts, and multi-device coordination across large deployments handling 200–500 active client devices.",
        "Operators get access to deep reporting dashboards covering device performance, revenue per node, active sessions, and fulfillment history — giving full operational visibility at scale."
      ],
      ar: [
        "تمنح Bridge المشغلين تحكمًا عن بُعد في بنية الإنترنت المبنية على MikroTik، مع voucher generation وbilling flow وdevice subscriptions.",
        "كما توفر dashboards للتقارير حول الجلسات وأداء العقد وعمليات التجديد."
      ]
    },
    tags: ['Laravel', 'MySQL', 'Bootstrap', 'jQuery', 'FreeRadius', 'SSH/CLI', 'MikroTik API', 'Cron Jobs', 'Network Management', 'Reporting']
  },
  {
    slug: "ashrat",
    title: "Ashrat",
    image: "/assets/images/projects/4.png",
    gallery: [
      "/assets/images/projects/ashrat/1.png",
      "/assets/images/projects/ashrat/2.png",
      "/assets/images/projects/ashrat/3.png"
    ],
    subtitle: {
      en: "Freelance Services Marketplace",
      ar: "منصة marketplace للخدمات الحرة"
    },
    description: {
      en: [
        "Ashrat is a full freelance services marketplace — a branded platform in the vein of Khamsat, Mostaql, and Upwork — connecting project owners with skilled freelancers across service categories.",
        "The platform supports the full application and hiring workflow: freelancers list their services, project owners post requirements, and the system manages proposals, negotiations, and project assignment end-to-end.",
        "Both sides get dedicated dashboards — freelancers track their active gigs, earnings, and reviews while clients manage posted projects, incoming proposals, and hiring decisions. An analytics layer surfaces platform-wide activity and performance metrics for admins.",
        "Built solo from zero under a new brand identity — architected to scale as an independent marketplace with its own user base."
      ],
      ar: [
        "منتج marketplace في نفس مساحة Khamsat وUpwork لربط مقدمي الخدمات بأصحاب المشاريع.",
        "يشمل proposal flow وdashboards وadmin analytics ودعم دورة التوظيف كاملة."
      ]
    },
    tags: ['Laravel', 'MySQL', 'Bootstrap', 'JavaScript', 'Role-Based Dashboards', 'Workflow Management', 'Analytics', 'Freelance Marketplace']
  },
  {
    slug: "masar",
    title: "Masar Connect",
    image: "/assets/images/projects/6.png",
    gallery: [
      "/assets/images/projects/masar/1.png",
      "/assets/images/projects/masar/2.png",
      "/assets/images/projects/masar/3.png",
      "/assets/images/projects/masar/4.png",
      "/assets/images/projects/masar/5.png",
      "/assets/images/projects/masar/6.png"
    ],
    subtitle: {
      en: "AI-Powered Recruitment & Career Management Platform",
      ar: "منصة توظيف وإدارة مسار مهني مدعومة بالذكاء الاصطناعي"
    },
    description: {
      en: [
        "Masar Connect is an end-to-end AI-driven recruitment platform that eliminates human bottlenecks from both sides of the hiring process — candidates and HR teams operate in fully automated workflows.",
        "On the candidate side: users build and improve their CVs directly in the platform, run ATS compatibility checks to score their CV against real job requirements, and let the AI match them to relevant job listings automatically — no manual searching required.",
        "On the HR side: recruiters get a dashboard that processes dozens of CVs in one shot — AI parses, scores, and ranks applicants against the job criteria, then conducts automated interviews with shortlisted candidates. Zero human hand in the screening pipeline.",
        "The result is a system where candidate processing capacity scales without adding headcount — the entire pipeline from application to interview runs on AI automation end-to-end."
      ],
      ar: [
        "تؤتمت Masar جانبي التوظيف: المرشح يحسن الـ CV ويحصل على AI job matching، وفرق HR تحصل على scoring وranking وinterview automation.",
        "النتيجة هي recruitment pipeline يمكنها التوسع بدون زيادة headcount."
      ]
    },
    tags: ['Laravel', 'MySQL', 'N8N', 'OpenAI API', 'Bootstrap', 'JavaScript', 'AI Automation', 'CV Parsing', 'ATS Scoring', 'Job Matching', 'Automated Interviews']
  },
  {
    slug: "ffa",
    title: "FFA Global",
    image: "/assets/images/projects/5.png",
    gallery: [
      "/assets/images/projects/ffa/1.png",
      "/assets/images/projects/ffa/2.png",
      "/assets/images/projects/ffa/3.png"
    ],
    subtitle: {
      en: "Crypto & Forex Live Market Intelligence Platform",
      ar: "منصة معلومات وتعلم للأسواق المالية"
    },
    description: {
      en: [
        "FFA Global is a financial market intelligence platform targeting crypto traders and forex investors who need live data and structured education in one place.",
        "The platform delivers real-time market prices across crypto and forex pairs with live chart feeds, giving traders up-to-the-second visibility on the markets they're tracking.",
        "Beyond live data, it features a premium courses section — locked behind a subscription — covering trading strategies, technical analysis, and forex fundamentals. Access is tiered so free users get market data while premium members unlock the full educational content library.",
        "Built to serve an audience that wants both market monitoring and skill-building under one roof, without jumping between platforms."
      ],
      ar: [
        "منصة live market تجمع بيانات crypto وforex مع محتوى تعليمي مدفوع وsubscription access.",
        "تم بناؤها للمستخدمين الذين يريدون market visibility وتعلمًا منظمًا داخل منتج واحد."
      ]
    },
    tags: ['Laravel', 'MySQL', 'Bootstrap', 'JavaScript', 'Live Market API', 'Subscription System', 'Premium Access Control', 'Crypto', 'Forex']
  },
  {
    slug: "mzglol",
    title: "Mzglol",
    image: "/assets/images/projects/7.png",
    gallery: [
      "/assets/images/projects/mzglol/1.png",
      "/assets/images/projects/mzglol/2.png",
      "/assets/images/projects/mzglol/3.png"
    ],
    subtitle: {
      en: "Citizens Disputes & Government Redirecting Platform",
      ar: "منصة شكاوى مواطنين وتوجيه للوزارات"
    },
    description: {
      en: [
        "Mzglol is an official civic platform built for MP Mohamed Fouad Zaghloul — giving citizens a direct digital channel to submit their disputes, concerns, and requests to their representative.",
        "Submissions don't just pile up — the platform automatically routes each case to the correct ministry responsible for handling it, ensuring nothing gets lost in bureaucratic dead ends and every complaint lands in the right hands.",
        "Ministries operate under role-based access control — each ministry sees and manages only the cases assigned to their jurisdiction, keeping operations clean and accountable across departments.",
        "A full reporting layer gives the MP and admins complete visibility into submission volumes, case statuses, ministry response rates, and resolution tracking — turning citizen engagement into measurable governance data."
      ],
      ar: [
        "منتج civic للنائب محمد فؤاد زغلول يوجه شكاوى المواطنين إلى الوزارة المناسبة مع role-based access وتقارير تشغيلية.",
        "المنصة تحول الشكاوى العامة إلى workflow قابل للمتابعة والقياس."
      ]
    },
    tags: ['Laravel', 'MySQL', 'Bootstrap', 'JavaScript', 'Role-Based Access', 'Government Platform', 'Case Routing', 'Reporting', 'Civic Tech']
  },
  {
    slug: "boost",
    title: "Boost",
    image: "/assets/images/projects/8.png",
    gallery: [
      "/assets/images/projects/boost/1.png",
      "/assets/images/projects/boost/2.png",
      "/assets/images/projects/boost/3.png"
    ],
    subtitle: {
      en: "Gaming Marketplace — Discounted Games, Coins & In-Game Currency",
      ar: "Marketplace للألعاب والعملات الرقمية داخل الألعاب"
    },
    description: {
      en: [
        "Boost is a gaming marketplace platform operating in the same space as G2A — connecting buyers looking for discounted game keys, coins, V-Bucks, and in-game currency with sellers offering them at competitive prices.",
        "The platform acts as a trusted middleman — guaranteeing the transaction on both ends. Sellers list their inventory, buyers place orders, and Boost ensures the delivery is verified before funds are released, protecting both parties throughout the process.",
        "The system handles payment processing, order management, and conversion guarantees — giving buyers confidence they'll receive what they paid for and giving sellers a reliable channel to move their inventory at scale.",
        "Built to support multiple game titles and currency types under one unified storefront with a clean buyer and seller experience."
      ],
      ar: [
        "Marketplace للمشترين والبائعين لبيع game keys وcoins وdigital inventory بآليات trusted middleman.",
        "النظام يدعم payment processing وorder management والتحقق من التسليم."
      ]
    },
    tags: ['Laravel', 'MySQL', 'Bootstrap', 'JavaScript', 'Payment Integration', 'Marketplace', 'Escrow System', 'Order Management', 'Gaming']
  },
  {
    slug: "hader",
    title: "Hader Clinics",
    image: "/assets/images/projects/9.png",
    gallery: ["/assets/images/projects/hader/1.png"],
    subtitle: {
      en: "Doctor Discovery & Appointment Booking Platform",
      ar: "منصة لاكتشاف الأطباء وحجز المواعيد"
    },
    description: {
      en: [
        "Hader Clinics is a doctor discovery and booking platform — operating in the same space as Vezeeta — connecting patients with the right doctor without the phone calls and guesswork.",
        "Each doctor has a dedicated profile showcasing their specialty, experience, clinic location, available slots, and patient reviews — giving users everything they need to make an informed decision before booking.",
        "Patients use smart filters to narrow down by specialty, location, availability, and rating — finding their most suitable doctor quickly and scheduling an appointment directly through the platform.",
        "The system manages the full appointment lifecycle — booking, confirmation, reminders, and scheduling management on the doctor's side — keeping both patients and clinics organized with zero friction."
      ],
      ar: [
        "منتج healthcare booking يربط المرضى بالأطباء عبر profiles وsmart filters ومواعيد متاحة وتذكيرات.",
        "يدير دورة الحجز بشكل منظم لكل من المرضى وفرق العيادات."
      ]
    },
    tags: ['Laravel', 'MySQL', 'Bootstrap', 'JavaScript', 'Appointment Booking', 'Doctor Profiles', 'Smart Filters', 'Scheduling System', 'Healthcare']
  }
];

export const testimonials = [
  {
    name: { en: "Ahmed R.", ar: "أحمد ر." },
    title: { en: "Cairo, Egypt — Freelance Client", ar: "القاهرة، مصر — عميل فريلانس" },
    quote: {
      en: "Samy delivered the full system solo — clean architecture, zero bugs on delivery, handled every edge case we threw at him. Exactly what we needed.",
      ar: "سامي سلّم النظام كاملاً بمفرده — معمارية نظيفة، صفر أخطاء عند التسليم، وتعامل مع كل حالة طرحناها عليه. بالضبط ما كنا نحتاجه."
    }
  },
  {
    name: { en: "Mohammed K.", ar: "محمد ك." },
    title: { en: "Saudi Arabia — Mostaql Client", ar: "السعودية — عميل على مستقل" },
    quote: {
      en: "Fast, professional, communicates clearly throughout. The Laravel system he built handles our full operations — highly recommended.",
      ar: "سريع، محترف، تواصله واضح طوال المشروع. نظام Laravel الذي بناه يدير عملياتنا بالكامل — أنصح به بشدة."
    }
  },
  {
    name: { en: "Khaled T.", ar: "خالد ت." },
    title: { en: "Egypt — Repeat Client via Khamsat", ar: "مصر — عميل متكرر عبر خمسات" },
    quote: {
      en: "He doesn't just write code — he understands the business logic and builds accordingly. Came back 3 times already. Won't go anywhere else.",
      ar: "لا يكتفي بكتابة الكود — يفهم منطق العمل ويبني بناءً على ذلك. عدت إليه 3 مرات بالفعل، ولن أذهب لأي مكان آخر."
    }
  }
];

export const offerCards = [
  {
    title: { en: "Clean Architecture", ar: "معمارية نظيفة" },
    body: {
      en: "Structured, documented, Git-versioned code — production-ready from day one, no technical debt handed over.",
      ar: "كود منظم وموثق ومربوط بـ Git، وجاهز للProduction من أول يوم، بدون ديون تقنية يتم ترحيلها لاحقًا."
    }
  },
  {
    title: { en: "Full Ownership", ar: "تملك كامل" },
    body: {
      en: "I scope it, build it, and deploy it solo — no handoffs, no gaps, no babysitting required.",
      ar: "أتولى الـ Scope والBuild والDeploy بشكل كامل، بدون Hand-offs، وبدون فجوات، وبدون حاجة لمتابعة مرهقة."
    }
  },
  {
    title: { en: "Deadline Driven", ar: "ملتزم بالمواعيد" },
    body: {
      en: "Milestone tracking, direct communication, 25min avg response — ships on time, every time.",
      ar: "متابعة واضحة للـ Milestones، وتواصل مباشر، ومتوسط استجابة سريع؛ والنتيجة أن الشغل يخرج في موعده."
    }
  }
];


export const articles = [
  {
    slug: "dropshipping-platform",
    title: {
      en: "I built a full dropshipping platform. Here is what mattered.",
      ar: "بنيت منصة dropshipping متكاملة. وهذه أهم النقاط التي صنعت الفرق."
    },
    kicker: { en: "System Delivery", ar: "System Delivery" },
    image: "/assets/images/blogs/1.png",
    summary: {
      en: "What it takes to build a multi-role operation with stock, logistics, reports, wallet logic, and fulfillment workflows under one roof.",
      ar: "ما الذي يتطلبه بناء عملية متعددة الأدوار تضم المخزون واللوجستيات والتقارير ومنطق الـ wallet وعمليات fulfillment داخل نظام واحد."
    }
  },
  {
    slug: "ai-recruitment-pipeline",
    title: {
      en: "I automated a recruitment pipeline with AI end-to-end.",
      ar: "قمت بأتمتة Recruitment Pipeline كاملة باستخدام AI من البداية إلى النهاية."
    },
    kicker: { en: "Automation", ar: "Automation" },
    image: "/assets/images/blogs/2.png",
    summary: {
      en: "A breakdown of matching, scoring, CV parsing, automated interviews, and where human involvement can be removed safely.",
      ar: "تفكيك لعمليات matching وscoring وCV parsing وautomated interviews، وأين يمكن تقليل التدخل البشري بشكل آمن."
    }
  },
  {
    slug: "teaching-made-me-better",
    title: {
      en: "Teaching 100 developers made me a sharper engineer.",
      ar: "تدريب 100 مطور جعلني مهندسًا أكثر دقة ونضجًا."
    },
    kicker: { en: "Mentorship", ar: "Mentorship" },
    image: "/assets/images/blogs/3.png",
    summary: {
      en: "Why teaching architecture, debugging, and product thinking fed back into stronger implementation decisions.",
      ar: "كيف انعكس تدريس المعمارية وdebugging وproduct thinking على قرارات تنفيذ أقوى وأكثر وضوحًا."
    }
  }
];

export const faqItems = {
  en: [
    {
      question: "Who is SamyJoe?",
      answer:
          "SamyJoe is a full-stack software engineer from Cairo who works as a freelancer, technical instructor, and builder of production-grade systems across Laravel, PHP, React, Tailwind, DevOps, and AI automation."
    },
    {
      question: "What kind of work does SamyJoe deliver?",
      answer:
          "He builds business systems end to end: APIs, dashboards, marketplaces, logistics platforms, automation pipelines, and multi-role internal tools designed for real operations."
    },
    {
      question: "Why is this portfolio AI-agent friendly?",
      answer:
          "Because it includes static profile pages, structured metadata, FAQ content, sitemap support, and an llms.txt endpoint that helps AI systems understand the profile, services, and key projects quickly."
    }
  ],
  ar: [
    {
      question: "من هو SamyJoe؟",
      answer:
          "SamyJoe هو مهندس برمجيات Full-Stack من القاهرة، يعمل كفريلانسر ومدرب تقني، ويركز على بناء أنظمة Production-grade باستخدام Laravel وPHP وReact وTailwind وDevOps وAI Automation."
    },
    {
      question: "ما نوع الأعمال التي يقدمها SamyJoe؟",
      answer:
          "يبني أنظمة أعمال متكاملة من البداية إلى النهاية: APIs وdashboards وmarketplaces ومنصات لوجستية وautomation pipelines وأدوات داخلية متعددة الأدوار تخدم التشغيل الحقيقي."
    },
    {
      question: "لماذا هذا البورتفوليو مناسب لـ AI agents؟",
      answer:
          "لأنه يتضمن صفحات تعريفية ثابتة وstructured metadata وFAQ وsitemap وendpoint باسم llms.txt يساعد أنظمة الذكاء الاصطناعي على فهم الملف الشخصي والخدمات وأهم المشاريع بسرعة."
    }
  ]
};


export function buildAbsoluteUrl(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.siteUrl}${normalized === "/" ? "" : normalized}`;
}

export function getPath(locale: Locale, page: PageId) {
  if (locale === "en") {
    return page === "home" ? "/" : `/${page}`;
  }

  return page === "home" ? "/ar" : `/ar/${page}`;
}

export function getPageMetadata(locale: Locale, page: PageId) {
  return pageMetadata[locale][page];
}

export function resolveRoute(slug?: string[]) {
  const parts = slug ?? [];
  const pages = new Set<PageId>(["home", "about", "projects", "career", "articles"]);

  if (parts.length === 0) {
    return {
      locale: "en" as Locale,
      page: "home" as PageId,
      path: "/"
    };
  }

  if (parts[0] === "ar") {
    if (parts.length === 1) {
      return {
        locale: "ar" as Locale,
        page: "home" as PageId,
        path: "/ar"
      };
    }

    const page = parts[1] as PageId;
    if (!pages.has(page) || parts.length > 2) {
      return null;
    }

    return {
      locale: "ar" as Locale,
      page,
      path: `/ar/${page}`
    };
  }

  const page = parts[0] as PageId;
  if (!pages.has(page) || parts.length > 1) {
    return null;
  }

  return {
    locale: "en" as Locale,
    page,
    path: `/${page}`
  };
}

export const sitemapRoutes: Array<{ locale: Locale; page: PageId; path: string }> = [
  { locale: "en", page: "home", path: "/" },
  { locale: "en", page: "about", path: "/about" },
  { locale: "en", page: "projects", path: "/projects" },
  { locale: "en", page: "career", path: "/career" },
  { locale: "en", page: "articles", path: "/articles" },
  { locale: "ar", page: "home", path: "/ar" },
  { locale: "ar", page: "about", path: "/ar/about" },
  { locale: "ar", page: "projects", path: "/ar/projects" },
  { locale: "ar", page: "career", path: "/ar/career" },
  { locale: "ar", page: "articles", path: "/ar/articles" }
];

export const staticRouteParams: Array<{ slug?: string[] }> = [
  {},
  { slug: ["about"] },
  { slug: ["projects"] },
  { slug: ["career"] },
  { slug: ["articles"] },
  { slug: ["ar"] },
  { slug: ["ar", "about"] },
  { slug: ["ar", "projects"] },
  { slug: ["ar", "career"] },
  { slug: ["ar", "articles"] }
];