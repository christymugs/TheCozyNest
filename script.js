document.addEventListener("DOMContentLoaded", function () {
    const heroTitle = document.querySelector(".fade-in");
    heroTitle.classList.add("visible");
});
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.slide-up');

    setTimeout(() => {
        elements.forEach(element => {
            element.classList.add('visible');
        });
    }, 100);
});
