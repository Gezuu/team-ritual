const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
toggle?.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll(".nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

const reveal = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      reveal.unobserve(entry.target);
    }
  });
}, {threshold: .08});

document.querySelectorAll(".section, .player-card, .match-row, .media-tile, .recruit-box").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(18px)";
  el.style.transition = "opacity .65s ease, transform .65s ease";
  reveal.observe(el);
});
