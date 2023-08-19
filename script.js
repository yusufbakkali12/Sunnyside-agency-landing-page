let openMenu = document.getElementById("open-menu");
let closeMenu = document.getElementById("close-menu");
let mobileNav = document.querySelector(".mobile-nav");

// MOBILE NAV //

openMenu.addEventListener("click", () => {
  openMenu.style.display = "none";
  closeMenu.style.display = "flex";
  mobileNav.style.display = "flex";
  mobileNav.style.animation =
    "fade-in 1s cubic-bezier(0.39, 0.575, 0.565, 1) both";
});

closeMenu.addEventListener("click", () => {
  openMenu.style.display = "flex";
  closeMenu.style.display = "none";
  mobileNav.style.animation =
    "fade-out-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
});

// MOBILE NAV //
