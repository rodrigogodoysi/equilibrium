document.addEventListener('DOMContentLoaded', () => {

    // Header Scroll Effect
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Parallax Effect for Hero
    const parallaxBg = document.querySelector('.hero-parallax-bg');
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.scrollY;
                // Apply parallax only if we are relatively close to the top
                if (scrolled < window.innerHeight) {
                    parallaxBg.style.transform = `translateY(${scrolled * 0.4}px)`;
                }
                ticking = false;
            });
            ticking = true;
        }
    });

    // Scroll Reveal with Intersection Observer
    const revealElements = document.querySelectorAll('.section-reveal');

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // For Hero Section, trigger immediately
    setTimeout(() => {
        const hero = document.getElementById('hero');
        if (hero) hero.classList.add('active');
    }, 100);

});
