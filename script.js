// script.js

document.addEventListener("DOMContentLoaded", function () {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply observer to elements with fade-in and slide-up classes
    const fadeElements = document.querySelectorAll(".fade-in, .slide-up");
    fadeElements.forEach(el => observer.observe(el));
});
