document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       Navbar Scroll Effect
       ========================================= */
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    /* =========================================
       Scroll Reveal Animation
       ========================================= */
    const revealElements = document.querySelectorAll('.reveal');

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                // Optional: Stop observing once revealed
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    /* =========================================
       Parallax Effect for Hero
       ========================================= */
    // Note: Most of the parallax is handled via CSS (background-attachment: fixed)
    // Optional JS subtle parallax logic could be added here, but CSS is smoother.
    const heroContent = document.querySelector('.hero-content');

    window.addEventListener('scroll', () => {
        let scrollPos = window.scrollY;
        // Move content slightly upwards when scrolling down for extra depth
        if (heroContent && scrollPos < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrollPos * 0.3}px)`;
            heroContent.style.opacity = 1 - (scrollPos / 800);
        }
    });

    /* =========================================
       Mobile Menu Toggle (Basic)
       ========================================= */
    const menuToggle = document.querySelector('.menu-toggle');
    // Implement standard toggle if needed, or leave it handling for expansions
    // Placeholder interaction
    menuToggle.addEventListener('click', () => {
        alert('Menu Mobile - Funcionalidade de expansão seria aqui!');
    });
});
