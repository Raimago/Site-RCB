/**
 * R & CB Advogados - Scrollytelling Controller
 * Uses GSAP + ScrollTrigger to create immersive narrative experiences.
 */

document.addEventListener("DOMContentLoaded", (event) => {
    // Register GSAP Plugin
    gsap.registerPlugin(ScrollTrigger);

    // Disable AOS on these sections to avoid conflict
    const heroElements = document.querySelectorAll('.hero-animate');
    heroElements.forEach(el => el.removeAttribute('data-aos'));

    initHeroScrollytelling();
    initAboutScrollytelling();
    initServicesScrollytelling();
    initFooterReveal();

    // NEW: Aggressive Global Animations
    initGlobalAnimations();
});

/**
 * GLOBAL AGGRESSIVE ANIMATOR
 * Target ALL standard elements for high-impact entrance.
 */
function initGlobalAnimations() {
    // 1. Headings: Aggressive Slide from Sides
    const headings = gsap.utils.toArray('section h2, section h3');
    headings.forEach((h, i) => {
        // Alternate directions: Even = Left, Odd = Right
        const xVal = i % 2 === 0 ? -150 : 150;

        gsap.from(h, {
            scrollTrigger: {
                trigger: h,
                start: "top 85%",
                toggleActions: "play none none reverse" // Replay on scroll up
            },
            x: xVal,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out" // Dramatic ease
        });
    });

    // 2. Paragraphs: Staggered Fade Up (Large Distance)
    const paragraphs = gsap.utils.toArray('section p');
    ScrollTrigger.batch(paragraphs, {
        onEnter: batch => gsap.from(batch, {
            y: 60, // Aggressive 60px lift
            opacity: 0,
            stagger: 0.1,
            duration: 1,
            ease: "power2.out"
        }),
        start: "top 90%"
    });

    // 3. Buttons: Elastic Pop-In
    const buttons = gsap.utils.toArray('.btn, .btn-primary, .btn-secondary');
    buttons.forEach(btn => {
        gsap.from(btn, {
            scrollTrigger: {
                trigger: btn,
                start: "top 90%",
                toggleActions: "play none none reverse"
            },
            scale: 0.5,
            opacity: 0,
            duration: 0.8,
            ease: "back.out(2)" // Elastic bounce
        });
    });

    // 4. Images: Zoom In Effect (Aggressive)
    const images = gsap.utils.toArray('section img:not(.hero-image img)');
    images.forEach(img => {
        gsap.from(img, {
            scrollTrigger: {
                trigger: img,
                start: "top 80%",
                end: "bottom 20%",
                scrub: 1 // Link to scroll
            },
            scale: 0.8, // Start smaller
            filter: "grayscale(100%)", // Start B&W
            ease: "none"
        });
        // Animate to full color/scale
        gsap.to(img, {
            scrollTrigger: {
                trigger: img,
                start: "top 80%",
                end: "center center",
                scrub: 1
            },
            scale: 1,
            filter: "grayscale(0%)"
        });
    });
}


/**
 * 1. Hero Section: Parallax & Pinning
 * The content moves slower than the scroll, creating depth.
 */
function initHeroScrollytelling() {
    if (window.innerWidth < 992) return; // Skip complex parallax on mobile

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });

    tl.to(".hero-image img", {
        yPercent: 30, // Image moves down slower than scroll
        ease: "none"
    }, 0);

    tl.to(".hero-content", {
        yPercent: 50, // Text moves down faster
        opacity: 0,
        ease: "none"
    }, 0);
}

/**
 * 2. About Section: Sticky Reveal
 * The image stays pinned while text scrolls, then image changes or reveals.
 */
function initAboutScrollytelling() {
    if (window.innerWidth < 992) return;

    // Pin the entire section but allow text to scroll? 
    // Better strategy: Pin the image column while the text column scrolls if text is longer.
    // Given the layout, let's create a reveal animation instead.

    const clipAnim = gsap.timeline({
        scrollTrigger: {
            trigger: ".about",
            start: "top center",
            end: "center center",
            scrub: 1
        }
    });

    // Image slides in from right with a mask effect
    clipAnim.from(".about-image img", {
        clipPath: "inset(0 100% 0 0)",
        duration: 1
    });

    // Text staggers in
    gsap.from(".about-text > *", {
        scrollTrigger: {
            trigger: ".about",
            start: "top 70%",
            toggleActions: "play none none reverse"
        },
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out"
    });
}

/**
 * 3. Services: Stacking Cards or Horizontal Move
 * Let's do a subtle "lift" effect updates as user scrolls.
 */
function initServicesScrollytelling() {
    const cards = gsap.utils.toArray('.service-luxury-card');

    // Staggered entrance
    ScrollTrigger.batch(cards, {
        onEnter: batch => gsap.to(batch, {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            overwrite: true,
            ease: "power3.out",
            duration: 1
        }),
        start: "top 85%",
    });

    // Parallax lift on scroll
    cards.forEach((card, i) => {
        gsap.to(card, {
            scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "top top",
                scrub: 1
            },
            y: -20, // Slight lift
            ease: "none"
        });
    });
}

/**
 * 4. Footer Reveal
 * Unmask the footer as if it was behind the content
 */
function initFooterReveal() {
    gsap.set("footer", { yPercent: 0, opacity: 1 }); // Reset for safety

    // Simple parallax unmask
    gsap.from("footer .container", {
        y: 50,
        opacity: 0,
        scrollTrigger: {
            trigger: "footer",
            start: "top 90%",
            end: "bottom bottom",
            scrub: 1
        }
    });
}
