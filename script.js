// SLIDER FUNCTIONALITY
const slider = document.getElementById("productSlider");
let scrollAmount = 0;
const scrollStep = 320; // adjust based on card width + gap

document.querySelector(".next").addEventListener("click", () => {
  scrollAmount += scrollStep;
  if (scrollAmount >= slider.scrollWidth) scrollAmount = 0;
  slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
});

document.querySelector(".prev").addEventListener("click", () => {
  scrollAmount -= scrollStep;
  if (scrollAmount < 0) scrollAmount = slider.scrollWidth;
  slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
});

// SCROLL ANIMATION
const scrollElements = document.querySelectorAll(".animate-on-scroll");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        entry.target.classList.add("bounce");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

scrollElements.forEach(el => observer.observe(el));
