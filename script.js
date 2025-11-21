document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburgerMenu");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeMenu = document.getElementById("closeMenu");

  hamburger.addEventListener("click", () => {
    mobileMenu.style.display = "block";
    document.body.style.overflow = "hidden"; // lås scrolling slik NRK gjør
  });

  closeMenu.addEventListener("click", () => {
    mobileMenu.style.display = "none";
    document.body.style.overflow = "auto";
  });
});
