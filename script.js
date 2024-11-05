// script.js

// Animate the navigation on page load
gsap.from('nav', {
    duration: 1,
    y: '-100%',
    ease: 'power1.inOut'
});

// Animate the navigation logo on page load
gsap.from('.nav-logo img', {
    delay: 1,
    duration: 1,
    scale: 0,
    opacity: 0,
    ease: 'back.out(1.7)',
});

// Animate the burger menu image
gsap.from('.burger-menu img', {
    delay: 1.5,
    duration: 1,
    scale: 0,
    opacity: 0,
    ease: 'back.out(1.7)',
    rotation: 720
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
    });
});

// Animate the hero section elements
gsap.from('.hero-section h1', {
    delay: 2.5,
    duration: 1,
    y: -50,
    opacity: 0,
    ease: 'power3.out',
});

gsap.from('.hero-section p', {
    delay: 3.5,
    duration: 1,
    y: -30,
    opacity: 0,
    ease: 'power3.out',
});

gsap.from('.cta-button', {
    delay: 4.5,
    duration: 1,
    scale: 2,
    opacity: 0,
    ease: 'back.out(1.7)',
});

// Expertise section animations
const expertiseSection = document.querySelector('.expertise-section');
const expertiseCards = document.querySelectorAll('.card-item');

// Create a timeline for the expertise cards animation
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: expertiseSection,
        start: 'top 90%', 
        end: 'bottom top', 
        scrub: true, 
    }
});

// Add animations for each card
expertiseCards.forEach((card, index) => {
    tl.from(card, {
        y: 50,
        opacity: 0,
        duration: 3,
        ease: 'power2.out',
        stagger: 0.1, 
    }, `-=${0.4 * index}`); 
});

// Select all reason cards
const reasonCards = document.querySelectorAll('.reason');

// Define the colors for hover effects
const hoverColor = 'var(--color-primary)'; // Color when hovered

// Add mouseenter and mouseleave events to each reason card
reasonCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        // Animate the card on hover
        gsap.to(card, {
            scale: 1.05, // Scale up
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Enhance shadow
            backgroundColor: hoverColor, // Change background color on hover
            duration: 0.3,
            ease: 'power1.out',
        });
    });

    card.addEventListener('mouseleave', () => {
        // Animate the card back to its original state
        gsap.to(card, {
            scale: 1, 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
            backgroundColor: 'var(--color-light-grey)', 
            duration: 0.3,
            ease: 'power1.out',
        });
    });
});


// Burger menu functionality
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
