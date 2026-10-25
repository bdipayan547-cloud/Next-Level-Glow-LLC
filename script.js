// Next Level Glow LLC — site interactions

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", isOpen);
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// Smooth reveal animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Current year
document.getElementById("year").textContent = new Date().getFullYear();

// Quote form -> SMS
document.getElementById("quoteForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const vehicle = document.getElementById("vehicle").value.trim() || "Not specified";
  const service = document.getElementById("service").value;
  const details = document.getElementById("message").value.trim() || "No additional details.";

  const body =
    `Hi Next Level Glow LLC! My name is ${name}.\n` +
    `Phone: ${phone}\n` +
    `Vehicle: ${vehicle}\n` +
    `Service: ${service}\n` +
    `Details: ${details}`;

  window.location.href =
    `https://wa.me/18638129767?body=${encodeURIComponent(body)}`;
});
