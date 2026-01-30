// Initialize AOS (Animate On Scroll) - WITH ERROR HANDLING
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        easing: 'ease-in-out'
    });
} else {
    console.warn('AOS library not loaded');
}

// Navbar Scroll Effect
const navbar = document.getElementById('mainNav');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScrollTop = scrollTop;
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const navHeight = navbar.offsetHeight;
            const targetPosition = target.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        }
    });
});

// Menu Category Switching
const menuCatButtons = document.querySelectorAll('.menu-cat-btn');
const menuContents = document.querySelectorAll('.menu-category-content');

menuCatButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        menuCatButtons.forEach(btn => btn.classList.remove('active'));

        // Add active class to clicked button
        button.classList.add('active');

        // Get category
        const category = button.getAttribute('data-category');

        // Hide all menu contents
        menuContents.forEach(content => content.classList.remove('active'));

        // Show selected category
        const targetContent = document.getElementById(category);
        if (targetContent) {
            targetContent.classList.add('active');
            const offset = 140; // pixels to scroll UP (adjust as needed)
            const y =
                targetContent.getBoundingClientRect().top +
                window.pageYOffset -
                offset;

            window.scrollTo({
                top: y,
                behavior: 'smooth'
            });
        }
    });
});

// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');

if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Gallery Image Lightbox Effect (Basic)
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        if (img) {
            window.open(img.src, '_blank');
        }
    });
});

// Form Validation
const reservationForm = document.querySelector('.reservation-form form');

if (reservationForm) {
    reservationForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const name = reservationForm.querySelector('input[type="text"]').value;
        const phone = reservationForm.querySelector('input[type="tel"]').value;
        const email = reservationForm.querySelector('input[type="email"]').value;
        const guests = reservationForm.querySelector('input[type="number"]').value;
        const date = reservationForm.querySelector('input[type="date"]').value;
        const time = reservationForm.querySelector('input[type="time"]').value;
        const seating = reservationForm.querySelector('select').value;

        // Basic validation
        if (!name || !phone || !email || !guests || !date || !time || !seating) {
            alert('Please fill in all required fields.');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Phone validation (basic)
        const phoneRegex = /^\d{10,}$/;
        if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
            alert('Please enter a valid phone number.');
            return;
        }

        // Success message
        alert(`Thank you, ${name}! Your reservation for ${guests} guests on ${date} at ${time} has been received. We'll contact you at ${phone} to confirm.`);

        // Reset form
        reservationForm.reset();
    });
}

// Newsletter Form
const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const email = emailInput.value;

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Success message
        alert('Thank you for subscribing to our newsletter!');

        // Reset form
        newsletterForm.reset();
    });
}

// REMOVED PARALLAX EFFECT - IT WAS BREAKING THE LAYOUT

// Lazy Loading Images (Modern browsers support this natively)
const images = document.querySelectorAll('img[data-src]');

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Hover Effect Enhancement for Menu Cards
const menuCards = document.querySelectorAll('.menu-card');

menuCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Preloader (Optional)
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// Mobile Menu Close on Link Click
const navLinks = document.querySelectorAll('.nav-link');
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 992 && navbarCollapse && navbarCollapse.classList.contains('show')) {
            navbarToggler.click();
        }
    });
});

// Add active class to current section in navbar
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - 200) {
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

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('Stage El Nile Website Loaded Successfully');
    // console.log('All sections should now be visible');
});

// Console Art
console.log(`
╔═══════════════════════════════════════╗
║                                       ║
║         STAGE EL NILE CAFE            ║
║    Where The Nile Meets Luxury        ║
║                                       ║
║  Location: 109 Nile St, Dokki, Giza  ║
║  Phone: 010 16030207                  ║
║  Hours: Daily 8:00 AM - 2:00 AM       ║
║                                       ║
╚═══════════════════════════════════════╝
`);