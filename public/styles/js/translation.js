const translations = {
    en: {
        // Navbar
        'live-chat': 'Live Chat',
        'home': 'Home',
        'about': 'About',
        'services': 'Services',
        'portfolio': 'Portfolio',
        'blog': 'Blog',

        // Hero
        'hero-name': 'Hi, I\'m <span class="hero-underline">SamyJoe</span>',
        'hero-title': 'Code is not a job. <span style="color: var(--primary-color);">It\'s a lifestyle.</span>',
        'hero-subtitle': 'Full-Stack Software Engineer based in Cairo, Egypt — specializing in Laravel, PHP Backend Engineering, RESTful API Design & Linux Server Administration',
        'get-started': 'Download CV',

        // About
        'about-subtitle': 'ABOUT ME',
        'about-title': 'I\'m a <span style="color: var(--primary-color);">Full-Stack</span> Engineer',
        'about-text': 'Proactive and solution-oriented Full-Stack Software Engineer with 4+ years of experience building production-grade web applications from zero to live deployment. Specialties include end-to-end system architecture, Laravel/PHP backend engineering, RESTful API design, Linux server administration, and real-time data dashboards.',
        'download-cv': 'Download CV',

        // Experience
        'experience-subtitle': 'MY EXPERIENCE',
        'experience-title': 'My <span style="color: var(--primary-color);">Journey</span>',
        'experience-text': '4+ years building production-grade systems — from dropshipping platforms and CRMs to network management tools and AI-driven recruitment pipelines.',

        // Services
        'services-subtitle': 'WHAT I DO',
        'services-title': 'My <span style="color: var(--primary-color);">Services</span>',
        'services-text': 'End-to-end engineering — from system architecture and backend APIs to frontend interfaces, real-time features, and full server deployment.',
        'service-1-title': 'Backend Engineering',
        'service-1-text': 'Laravel, PHP, Livewire, RESTful API design, Eloquent ORM, authentication & authorization, cron jobs, Pusher real-time events, WhatsApp & SMTP notifications, and third-party API integrations.',
        'service-2-title': 'Frontend Development',
        'service-2-text': 'Vue.js, React.js, Bootstrap, Tailwind CSS, jQuery, Blade Templates, Vite — responsive, performant, production-ready interfaces with SweetAlert2, Select2, DataTables, and SwiperJS.',
        'service-3-title': 'DevOps & Infrastructure',
        'service-3-text': 'Linux/VPS administration, Nginx, Docker, CI/CD pipelines, Cloudflare, SSL, Git/GitHub — full server setup, configuration, and deployment from scratch to live production.',
        'service-4-title': 'Technical Training & Mentorship',
        'service-4-text': 'Curriculum design and live instruction for full-stack engineering — PHP, Laravel, database design, JavaScript, and modern frontend stacks. Mentored 50–100 developers through production-grade projects within intensive programs. Awarded Best Instructor at BlackHorse.',
        'service-5-title': 'Workflow Automation & AI Integration',
        'service-5-text': 'End-to-end automation pipelines using N8N, OpenAI API, and custom agent scripting — covering CV parsing, job matching, candidate scoring, and smart task routing. Eliminates manual bottlenecks and scales operations without adding headcount.',
        'service-6-title': 'Database Architecture & Data Modeling',
        'service-6-text': 'Relational database design across MySQL, MariaDB, and PostgreSQL — schema design, data integrity constraints, migration versioning, query optimization, and backup & recovery strategies built for production-grade systems.',

        // Portfolio
        'portfolio-subtitle': 'PORTFOLIO',
        'portfolio-title': 'Key <span style="color: var(--primary-color);">Projects</span>',
        'portfolio-text': 'Production-grade systems built solo — from architecture to deployment. Real platforms, real users, real impact across multiple industries.',

        // Testimonials
        'testimonials-subtitle': 'CLIENT FEEDBACK',
        'testimonials-title': 'What <span style="color: var(--primary-color);">Clients</span> Say',
        'testimonials-text': 'Real feedback from real clients who trust me with their projects.',
        'testimonial-1-text': 'One of the best people I\'ve worked with — creative, experienced, fast, and fair pricing. Thank you, Samy.',
        'testimonial-1-name': 'Toka T.',
        'testimonial-1-location': 'Khamsat Client',

        'testimonial-2-text': 'All gratitude to Samy for his dedication — delivered exactly what was required with high precision. Honored to have worked with him, and will definitely be back.',
        'testimonial-2-name': 'Ahmed A.',
        'testimonial-2-location': 'Khamsat Client',

        'testimonial-3-text': 'Third time working together — and he still goes beyond what\'s asked, adding extras on his own. Thank you engineer Samy, this won\'t be the last.',
        'testimonial-3-name': 'Mohammed A.',
        'testimonial-3-location': 'Khamsat Client',

        'testimonial-4-text': 'Samy is creative in both programming and design — patient, fast to respond and deliver. I recommend everyone to work with him without hesitation.',
        'testimonial-4-name': 'Manar A.',
        'testimonial-4-location': 'Khamsat Client',

        // Pricing
        'pricing-subtitle': 'HOW I WORK',
        'pricing-title': 'What You <span style="color: var(--primary-color);">Get</span>',
        'pricing-text': 'Not just code — a complete engineering partner who owns the full cycle from architecture to production.',
        'basic-plan': 'Clean Architecture',
        'basic-plan-desc': 'Structured, documented, Git-versioned code — production-ready from day one, no technical debt handed over.',
        'pro-plan': 'Full Ownership',
        'pro-plan-desc': 'I scope it, build it, and deploy it solo — no handoffs, no gaps, no babysitting required.',
        'ultra-plan': 'Deadline Driven',
        'ultra-plan-desc': 'Milestone tracking, direct communication, 25min avg response — ships on time, every time.',
        'per-month': 'per project',
        'read-more': 'Let\'s Talk',

        // Blog
        'blog-subtitle': 'TECH ARTICLES',
        'blog-title': 'Latest <span style="color: var(--primary-color);">Blog</span> Posts',
        'blog-text': 'Engineering insights, Laravel tips, system design breakdowns, and lessons from real production systems.',

        // Newsletter
        'newsletter-subtitle': 'LET\'S WORK TOGETHER',
        'newsletter-title': 'Have a project? Let\'s <span style="color: var(--primary-color)">build it together!</span>',
        'email-placeholder': 'Enter your email',
        'subscribe': 'Send',

        // Footer
        'about-me': 'About Me',
        'career': 'Career',
        'gallery': 'Gallery',
        'contact-me': 'Contact Me',
        'rights': '© 2026 All Rights Reserved.',

        // Projects
        'project-clickshare-title': 'Clickshare',
        'project-clickshare-subtitle': 'End-to-end dropshipping and logistics platform',
        'project-clickshare-desc': '<p>Clickshare runs the full cycle from sourcing and stock management to fulfillment, shipping, reports, and profit visibility.</p><p>The platform supports multi-role operations for traders, marketers, warehouse teams, call center agents, and admins with real-time analytics and wallet management.</p><p>It was built and owned solo from architecture through production.</p>',

        'project-crm-title': 'CRM Tasks',
        'project-crm-subtitle': 'Task management, chat, and internal knowledge system',
        'project-crm-desc': '<p>A Trello-style workflow product with role-based task management, real-time communication, and secure internal documentation.</p><p>Designed to scale toward AI agent workflows and broader social management operations.</p>',

        'project-ashrat-title': 'Ashrat',
        'project-ashrat-subtitle': 'Freelance services marketplace',
        'project-ashrat-desc': '<p>A marketplace product in the same category as Khamsat and Upwork, connecting service providers with project owners.</p><p>Includes proposal flow, dashboards, admin analytics, and end-to-end hiring workflow support.</p>',

        'project-bridge-title': 'Bridge',
        'project-bridge-subtitle': 'MikroTik and internet network management platform',
        'project-bridge-desc': '<p>Bridge gives operators remote control over MikroTik-based internet infrastructure with voucher generation, billing flow, and device subscriptions.</p><p>The product also exposes reporting dashboards around sessions, node performance, and renewal operations.</p>',

        'project-mzglol-title': 'Mzglol',
        'project-mzglol-subtitle': 'Citizen disputes and ministry routing platform',
        'project-mzglol-desc': '<p>A civic product for MP Mohamed Fouاد Zaghloul that routes citizen cases to the right ministry with role-based access and reporting.</p><p>It turns public complaints into a trackable and measurable workflow.</p>',

        'project-masar-title': 'Massar Connect',
        'project-masar-subtitle': 'AI-powered recruitment and career management platform',
        'project-masar-desc': '<p>Masar automates both sides of hiring: candidates improve CVs and receive AI job matching, while HR teams get scoring, ranking, and interview automation.</p><p>The result is a recruitment pipeline that scales processing capacity without adding headcount.</p>',

        'project-ffa-title': 'FFA-Global',
        'project-ffa-subtitle': 'Crypto and forex intelligence platform',
        'project-ffa-desc': '<p>A live market platform combining crypto and forex data with premium educational content and subscription-based access.</p><p>Built for users who want market visibility and structured learning in one product.</p>',

        'project-boost-title': 'Boost',
        'project-boost-subtitle': 'Gaming marketplace for keys and in-game currency',
        'project-boost-desc': '<p>A buyer and seller marketplace for discounted game keys, coins, and digital inventory with trusted middleman flows.</p><p>The system supports payment processing, order management, and delivery validation.</p>',

        'project-hader-title': 'Hader Clinics',
        'project-hader-subtitle': 'Doctor discovery and appointment booking platform',
        'project-hader-desc': '<p>A healthcare booking product connecting patients with doctors through profiles, smart filters, available slots, and reminders.</p><p>It manages the appointment lifecycle cleanly for both patients and clinic teams.</p>'
    },
    ar: {
        // Navbar
        'live-chat': 'محادثة مباشرة',
        'home': 'الرئيسية',
        'about': 'عني',
        'services': 'الخدمات',
        'portfolio': 'أعمالي',
        'blog': 'المدونة',

        // Hero
        'hero-name': 'أهلاً، أنا <span class="hero-underline">سامي جو</span>',
        'hero-title': 'الكود مش شغل. <span style="color: var(--primary-color);">ده أسلوب حياة.</span>',
        'hero-subtitle': 'مهندس برمجيات فول ستاك من القاهرة — متخصص في Laravel وتصميم API وإدارة السيرفرات',
        'get-started': 'تحميل السيرة الذاتية',

        // About
        'about-subtitle': 'عني',
        'about-title': 'أنا مهندس <span style="color: var(--primary-color);">فول ستاك</span>',
        'about-text': 'مهندس برمجيات فول ستاك بخبرة أكتر من 4 سنين في بناء أنظمة حقيقية من الصفر لحد ما تطلع على الهواء. تخصصي في معمارية الأنظمة، Laravel وPHP، تصميم API، إدارة السيرفرات، ولوحات البيانات اللحظية.',
        'download-cv': 'تحميل السيرة الذاتية',

        // Experience
        'experience-subtitle': 'خبرتي',
        'experience-title': 'مسيرتي <span style="color: var(--primary-color);">المهنية</span>',
        'experience-text': 'أكتر من 4 سنين في بناء أنظمة حقيقية — من منصات دروب شيبينج وCRM لأدوات إدارة الشبكات وخطوط التوظيف بالذكاء الاصطناعي.',

        // Services
        'services-subtitle': 'إيه اللي بعمله',
        'services-title': 'خدماتي <span style="color: var(--primary-color);"></span>',
        'services-text': 'هندسة من الأول للآخر — من معمارية النظام والـ API للواجهات والميزات اللحظية والنشر الكامل على السيرفر.',
        'service-1-title': 'هندسة الباك إند',
        'service-1-text': 'Laravel، PHP، Livewire، تصميم RESTful API، Eloquent ORM، صلاحيات وتوثيق، كرون جوبز، أحداث لحظية بـ Pusher، إشعارات واتساب وإيميل، وتكامل مع APIs خارجية.',
        'service-2-title': 'تطوير الفرونت إند',
        'service-2-text': 'Vue.js، React.js، Bootstrap، Tailwind CSS، jQuery، Blade، Vite — واجهات متجاوبة وعالية الأداء مع SweetAlert2 وSelect2 وDataTables وSwiperJS.',
        'service-3-title': 'DevOps والبنية التحتية',
        'service-3-text': 'إدارة Linux/VPS، Nginx، Docker، CI/CD، Cloudflare، SSL، Git/GitHub — إعداد ونشر كامل من الصفر لحد الإنتاج.',
        'service-4-title': 'التدريب التقني والإرشاد المهني',
        'service-4-text': 'تصميم مناهج وتدريس مباشر في هندسة الفول ستاك — PHP، Laravel، تصميم قواعد البيانات، JavaScript، وأحدث تقنيات الفرونت إند. إرشاد 50–100 مطور لبناء مشاريع حقيقية ضمن برامج مكثفة. حاصل على جائزة أفضل مدرب في BlackHorse.',
        'service-5-title': 'أتمتة سير العمل وتكامل الذكاء الاصطناعي',
        'service-5-text': 'خطوط أتمتة متكاملة باستخدام N8N وOpenAI API وسكريبتات العملاء — تغطي تحليل السير الذاتية، مطابقة الوظائف، تقييم المرشحين، وتوجيه المهام الذكي. تلغي الاختناقات اليدوية وتوسع العمليات بدون إضافة موظفين.',
        'service-6-title': 'معمارية قواعد البيانات ونمذجة البيانات',
        'service-6-text': 'تصميم قواعد بيانات علائقية على MySQL وMariaDB وPostgreSQL — تصميم المخططات، قيود تكامل البيانات، إصدار الـ migrations، تحسين الاستعلامات، واستراتيجيات النسخ الاحتياطي والاسترداد لأنظمة الإنتاج.',

        // Portfolio
        'portfolio-subtitle': 'أعمالي',
        'portfolio-title': 'أبرز <span style="color: var(--primary-color);">المشاريع</span>',
        'portfolio-text': 'أنظمة حقيقية اتبنت لوحدي — من التصميم للنشر. منصات شغالة، مستخدمين حقيقيين، وأثر ملموس في أكتر من صناعة.',

        // Testimonials
        'testimonials-subtitle': 'آراء العملاء',
        'testimonials-title': 'إيه اللي بيقوله <span style="color: var(--primary-color);">العملاء</span>',
        'testimonials-text': 'كلام حقيقي من عملاء حقيقيين وثقوا فيا بمشاريعهم.',
        'testimonial-1-text': 'من أفضل الناس الذين تعاملت معهم — إبداع وخبرة وسرعة وسعر مناسب. شكراً لك أخ سامي.',
        'testimonial-1-name': 'توكا ت.',
        'testimonial-1-location': 'عميل خمسات',

        'testimonial-2-text': 'كل الشكر للأخ سامي على تفانيه في العمل — أنجز المطلوب بدقة عالية. تشرفت بطلب الخدمة وسوف أكرر الطلب.',
        'testimonial-2-name': 'أحمد أ.',
        'testimonial-2-location': 'عميل خمسات',

        'testimonial-3-text': 'التعامل الثالث معه — وما زال يقدم أشياء إضافية من عنده ويساعدني فيها. شكراً مهندس سامي ولنا التعامل المستمر.',
        'testimonial-3-name': 'محمد أ.',
        'testimonial-3-location': 'عميل خمسات — عميل متكرر',

        'testimonial-4-text': 'الأستاذ سامي مبدع في البرمجة والتصميم، صبور وسريع في الرد والتنفيذ. أتمنى من الجميع التعامل معه ولا تتردد.',
        'testimonial-4-name': 'منار أ.',
        'testimonial-4-location': 'عميل خمسات',

        // Pricing
        'pricing-subtitle': 'أسلوب عملي',
        'pricing-title': 'إيه اللي <span style="color: var(--primary-color);">هتاخده</span>',
        'pricing-text': 'مش كود بس — شريك هندسي كامل بيمتلك الدورة كلها من التصميم للإنتاج.',
        'basic-plan': 'معمارية نضيفة',
        'basic-plan-desc': 'كود منظم، موثق، ومتحكم فيه بـ Git — جاهز للإنتاج من أول يوم، من غير ديون تقنية.',
        'pro-plan': 'ملكية كاملة',
        'pro-plan-desc': 'بحدد، ببني، وبنشر لوحدي — مفيش تسليم ناقص، مفيش فجوات، مفيش إشراف مطلوب.',
        'ultra-plan': 'ملتزم بالمواعيد',
        'ultra-plan-desc': 'تتبع مراحل، تواصل مباشر، متوسط رد 25 دقيقة — بيتسلم في وقته كل مرة.',
        'per-month': 'لكل مشروع',
        'read-more': 'نتكلم',

        // Blog
        'blog-subtitle': 'مقالات تقنية',
        'blog-title': 'أحدث <span style="color: var(--primary-color);">المقالات</span>',
        'blog-text': 'أفكار هندسية، نصايح Laravel، تحليل تصميم الأنظمة، ودروس من أنظمة حقيقية على الهواء.',

        // Newsletter
        'newsletter-subtitle': 'خلينا نشتغل سوا',
        'newsletter-title': 'عندك مشروع؟ يلا <span style="color: var(--primary-color)">نبنيه سوا!</span>',
        'email-placeholder': 'أدخل إيميلك',
        'subscribe': 'إرسال',

        // Footer
        'about-me': 'عني',
        'career': 'المسيرة',
        'gallery': 'المعرض',
        'contact-me': 'تواصل معي',
        'rights': '© 2026 جميع الحقوق محفوظة.',

        // Projects
        'project-clickshare-title': 'كليك شير',
        'project-clickshare-subtitle': 'منصة دروبشيبينغ ولوجستيات متكاملة',
        'project-clickshare-desc': '<p>تدير Clickshare الدورة الكاملة من التوريد وإدارة المخزون حتى التنفيذ والشحن والتقارير وربحية التشغيل.</p><p>المنصة تدعم أدواراً متعددة للتجار والمسوقين والمخازن وخدمة العملاء والإدارة، مع تحليلات لحظية وإدارة المحفظة المالية.</p><p>تم بناؤها وتطويرها بالكامل بشكل فردي، من المعمارية حتى الإطلاق الفعلي.</p>',

        'project-crm-title': 'نظام المهام CRM',
        'project-crm-subtitle': 'نظام إدارة مهام ودردشة ومعرفة داخلية',
        'project-crm-desc': '<p>منتج لإدارة سير العمل شبيه بـ Trello مع إدارة مهام قائمة على الأدوار، وتواصل لحظي، وتوثيق داخلي آمن.</p><p>مصمم للتوسع مستقبلاً باتجاه أتمتة الذكاء الاصطناعي وإدارة العمليات الاجتماعية الأوسع.</p>',

        'project-ashrat-title': 'عشرات',
        'project-ashrat-subtitle': 'سوق للخدمات الحرة (Freelance)',
        'project-ashrat-desc': '<p>منصة خدمات حرة في نفس فئة "خمسات" و"مستقل"، تربط أصحاب المشاريع بالمستقلين المهرة.</p><p>تشمل مسار تقديم العروض، لوحات التحكم، تحليلات الإدارة، ودعم كامل لسير عمل التوظيف من البداية للنهاية.</p>',

        'project-bridge-title': 'بريدج',
        'project-bridge-subtitle': 'منصة لإدارة أجهزة ميكروتيك وشبكات الإنترنت',
        'project-bridge-desc': '<p>تمنح Bridge المشغلين تحكماً عن بعد في بنية الإنترنت التحتية القائمة على MikroTik مع توليد كروت الشحن، مسار الفوترة، واشتراكات الأجهزة.</p><p>كما توفر المنصة لوحات تقارير حول الجلسات، أداء الشبكة، وعمليات التجديد.</p>',

        'project-mzglol-title': 'مزغلول',
        'project-mzglol-subtitle': 'منصة لشكاوى المواطنين وتوجيهها للوزارات',
        'project-mzglol-desc': '<p>منتج مدني للنائب محمد فؤاد زغلول يقوم بتوجيه قضايا المواطنين إلى الوزارة الصحيحة مع صلاحيات قائمة على الأدوار وتقارير مفصلة.</p><p>يحول الشكاوى العامة إلى سير عمل قابل للتتبع والقياس.</p>',

        'project-masar-title': 'مسار كونكت',
        'project-masar-subtitle': 'منصة توظيف وإدارة مسار مهني مدعومة بالذكاء الاصطناعي',
        'project-masar-desc': '<p>تؤتمت "مسار" جانبي التوظيف: المرشحون يحسنون سيرهم الذاتية ويحصلون على مطابقة وظائف بالذكاء الاصطناعي، بينما تحصل فرق الموارد البشرية على التقييم والترتيب وأتمتة المقابلات.</p><p>النتيجة هي مسار توظيف يوسع قدرة المعالجة دون الحاجة لزيادة عدد الموظفين.</p>',

        'project-ffa-title': 'FFA-Global',
        'project-ffa-subtitle': 'منصة ذكاء مالي للعملات الرقمية والفوركس',
        'project-ffa-desc': '<p>منصة سوق مباشر تجمع بين بيانات العملات الرقمية والفوركس مع محتوى تعليمي مميز ووصول قائم على الاشتراك.</p><p>بنيت للمستخدمين الذين يريدون متابعة السوق والتعلم المنظم في منتج واحد.</p>',

        'project-boost-title': 'بوست',
        'project-boost-subtitle': 'سوق ألعاب للمفاتيح والعملات الرقمية داخل الألعاب',
        'project-boost-desc': '<p>سوق للمشترين والبائعين لمفاتيح الألعاب والعملات الرقمية بأسعار مخفضة مع مسارات وسيط موثوق.</p><p>يدعم النظام معالجة المدفوعات، إدارة الطلبات، والتحقق من التسليم.</p>',

        'project-hader-title': 'عيادات حاضر',
        'project-hader-subtitle': 'منصة لاكتشاف الأطباء وحجز المواعيد',
        'project-hader-desc': '<p>منتج لحجز الرعاية الصحية يربط المرضى بالأطباء عبر الملفات الشخصية، الفلاتر الذكية، المواعيد المتاحة، والتذكيرات.</p><p>يدير دورة المواعيد بشكل منظم للمرضى وفرق العيادات على حد سواء.</p>'
    }
};

