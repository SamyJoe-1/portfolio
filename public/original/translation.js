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
        'rights': '© 2026 All Rights Reserved.'
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
        'rights': '© 2026 جميع الحقوق محفوظة.'
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