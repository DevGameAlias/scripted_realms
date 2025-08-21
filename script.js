// Add "loaded" class once the hero image finishes loading
const heroImg = document.getElementById("hero-img");
if (heroImg) {
  heroImg.addEventListener("load", () => {
    heroImg.classList.add("loaded");
  });
}
