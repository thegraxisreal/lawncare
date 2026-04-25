const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index * 45, 180)}ms`;
  observer.observe(item);
});

const header = document.querySelector(".site-header");
const quoteForm = document.querySelector("#quote-form");

window.addEventListener(
  "scroll",
  () => {
    header.style.background =
      window.scrollY > 28
        ? "rgba(12, 15, 10, 0.92)"
        : "linear-gradient(to bottom, rgba(10, 14, 8, 0.8), rgba(10, 14, 8, 0))";
  },
  { passive: true }
);
