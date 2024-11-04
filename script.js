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

gsap.from('.burger-menu img', {
    delay: 2,
    duration: 1,
    scale: 0,
    opacity: 0,
    ease: 'back.out(1.7)',
    rotation:720
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
            start: 'top bottom', 
        },
        y: 100, 
        opacity: 0,
        duration: 1,
        ease: 'power1.out',
        delay:3
    });
});

// Animate the hero section elements
gsap.from('.hero-section h1', {
    delay: 3.5,
    duration: 1,
    y: -50,
    opacity: 0,
    ease: 'power3.out',
});

gsap.from('.hero-section p', {
    delay: 4,
    duration: 1,
    y: -30,
    opacity: 0,
    ease: 'power3.out',
});

gsap.from('.cta-button', {
    delay: 4.2,
    duration: 1,
    scale: 2,
    opacity: 0,
    ease: 'back.out(1.7)',
});


const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    
    if (navLinks.classList.contains('open')) {
        gsap.fromTo(
            navLinks, 
            { y: 50, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 0.5, ease: 'power1.out' } 
        );
    } else {
        gsap.to(navLinks, { y: -50, opacity: 0, duration: 0.3, ease: 'power1.in' });
    }
});
