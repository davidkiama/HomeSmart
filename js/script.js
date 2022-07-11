const menuBtn = document.querySelector(".icon-menu");
const nav = document.querySelector(".nav");

let displayMenu = false;

menuBtn.addEventListener("click", function () {
  displayMenu = !displayMenu;

  if (displayMenu) {
    nav.classList.add("display_menu");
    menuBtn.src = "img/cancel.svg";
  }

  if (!displayMenu) {
    nav.classList.remove("display_menu");
    menuBtn.src = "img/menu-hamburger.svg";
  }
});
