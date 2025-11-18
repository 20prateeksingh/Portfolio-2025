// Image Comparison Slider
document.querySelectorAll(".image-comparison").forEach(comparison => {
  const slider = comparison.querySelector(".slider");
  const beforeImage = comparison.querySelector(".before-image");
  const sliderLine = comparison.querySelector(".slider-line");
  const sliderIcon = comparison.querySelector(".slider-icon");

  slider.addEventListener("input", e => {
    const value = e.target.value + "%";
    beforeImage.style.width = value;
    sliderLine.style.left = value;
    sliderIcon.style.left = value;
  });
});

// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement;

themeToggle.addEventListener("click", () => {
  const isLight = root.getAttribute("data-theme") === "light";
  root.setAttribute("data-theme", isLight ? "dark" : "light");

  document.body.style.backgroundColor = isLight ? "#121212" : "#FAFAFA";
  document.body.style.color = isLight ? "#FAFAFA" : "#121212";
});
