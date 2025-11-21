$(document).ready(function() {
    // Initialize language
    let currentLang = 'en';

    // Translations object
    const translations = {
        en: {
            'Home': 'Home',
            'Experience': 'Experience',
            'Portfolio': 'Portfolio',
            'Contact': 'Contact',
            "Let's Talk": "Let's Talk",
            'Crafting Elegance': 'Crafting Elegance',
            'Where tradition meets contemporary fashion design': 'Where tradition meets contemporary fashion design',
            'My Expertise': 'My Expertise',
            'Custom Tailoring': 'Custom Tailoring',
            "Bespoke designs tailored to perfection for every client's unique style": "Bespoke designs tailored to perfection for every client's unique style",
            'Color Harmony': 'Color Harmony',
            'Expert in creating stunning color combinations that reflect elegance': 'Expert in creating stunning color combinations that reflect elegance',
            'Luxury Fabrics': 'Luxury Fabrics',
            'Luxury': 'Luxury',
            'Working with premium materials to deliver exceptional quality': 'Working with premium materials to deliver exceptional quality',
            'Detail Oriented': 'Detail Oriented',
            'Meticulous attention to every stitch, ensuring flawless execution': 'Meticulous attention to every stitch, ensuring flawless execution',
            'My Collection': 'My Collection',
            'Elegant Abaya Collection': 'Elegant Abaya Collection',
            'Elegant Abaya': 'Elegant Abaya',
            'Contemporary Design': 'Contemporary Design',
            'Luxury Evening Wear': 'Luxury Evening Wear',
            'Traditional Heritage': 'Traditional Heritage',
            'Modern Minimalism': 'Modern Minimalism',
            'Artistic Expression': 'Artistic Expression',
            'Bridal Collection': 'Bridal Collection',
            'Bridal': 'Bridal',
            'Casual Elegance': 'Casual Elegance',
            'Seasonal Collection': 'Seasonal Collection',
            'Seasonal': 'Seasonal',
            'Premium Craftsmanship': 'Premium Craftsmanship',
            'Duha Al-Khashini': 'Duha Al-Khashini',
            'Fashion is not just about clothing, it\'s about expressing your inner beauty and confidence through every thread.': 'Fashion is not just about clothing, it\'s about expressing your inner beauty and confidence through every thread.',
            'Quick Links': 'Quick Links',
            'Connect With Me': 'Connect With Me',
            '© 2024 Duha Al-Khashini. All rights reserved.': '© 2024 Duha Al-Khashini. All rights reserved.'
        },
        ar: {
            'Home': 'الرئيسية',
            'Experience': 'الخبرة',
            'Portfolio': 'المعرض',
            'Contact': 'تواصل',
            "Let's Talk": 'تواصل معي',
            'Crafting Elegance': 'صناعة الأناقة',
            'Where tradition meets contemporary fashion design': 'حيث يلتقي التراث بالتصميم العصري',
            'My Expertise': 'خبرتي',
            'Custom Tailoring': 'الخياطة المخصصة',
            "Bespoke designs tailored to perfection for every client's unique style": 'تصاميم مخصصة مصممة بدقة لأسلوب كل عميل فريد',
            'Color Harmony': 'تناغم الألوان',
            'Expert in creating stunning color combinations that reflect elegance': 'خبيرة في ابتكار تناسق ألوان مذهل يعكس الأناقة',
            'Luxury Fabrics': 'الأقمشة الفاخرة',
            'Luxury': 'فاخرة',
            'Working with premium materials to deliver exceptional quality': 'العمل مع المواد الفاخرة لتقديم جودة استثنائية',
            'Detail Oriented': 'اهتمام بالتفاصيل',
            'Meticulous attention to every stitch, ensuring flawless execution': 'اهتمام دقيق بكل غرزة، مع ضمان التنفيذ الخالي من العيوب',
            'My Collection': 'معرض أعمالي',
            'Elegant Abaya Collection': 'مجموعة العبايات الأنيقة',
            'Elegant Abaya': 'العبايات الأنيقة',
            'Contemporary Design': 'التصميم المعاصر',
            'Luxury Evening Wear': 'الأزياء المسائية الفاخرة',
            'Traditional Heritage': 'التراث التقليدي',
            'Modern Minimalism': 'البساطة العصرية',
            'Artistic Expression': 'التعبير الفني',
            'Bridal Collection': 'مجموعة العرائس',
            'Bridal': 'العرائس',
            'Casual Elegance': 'الأناقة اليومية',
            'Seasonal': 'الموسمية',
            'Premium Craftsmanship': 'الحرفية الفاخرة',
            'Duha Al-Khashini': 'ضحى محمد شحادة الخشيني',
            'Fashion is not just about clothing, it\'s about expressing your inner beauty and confidence through every thread.': 'الموضة ليست مجرد ملابس، بل هي التعبير عن جمالك الداخلي وثقتك من خلال كل خيط.',
            'Quick Links': 'روابط سريعة',
            'Connect With Me': 'تواصل معي',
            '© 2024 Duha Al-Khashini. All rights reserved.': '© 2024 ضحى الخشيني. جميع الحقوق محفوظة.'
        }
    };

    // Portfolio Carousel
    $('.portfolio-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        smartSpeed: 800,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

    // Smooth scrolling for navigation links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 80
            }, 100);

            // Close mobile menu if open
            $('.navbar-collapse').collapse('hide');
        }
    });

    // Navbar scroll effect
    let lastScroll = 0;
    $(window).on('scroll', function() {
        const currentScroll = $(this).scrollTop();

        if (currentScroll > 100) {
            $('#mainNav').addClass('scrolled');
        } else {
            $('#mainNav').removeClass('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Language Toggle
    $('#langToggle, #langToggleMobile').on('click', function() {
        currentLang = currentLang === 'en' ? 'ar' : 'en';
        updateLanguage();
    });

    function updateLanguage() {
        const html = $('html');
        const langText = $('#langText');

        if (currentLang === 'ar') {
            html.attr('lang', 'ar').attr('dir', 'rtl');
            langText.text('EN');

            // Update brand for Arabic
            $('.navbar-brand .brand-text').text('ضحى الخشيني');
            $('.footer-brand').text('ضحى محمد شحادة الخشيني');
        } else {
            html.attr('lang', 'en').attr('dir', 'ltr');
            langText.text('AR');

            // Update brand for English
            $('.navbar-brand .brand-text').text('Duha Al-Khashini');
            $('.footer-brand').text('Duha Al-Khashini');
        }

        // Update all elements with data attributes
        $('[data-en]').each(function() {
            const element = $(this);
            const enText = element.data('en');
            const arText = element.data('ar');

            if (currentLang === 'ar' && arText) {
                element.text(arText);
            } else if (enText) {
                element.text(enText);
            }
        });

        // Update both language toggle texts
        $('#langText, #langTextMobile').text(currentLang === 'ar' ? 'EN' : 'AR');

        // Initialize all carousels
        function initCarousels() {
            $('.bridal-carousel, .luxury-carousel, .blazer-carousel').owlCarousel({
                loop: true,
                margin: 30,
                nav: true,
                dots: true,
                rtl: currentLang === 'ar',
                autoplay: true,
                autoplayTimeout: 4000,
                autoplayHoverPause: true,
                smartSpeed: 800,
                navText: currentLang === 'ar' ?
                    ['<i class="fas fa-chevron-right"></i>', '<i class="fas fa-chevron-left"></i>'] :
                    ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
                responsive: {
                    0: { items: 1 },
                    768: { items: 2 },
                    992: { items: 3 },
                    1200: { items: 4 }
                }
            });
        }
        $('.bridal-carousel, .luxury-carousel, .blazer-carousel').trigger('destroy.owl.carousel');

        // Call it on page load
        initCarousels();
    }

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe experience cards
    $('.experience-card').each(function(index) {
        $(this).css({
            opacity: '0',
            transform: 'translateY(50px)',
            transition: `all 0.6s ease ${index * 0.1}s`
        });
        observer.observe(this);
    });

    // Loading animation for portfolio items
    $('.portfolio-item').each(function(index) {
        $(this).css({
            opacity: '0',
            transform: 'scale(0.8)',
            transition: `all 0.5s ease ${index * 0.05}s`
        });

        setTimeout(() => {
            $(this).css({
                opacity: '1',
                transform: 'scale(1)'
            });
        }, 100 + (index * 50));
    });

    // Add parallax effect to hero section
    $(window).on('scroll', function() {
        const scrolled = $(this).scrollTop();
        $('.hero-image').css('transform', `translateY(${scrolled * 0.5}px)`);
    });

    // Navbar active link
    $(window).on('scroll', function() {
        const scrollPos = $(window).scrollTop() + 100;

        $('.nav-link').each(function() {
            const currLink = $(this);
            const refElement = $(currLink.attr('href'));

            if (refElement.length && refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.nav-link').removeClass('active');
                currLink.addClass('active');
            }
        });
    });

    // Add hover effect for portfolio items
    $('.portfolio-item').on('mouseenter', function() {
        $(this).find('img').css('filter', 'brightness(0.7) saturate(1.3)');
    }).on('mouseleave', function() {
        $(this).find('img').css('filter', 'brightness(1) saturate(1)');
    });

    // Lazy loading images
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));

    // Preloader (optional)
    $(window).on('load', function() {
        $('body').addClass('loaded');
    });

    // Mobile menu close on click outside
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.navbar').length) {
            $('.navbar-collapse').collapse('hide');
        }
    });

    // Add smooth reveal animation for sections
    const sections = document.querySelectorAll('section');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15 });

    sections.forEach(section => sectionObserver.observe(section));

    // Performance optimization: Throttle scroll events
    let ticking = false;
    $(window).on('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                // Scroll-based animations here
                ticking = false;
            });
            ticking = true;
        }
    });
});