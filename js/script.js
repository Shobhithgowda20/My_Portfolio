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

// =========================
// Back To Top Button
// =========================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        backToTop.style.display = "flex";
    } else {
        backToTop.style.display = "none";
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// =========================
// Typing Animation
// =========================

const typingText = document.getElementById("typing-text");

const words = [
    "MCA Student",
    "Aspiring Software Developer",
    "Python Learner",
    "Web Development Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {
        typingText.textContent = currentWord.substring(0, charIndex++);
    } else {
        typingText.textContent = currentWord.substring(0, charIndex--);
    }

    let speed = deleting ? 50 : 100;

    if (!deleting && charIndex === currentWord.length + 1) {
        deleting = true;
        speed = 1500;
    }

    if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

// =========================
// Active Navigation
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});