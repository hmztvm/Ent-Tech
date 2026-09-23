const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

document.querySelectorAll(".faq-question").forEach(question => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const isOpen = answer.classList.contains("open");

    document.querySelectorAll(".faq-answer").forEach(item => item.classList.remove("open"));
    document.querySelectorAll(".faq-question span").forEach(item => item.textContent = "+");

    if (!isOpen) {
      answer.classList.add("open");
      question.querySelector("span").textContent = "−";
    }
  });
});

const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  header.style.boxShadow = window.scrollY > 20 ? "0 8px 30px rgba(0,0,0,.18)" : "none";
});
