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

///////////////////////////////////////
// Reveal sections

// section.classList.remove("section--hidden");

const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer?.unobserve(entry.target);
};

const obsOptions = {
  root: document.querySelector("#scrollArea"),
  threshold: [0, 0.2],
};

const sectionObserver = new IntersectionObserver(revealSection, obsOptions);

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
