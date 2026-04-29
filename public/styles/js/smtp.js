emailjs.init('Dvrt-brHBze_odX-J');

document.querySelector('.newsletter-section .btn-primary').addEventListener('click', function () {
    const btn = this;
    const email = document.querySelector('.newsletter-section input[type="email"]').value.trim();

    if (!email) {
        Swal.fire({
            icon: 'warning',
            title: 'Hold on!',
            text: 'Please enter your email first.',
            confirmButtonColor: 'var(--primary-color)',
            background: '#1a1a2e',
            color: '#ffffff'
        });
        return;
    }

    // Loading state
    btn.disabled = true;
    btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span> Sending...';

    emailjs.send('service_hy068dl', 'template_d8o1t0z', { from_email: email })
        .then(() => {
            btn.disabled = false;
            btn.innerHTML = '<i class="fas fa-paper-plane me-2"></i> <span data-translate="subscribe">Send</span>';
            document.querySelector('.newsletter-section input[type="email"]').value = '';

            Swal.fire({
                icon: 'success',
                title: 'Thank You (:',
                text: 'I\'ll get back to you as soon as possible.',
                confirmButtonColor: 'var(--primary-color)',
                background: '#1a1a2e',
                color: '#ffffff',
                customClass: {
                    popup: 'swal-dark'
                }
            });
        })
        .catch(() => {
            btn.disabled = false;
            btn.innerHTML = '<i class="fas fa-paper-plane me-2"></i> <span data-translate="subscribe">Send</span>';

            Swal.fire({
                icon: 'error',
                title: 'Something went wrong',
                text: 'Please reach me out via: samyjoe01011000@gmail.com.',
                confirmButtonColor: 'var(--primary-color)',
                background: '#1a1a2e',
                color: '#ffffff'
            });
        });
});