/**
 * PALAK CHAVDA - PERSONAL PORTFOLIO JAVASCRIPT
 * Comprehensive script for dynamic behavior, validation, and animations.
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ----------------------------------------------------------------------
       1. Dynamic Configuration & Variables
       ---------------------------------------------------------------------- */
    // Change this variable if a specific Internship Portal repo URL becomes available
    const INTERNSHIP_PORTAL_GITHUB_URL = "https://github.com/palakchavda34-maker/Internship-Project-Palak";

    /* ----------------------------------------------------------------------
       2. Dynamic Copyright Year
       ---------------------------------------------------------------------- */
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    /* ----------------------------------------------------------------------
       3. Navbar Scroll Effect & Mobile Collapse Management
       ---------------------------------------------------------------------- */
    const mainNavbar = document.getElementById('mainNavbar');
    const navLinks = document.querySelectorAll('#navbarNav .nav-link');
    const navbarCollapse = document.getElementById('navbarNav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            mainNavbar.classList.add('scrolled');
        } else {
            mainNavbar.classList.remove('scrolled');
        }
    });

    // Close mobile collapse menu when a navigation item is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                if (bsCollapse) {
                    bsCollapse.hide();
                }
            }
        });
    });

    /* ----------------------------------------------------------------------
       4. Back-to-Top Button Functionality
       ---------------------------------------------------------------------- */
    const backToTopBtn = document.getElementById('backToTop');

    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('active');
            } else {
                backToTopBtn.classList.remove('active');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    /* ----------------------------------------------------------------------
       5. Contact Form Validation & Submission
       ---------------------------------------------------------------------- */
    const contactForm = document.getElementById('contactForm');
    const formAlert = document.getElementById('formAlert');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            e.stopPropagation();

            // Reset custom alert
            formAlert.classList.add('d-none');
            formAlert.className = 'alert d-none mb-4';

            if (!contactForm.checkValidity()) {
                contactForm.classList.add('was-validated');
                return;
            }

            // Successful client-side validation
            contactForm.classList.remove('was-validated');

            formAlert.className = 'alert alert-info border-0 rounded-4 shadow-sm text-white mb-4';
            formAlert.style.background = 'rgba(99, 102, 241, 0.2)';
            formAlert.style.border = '1px solid rgba(99, 102, 241, 0.4)';

            formAlert.innerHTML = `
                <div class="d-flex align-items-center gap-2">
                    <i class="fa-solid fa-circle-check text-success fs-5"></i>
                    <div>
                        <strong>Message Validated!</strong> Thank you! Your message has been validated. This demo form does not send messages because the portfolio has no backend.
                    </div>
                </div>
            `;
            formAlert.classList.remove('d-none');

            // Reset form inputs
            contactForm.reset();
        });
    }

    /* ----------------------------------------------------------------------
       6. Scroll Reveal Animations (Intersection Observer)
       ---------------------------------------------------------------------- */
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.glass-card, .section-header, .timeline-item');
    revealElements.forEach(el => {
        el.classList.add('reveal-init');
        revealObserver.observe(el);
    });
});
