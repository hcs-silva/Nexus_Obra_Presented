const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 },
);

revealElements.forEach((el) => observer.observe(el));

const counters = document.querySelectorAll("[data-count]");

counters.forEach((counter) => {
  const target = Number(counter.getAttribute("data-count") || 0);
  let value = 0;
  const step = Math.max(1, Math.floor(target / 40));

  const tick = () => {
    value += step;
    if (value >= target) {
      counter.textContent = String(target);
      return;
    }
    counter.textContent = String(value);
    requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
});
