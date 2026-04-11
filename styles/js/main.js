// Testimonial Carousel
$(document).ready(function(){
    const testimonialCarousel = $('.testimonial-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: { items: 1 },
            768: { items: 1 },
            992: { items: 1 }
        }
    });

    $('#testimonialPrev').click(function() {
        testimonialCarousel.trigger('prev.owl.carousel');
    });

    $('#testimonialNext').click(function() {
        testimonialCarousel.trigger('next.owl.carousel');
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.main-navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active Nav Link on Scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', function() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Animate on Scroll
const animateElements = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, {
    threshold: 0.1
});

animateElements.forEach(el => observer.observe(el));

// Language Switcher
document.getElementById('langSwitch').addEventListener('change', function(e) {
    const lang = e.target.value;
    const html = document.documentElement;

    if (lang === 'ar') {
        html.setAttribute('lang', 'ar');
        html.setAttribute('dir', 'rtl');
    } else {
        html.setAttribute('lang', 'en');
        html.setAttribute('dir', 'ltr');
    }

    translatePage(lang);
    localStorage.setItem('language', lang);
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Close offcanvas if open
            const offcanvas = bootstrap.Offcanvas.getInstance(document.querySelector('.offcanvas.show'));
            if (offcanvas) {
                offcanvas.hide();
            }
        }
    });
});

// Project Card Hover Effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function(e) {
        const overlay = this.querySelector('.project-overlay');
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Determine direction
        let direction = '';
        if (x < rect.width / 3) direction = 'left';
        else if (x > (rect.width * 2) / 3) direction = 'right';
        else if (y < rect.height / 2) direction = 'top';
        else direction = 'bottom';

        // Apply transform based on direction
        switch(direction) {
            case 'top':
                overlay.style.transform = 'translateY(-100%)';
                setTimeout(() => overlay.style.transform = 'translateY(0)', 10);
                break;
            case 'bottom':
                overlay.style.transform = 'translateY(100%)';
                setTimeout(() => overlay.style.transform = 'translateY(0)', 10);
                break;
            case 'left':
                overlay.style.transform = 'translateX(-100%)';
                setTimeout(() => overlay.style.transform = 'translateX(0)', 10);
                break;
            case 'right':
                overlay.style.transform = 'translateX(100%)';
                setTimeout(() => overlay.style.transform = 'translateX(0)', 10);
                break;
        }
    });

    card.addEventListener('mouseleave', function(e) {
        const overlay = this.querySelector('.project-overlay');
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Determine exit direction
        let direction = '';
        if (x < 0) direction = 'left';
        else if (x > rect.width) direction = 'right';
        else if (y < 0) direction = 'top';
        else direction = 'bottom';

        // Apply exit transform
        switch(direction) {
            case 'top':
                overlay.style.transform = 'translateY(-100%)';
                break;
            case 'bottom':
                overlay.style.transform = 'translateY(100%)';
                break;
            case 'left':
                overlay.style.transform = 'translateX(-100%)';
                break;
            case 'right':
                overlay.style.transform = 'translateX(100%)';
                break;
        }
    });
});

// Reset modal video on close
document.getElementById('videoModal').addEventListener('hidden.bs.modal', function () {
    const iframe = this.querySelector('iframe');
    iframe.src = iframe.src;
});

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.main-navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});