let currentLang = 'en';

function translatePage(lang) {
    currentLang = lang;
    const elements = document.querySelectorAll('[data-translate]');

    elements.forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Update placeholder for input
    const emailInput = document.querySelector('input[data-translate="email-placeholder"]');
    if (emailInput && translations[lang]['email-placeholder']) {
        emailInput.placeholder = translations[lang]['email-placeholder'];
    }

    // Force refresh Owl Carousel after translation with delay
    setTimeout(() => {
        if (typeof $ !== 'undefined' && $('.testimonial-carousel').length) {
            const owl = $('.testimonial-carousel');

            // Destroy completely
            if (owl.hasClass('owl-loaded')) {
                owl.trigger('destroy.owl.carousel');
                owl.removeClass('owl-carousel owl-loaded');
                owl.find('.owl-stage-outer').children().unwrap();
            }

            // Remove all owl classes
            owl.find('.owl-item').contents().unwrap();

            // Reinitialize
            owl.addClass('owl-carousel');
            owl.owlCarousel({
                loop: true,
                margin: 30,
                nav: false,
                dots: true,
                autoplay: true,
                autoplayTimeout: 5000,
                rtl: lang === 'ar',
                responsive: {
                    0: { items: 1 },
                    768: { items: 1 },
                    992: { items: 1 }
                }
            });
        }
    }, 100);
}

// Auto-init
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'en';
    const langSwitch = document.getElementById('langSwitch');
    if (langSwitch) {
        langSwitch.value = savedLang;
    }

    // Set initial direction
    const html = document.documentElement;
    if (savedLang === 'ar') {
        html.setAttribute('lang', 'ar');
        html.setAttribute('dir', 'rtl');
    } else {
        html.setAttribute('lang', 'en');
        html.setAttribute('dir', 'ltr');
    }

    translatePage(savedLang);
});