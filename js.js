document.addEventListener("DOMContentLoaded", function () {
    const heroTitle = document.querySelector(".fade-in");
    if (heroTitle) heroTitle.classList.add("visible");

    const elements = document.querySelectorAll('.slide-up');
    setTimeout(() => {
        elements.forEach(element => {
            element.classList.add('visible');
        });
    }, 100); // Ensure this timing is appropriate
});
