/* ==========================================================
 * Portfolio · Paula Fernández Cañas
 * Pequeño bundle de mejoras progresivas. El sitio es
 * 100% funcional sin JS — esto solo añade animaciones
 * y el sticky header con borde al hacer scroll.
 * ========================================================== */

(function () {
    'use strict';

    /* ----------------------------------------------------------
     * 1. Sticky header con borde inferior al hacer scroll
     * ---------------------------------------------------------- */
    const header = document.querySelector('.header');
    if (header) {
        const onScroll = () => {
            if (window.scrollY > 8) {
                header.classList.add('is-scrolled');
            } else {
                header.classList.remove('is-scrolled');
            }
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
    }

    /* ----------------------------------------------------------
     * 2. Smooth scroll para enlaces internos (#contact, etc.)
     *    Como fallback por si scroll-behavior CSS no está
     * ---------------------------------------------------------- */
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.length <= 1) return;
            const target = document.querySelector(href);
            if (!target) return;
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Mover foco para accesibilidad
            target.setAttribute('tabindex', '-1');
            target.focus({ preventScroll: true });
        });
    });

    /* ----------------------------------------------------------
     * 3. Fade-in al entrar en el viewport con IntersectionObserver
     *    El contenido es VISIBLE por defecto. La animación
     *    solo se aplica si JS está disponible y el usuario no
     *    ha pedido reduce-motion.
     * ---------------------------------------------------------- */
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion && 'IntersectionObserver' in window) {
        const targets = document.querySelectorAll('[data-animate]');
        targets.forEach((el) => el.classList.add('animate-on-scroll'));

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
        );

        targets.forEach((el) => observer.observe(el));
    }

    /* ----------------------------------------------------------
     * 4. Año dinámico en el footer
     * ---------------------------------------------------------- */
    const yearEl = document.querySelector('[data-current-year]');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
})();
