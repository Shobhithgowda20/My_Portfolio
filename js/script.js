const menuButton = document.getElementById("menu-button");
const navigationLinks = document.getElementById("nav-links");
const links = document.querySelectorAll(".nav-links a");

menuButton.addEventListener("click", function () {
    navigationLinks.classList.toggle("show-menu");
});

links.forEach(function (link) {
    link.addEventListener("click", function () {
        navigationLinks.classList.remove("show-menu");
    });
});

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    alert("The contact form design is ready. We will connect it to email later.");
});

/* ---------------- Scroll Animation ---------------- */

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    revealElements.forEach(function (element) {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();