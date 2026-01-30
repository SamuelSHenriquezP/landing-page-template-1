document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll(".reveal");

    const reveal = () => {
        const windowHeight = window.innerHeight;
        const triggerPoint = 150;

        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - triggerPoint) {
                el.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", reveal);
    // Initial check
    reveal();
});
