// Smooth scrolling for navigation with easing effect
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));

        // Smooth scroll with easing effect
        window.scrollTo({
            top: targetElement.offsetTop - 50, // Adjust to prevent header overlap
            behavior: 'smooth'
        });
    });
});

// Reveal elements on scroll
const revealElements = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 150; // Adjusts when the reveal happens

    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        // If the element is within the viewport, add the 'active' class
        if (elementTop < windowHeight - revealPoint) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);

// Trigger the scroll function on page load
revealOnScroll();

window.addEventListener('scroll', revealOnScroll);

// Trigger the scroll function on page load
revealOnScroll();
