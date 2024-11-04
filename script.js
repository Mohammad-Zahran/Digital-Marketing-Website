// script.js

gsap.from('nav',{
duration: 1, y:'-100%', ease: 'power1.inOut' 
})

// Animate the navigation logo on page load
gsap.from('.nav-logo img', {
    delay: 1.5,
    duration: 1,
    scale: 0,
    opacity: 0,
    ease: 'back.out(1.7)',
});

// Animate navigation links on page load
gsap.from('.nav-links a', {
    delay: 2,
    duration: 1,
    y: -20,
    opacity: 0,
    stagger: 0.1, 
    ease: 'power1.out',
});


// Optional: Add a scroll animation for a section when it enters the viewport
const sections = document.querySelectorAll('section');

sections.forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: 'top bottom', // Start when the top of the section hits the bottom of the viewport
        },
        y: 100, // Animate from below
        opacity: 0,
        duration: 1,
        ease: 'power1.out',
    });
});
