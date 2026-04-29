const PROJECTS = {
    clickshare: {
        get title() { return translations[currentLang]['project-clickshare-title'] || 'Clickshare'; },
        get subtitle() { return translations[currentLang]['project-clickshare-subtitle'] || 'End-to-End Dropshipping & Logistics Platform'; },
        get description() { return translations[currentLang]['project-clickshare-desc']; },
        images: ['clickshare/1.png', 'clickshare/2.png', 'clickshare/3.png', 'clickshare/4.png', 'clickshare/5.png'],
        tags: ['PHP', 'Laravel', 'Livewire', 'MySQL', 'Pusher', 'Tailwind CSS', 'Bootstrap', 'Vite', 'RESTful API', 'Cron Jobs', 'WhatsApp Notifications', 'Role-Based Access Control']
    },
    crm: {
        get title() { return translations[currentLang]['project-crm-title'] || 'CRM Tasks'; },
        get subtitle() { return translations[currentLang]['project-crm-subtitle'] || 'All-in-One Task Management, Chat & Knowledge Hub'; },
        get description() { return translations[currentLang]['project-crm-desc']; },
        images: ['crm/1.png', 'crm/2.png', 'crm/3.png', 'crm/4.png', 'crm/5.png'],
        tags: ['PHP', 'Laravel', 'Pusher', 'MySQL', 'Bootstrap', 'JavaScript', 'jQuery', 'Real-Time Events', 'Role-Based Access', 'Reporting']
    },
    bridge: {
        get title() { return translations[currentLang]['project-bridge-title'] || 'Bridge'; },
        get subtitle() { return translations[currentLang]['project-bridge-subtitle'] || 'MikroTik & Internet Network Management Platform'; },
        get description() { return translations[currentLang]['project-bridge-desc']; },
        images: ['bridge/1.png', 'bridge/2.png', 'bridge/3.png', 'bridge/4.png', 'bridge/5.png'],
        tags: ['Laravel', 'MySQL', 'Bootstrap', 'jQuery', 'FreeRadius', 'SSH/CLI', 'MikroTik API', 'Cron Jobs', 'Network Management', 'Reporting']
    },
    ffa: {
        get title() { return translations[currentLang]['project-ffa-title'] || 'FFA Global'; },
        get subtitle() { return translations[currentLang]['project-ffa-subtitle'] || 'Crypto & Forex Live Market Intelligence Platform'; },
        get description() { return translations[currentLang]['project-ffa-desc']; },
        images: ['ffa/1.png', 'ffa/2.png', 'ffa/3.png'],
        tags: ['Laravel', 'MySQL', 'Bootstrap', 'JavaScript', 'Live Market API', 'Subscription System', 'Premium Access Control', 'Crypto', 'Forex']
    },
    ashrat: {
        get title() { return translations[currentLang]['project-ashrat-title'] || 'Ashrat'; },
        get subtitle() { return translations[currentLang]['project-ashrat-subtitle'] || 'Freelance Services Marketplace'; },
        get description() { return translations[currentLang]['project-ashrat-desc']; },
        images: ['ashrat/1.png', 'ashrat/2.png', 'ashrat/3.png'],
        tags: ['Laravel', 'MySQL', 'Bootstrap', 'JavaScript', 'Role-Based Dashboards', 'Workflow Management', 'Analytics', 'Freelance Marketplace']
    },
    masar: {
        get title() { return translations[currentLang]['project-masar-title'] || 'Massar Connect'; },
        get subtitle() { return translations[currentLang]['project-masar-subtitle'] || 'AI-Powered Recruitment & Career Management Platform'; },
        get description() { return translations[currentLang]['project-masar-desc']; },
        images: ['masar/1.png', 'masar/2.png', 'masar/3.png', 'masar/4.png', 'masar/5.png', 'masar/6.png'],
        tags: ['Laravel', 'MySQL', 'N8N', 'OpenAI API', 'Bootstrap', 'JavaScript', 'AI Automation', 'CV Parsing', 'ATS Scoring', 'Job Matching', 'Automated Interviews']
    },
    mzglol: {
        get title() { return translations[currentLang]['project-mzglol-title'] || 'Mzglol'; },
        get subtitle() { return translations[currentLang]['project-mzglol-subtitle'] || 'Citizens Disputes & Government Redirecting Platform'; },
        get description() { return translations[currentLang]['project-mzglol-desc']; },
        images: ['mzglol/1.png', 'mzglol/2.png', 'mzglol/3.png'],
        tags: ['Laravel', 'MySQL', 'Bootstrap', 'JavaScript', 'Role-Based Access', 'Government Platform', 'Case Routing', 'Reporting', 'Civic Tech']
    },
    boost: {
        get title() { return translations[currentLang]['project-boost-title'] || 'Boost'; },
        get subtitle() { return translations[currentLang]['project-boost-subtitle'] || 'Gaming Marketplace — Discounted Games, Coins & In-Game Currency'; },
        get description() { return translations[currentLang]['project-boost-desc']; },
        images: ['boost/1.png', 'boost/2.png', 'boost/3.png'],
        tags: ['Laravel', 'MySQL', 'Bootstrap', 'JavaScript', 'Payment Integration', 'Marketplace', 'Escrow System', 'Order Management', 'Gaming']
    },
    hader: {
        get title() { return translations[currentLang]['project-hader-title'] || 'Hader Clinics'; },
        get subtitle() { return translations[currentLang]['project-hader-subtitle'] || 'Doctor Discovery & Appointment Booking Platform'; },
        get description() { return translations[currentLang]['project-hader-desc']; },
        images: ['hader/1.png'],
        tags: ['Laravel', 'MySQL', 'Bootstrap', 'JavaScript', 'Appointment Booking', 'Doctor Profiles', 'Smart Filters', 'Scheduling System', 'Healthcare']
    }
};

let projectSwiper = null;

document.querySelectorAll('.project-card[data-project]').forEach(card => {
    card.addEventListener('click', function () {
        const data = PROJECTS[this.dataset.project];

        document.getElementById('projectModalTitle').textContent = data.title;
        document.getElementById('projectModalDesc').innerHTML = data.description;

        document.getElementById('projectModalTags').innerHTML = data.tags.map(t =>
            `<span class="badge" style="background:var(--primary-color);color:#000">${t}</span>`
        ).join('');

        document.getElementById('projectSwiperWrapper').innerHTML = data.images.map(img =>
            `<div class="swiper-slide"><img src="assets/images/projects/${img}" class="img-fluid rounded w-100" style="max-height:400px;object-fit:cover" alt=""></div>`
        ).join('');

        if (projectSwiper) projectSwiper.destroy(true, true);
        projectSwiper = new Swiper('.projectSwiper', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            loop: data.images.length > 1,
            pagination: { el: '.swiper-pagination', clickable: true },
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }
        });

        new bootstrap.Modal(document.getElementById('projectModal')).show();
    });
});