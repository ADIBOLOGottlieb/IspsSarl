/**
 * Portfolio Graphiste - Gottlieb ADIBOLO
 */

document.addEventListener('DOMContentLoaded', function() {
    // Loader
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 1000);
    }

    // Navigation Mobile
    const navToggle = document.querySelector('.nav-toggle');
    const wrapper = document.querySelector('.wrapper');

    if (navToggle && wrapper) {
        navToggle.addEventListener('click', function() {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
            wrapper.classList.toggle('nav-active');
        });

        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                wrapper.classList.remove('nav-active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Smooth Scroll
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

    console.log('Portfolio graphiste chargé');
});
