const PROJECTS = {
    clickshare: {
        title: 'Clickshare',
        subtitle: 'End-to-End Dropshipping & Logistics Platform',
        images: ['clickshare/1.png', 'clickshare/2.png', 'clickshare/3.png', 'clickshare/4.png', 'clickshare/5.png'],
        description: `
            <p>Clickshare is a <strong>full-cycle dropshipping and logistics platform</strong> that owns the entire pipeline — from sourcing and stocking products all the way to order fulfillment, shipping, and exporting profit reports.</p>
            <p>The system is built around <strong>multi-role architecture</strong>: marketers focus solely on generating leads while the platform handles everything else — warehouse operations, agent workflows, call center management, logistics coordination, and financial tracking via an integrated wallet system.</p>
            <p>Key highlights include <strong>real-time analytics dashboards</strong> giving traders and marketers full visibility into sales performance, stock levels, and fulfillment status — plus a <strong>competitive reports engine</strong> that directly drives sharper business decisions and measurable revenue growth across active merchants.</p>
            <p>Built and owned solo as the sole engineer — from architecture through production.</p>
        `,
        tags: ['PHP', 'Laravel', 'Livewire', 'MySQL', 'Pusher', 'Tailwind CSS', 'Bootstrap', 'Vite', 'RESTful API', 'Cron Jobs', 'WhatsApp Notifications', 'Role-Based Access Control']
    },
    crm: {
        title: 'CRM Tasks',
        subtitle: 'All-in-One Task Management, Chat & Knowledge Hub',
        images: ['crm/1.png', 'crm/2.png', 'crm/3.png', 'crm/4.png', 'crm/5.png'],
        description: `
            <p>CRM Tasks is an <strong>all-in-one productivity platform</strong> built to evolve into a full social media and AI agent management tool — currently delivering a production-grade task and knowledge management system.</p>
            <p>At its core it's a <strong>Trello-style board system</strong> with role-based workflow management, letting teams create, assign, and track tasks across boards with full pipeline visibility. It also includes a <strong>documents and secret vault section</strong> where teams can store internal docs, credentials, and sensitive information securely.</p>
            <p>The platform features <strong>real-time chat</strong> powered by Pusher for instant team communication, and a <strong>reports module</strong> that surfaces performance insights across tasks and team activity.</p>
            <p>Built solo from zero — designed with scalability in mind to support AI agent integrations and social media management as next phases.</p>
        `,
        tags: ['PHP', 'Laravel', 'Pusher', 'MySQL', 'Bootstrap', 'JavaScript', 'jQuery', 'Real-Time Events', 'Role-Based Access', 'Reporting']
    },
    bridge: {
        title: 'Bridge',
        subtitle: 'MikroTik & Internet Network Management Platform',
        images: ['bridge/1.png', 'bridge/2.png', 'bridge/3.png', 'bridge/4.png', 'bridge/5.png'],
        description: `
            <p>Bridge is a <strong>mission-critical network management platform</strong> designed for ISPs, cafés, and large venues that run MikroTik-based internet infrastructure.</p>
            <p>Clients connect their MikroTik device to the platform and <strong>instantly hand over full remote control</strong> — Bridge takes it from there. The system generates internet voucher cards with custom configurations, bandwidth limits, and expiry settings, which the venue owner can sell directly to end users.</p>
            <p>The platform handles the <strong>full subscription lifecycle</strong> of connected devices — installation management, renewal tracking, expiry alerts, and multi-device coordination across large deployments handling 200–500 active client devices.</p>
            <p>Operators get access to <strong>deep reporting dashboards</strong> covering device performance, revenue per node, active sessions, and fulfillment history — giving full operational visibility at scale.</p>
        `,
        tags: ['Laravel', 'MySQL', 'Bootstrap', 'jQuery', 'FreeRadius', 'SSH/CLI', 'MikroTik API', 'Cron Jobs', 'Network Management', 'Reporting']
    },
    ffa: {
        title: 'FFA Global',
        subtitle: 'Crypto & Forex Live Market Intelligence Platform',
        images: ['ffa/1.png', 'ffa/2.png'],
        description: `
            <p>FFA Global is a <strong>financial market intelligence platform</strong> targeting crypto traders and forex investors who need live data and structured education in one place.</p>
            <p>The platform delivers <strong>real-time market prices</strong> across crypto and forex pairs with live chart feeds, giving traders up-to-the-second visibility on the markets they're tracking.</p>
            <p>Beyond live data, it features a <strong>premium courses section</strong> — locked behind a subscription — covering trading strategies, technical analysis, and forex fundamentals. Access is tiered so free users get market data while premium members unlock the full educational content library.</p>
            <p>Built to serve an audience that wants both market monitoring and skill-building under one roof, without jumping between platforms.</p>
        `,
        tags: ['Laravel', 'MySQL', 'Bootstrap', 'JavaScript', 'Live Market API', 'Subscription System', 'Premium Access Control', 'Crypto', 'Forex']
    },
    ashrat: {
        title: 'Ashrat',
        subtitle: 'Freelance Services Marketplace',
        images: ['ashrat/1.png', 'ashrat/2.png', 'ashrat/3.png'],
        description: `
            <p>Ashrat is a <strong>full freelance services marketplace</strong> — a branded platform in the vein of Khamsat, Mostaql, and Upwork — connecting project owners with skilled freelancers across service categories.</p>
            <p>The platform supports the <strong>full application and hiring workflow</strong>: freelancers list their services, project owners post requirements, and the system manages proposals, negotiations, and project assignment end-to-end.</p>
            <p>Both sides get <strong>dedicated dashboards</strong> — freelancers track their active gigs, earnings, and reviews while clients manage posted projects, incoming proposals, and hiring decisions. An <strong>analytics layer</strong> surfaces platform-wide activity and performance metrics for admins.</p>
            <p>Built solo from zero under a new brand identity — architected to scale as an independent marketplace with its own user base.</p>
        `,
        tags: ['Laravel', 'MySQL', 'Bootstrap', 'JavaScript', 'Role-Based Dashboards', 'Workflow Management', 'Analytics', 'Freelance Marketplace']
    },
    masar: {
        title: 'Masar Connect',
        subtitle: 'AI-Powered Recruitment & Career Management Platform',
        images: ['masar/1.png', 'masar/2.png', 'masar/3.png', 'masar/4.png', 'masar/5.png', 'masar/6.png'],
        description: `
            <p>Masar Connect is an <strong>end-to-end AI-driven recruitment platform</strong> that eliminates human bottlenecks from both sides of the hiring process — candidates and HR teams operate in fully automated workflows.</p>
            <p>On the <strong>candidate side</strong>: users build and improve their CVs directly in the platform, run ATS compatibility checks to score their CV against real job requirements, and let the AI match them to relevant job listings automatically — no manual searching required.</p>
            <p>On the <strong>HR side</strong>: recruiters get a dashboard that processes dozens of CVs in one shot — AI parses, scores, and ranks applicants against the job criteria, then conducts automated interviews with shortlisted candidates. Zero human hand in the screening pipeline.</p>
            <p>The result is a system where <strong>candidate processing capacity scales without adding headcount</strong> — the entire pipeline from application to interview runs on AI automation end-to-end.</p>
        `,
        tags: ['Laravel', 'MySQL', 'N8N', 'OpenAI API', 'Bootstrap', 'JavaScript', 'AI Automation', 'CV Parsing', 'ATS Scoring', 'Job Matching', 'Automated Interviews']
    },
    mzglol: {
        title: 'Mzglol',
        subtitle: 'Citizens Disputes & Government Redirecting Platform',
        images: ['mzglol/1.png', 'mzglol/2.png'],
        description: `
        <p>Mzglol is an <strong>official civic platform</strong> built for MP Mohamed Fouad Zaghloul — giving citizens a direct digital channel to submit their disputes, concerns, and requests to their representative.</p>
        <p>Submissions don't just pile up — the platform <strong>automatically routes each case to the correct ministry</strong> responsible for handling it, ensuring nothing gets lost in bureaucratic dead ends and every complaint lands in the right hands.</p>
        <p>Ministries operate under <strong>role-based access control</strong> — each ministry sees and manages only the cases assigned to their jurisdiction, keeping operations clean and accountable across departments.</p>
        <p>A <strong>full reporting layer</strong> gives the MP and admins complete visibility into submission volumes, case statuses, ministry response rates, and resolution tracking — turning citizen engagement into measurable governance data.</p>
    `,
        tags: ['Laravel', 'MySQL', 'Bootstrap', 'JavaScript', 'Role-Based Access', 'Government Platform', 'Case Routing', 'Reporting', 'Civic Tech']
    },
    boost: {
        title: 'Boost',
        subtitle: 'Gaming Marketplace — Discounted Games, Coins & In-Game Currency',
        images: ['boost/1.png', 'boost/2.png'],
        description: `
        <p>Boost is a <strong>gaming marketplace platform</strong> operating in the same space as G2A — connecting buyers looking for discounted game keys, coins, V-Bucks, and in-game currency with sellers offering them at competitive prices.</p>
        <p>The platform acts as a <strong>trusted middleman</strong> — guaranteeing the transaction on both ends. Sellers list their inventory, buyers place orders, and Boost ensures the delivery is verified before funds are released, protecting both parties throughout the process.</p>
        <p>The system handles <strong>payment processing, order management, and conversion guarantees</strong> — giving buyers confidence they'll receive what they paid for and giving sellers a reliable channel to move their inventory at scale.</p>
        <p>Built to support multiple game titles and currency types under one unified storefront with a clean buyer and seller experience.</p>
    `,
        tags: ['Laravel', 'MySQL', 'Bootstrap', 'JavaScript', 'Payment Integration', 'Marketplace', 'Escrow System', 'Order Management', 'Gaming']
    },
    hader: {
        title: 'Hader Clinics',
        subtitle: 'Doctor Discovery & Appointment Booking Platform',
        images: ['hader/1.png'],
        description: `
        <p>Hader Clinics is a <strong>doctor discovery and booking platform</strong> — operating in the same space as Vezeeta — connecting patients with the right doctor without the phone calls and guesswork.</p>
        <p>Each doctor has a <strong>dedicated profile</strong> showcasing their specialty, experience, clinic location, available slots, and patient reviews — giving users everything they need to make an informed decision before booking.</p>
        <p>Patients use <strong>smart filters</strong> to narrow down by specialty, location, availability, and rating — finding their most suitable doctor quickly and scheduling an appointment directly through the platform.</p>
        <p>The system manages the <strong>full appointment lifecycle</strong> — booking, confirmation, reminders, and scheduling management on the doctor's side — keeping both patients and clinics organized with zero friction.</p>
    `,
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
            loop: data.images.length > 1,
            pagination: { el: '.swiper-pagination', clickable: true },
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }
        });

        new bootstrap.Modal(document.getElementById('projectModal')).show();
    });
});