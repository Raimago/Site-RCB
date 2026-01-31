/**
 * R & CB Advogados - Magnetic Buttons
 * Creates an organic "attraction" effect for primary CTA buttons.
 * Inspired by Apple's interactive elements.
 */

document.addEventListener("DOMContentLoaded", () => {
    initMagneticButtons();
});

function initMagneticButtons() {
    // DISABLED: Magnetic effect removed as part of cleanup
    return;

    // Only enable on desktop/pointer devices for performance and UX
    if (window.innerWidth < 992 || window.matchMedia("(hover: none)").matches) return;

    const magneticElements = document.querySelectorAll('.btn-primary, .btn-secondary, .logo');

    magneticElements.forEach(el => {
        el.addEventListener('mousemove', function (e) {
            const rect = el.getBoundingClientRect();
            const posX = e.clientX - rect.left - rect.width / 2;
            const posY = e.clientY - rect.top - rect.height / 2;

            // Magnetic strength (how far it moves)
            const strength = 0.35;

            gsap.to(el, {
                x: posX * strength,
                y: posY * strength,
                scale: 1.05,
                duration: 0.5,
                ease: "power2.out",
                overwrite: true
            });
        });

        el.addEventListener('mouseleave', function () {
            gsap.to(el, {
                x: 0,
                y: 0,
                scale: 1,
                duration: 0.9,
                ease: "elastic.out(1, 0.3)", // Organic spring back
                overwrite: true
            });
        });
    });
}
