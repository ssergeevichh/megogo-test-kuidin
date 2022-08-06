export default function animateMenuDisplaying() {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("nav-links--active");
  });
}
