const menuBtn = document.querySelector(".icon-menu");
const nav = document.querySelector(".nav");

///////////////////////////////////////
// Sliding menu for small screens
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

///////////////////////////////////////
// Form inputs
const inputs = document.querySelectorAll("input");
const textAreas = document.querySelectorAll("textarea");
const labels = document.querySelectorAll("label");

const activeLabel = (field) => {
  // remove all ctive classes from labels
  labels.forEach((label) => label.classList.remove("active-label"));

  const inputName = field["name"];
  const label = document.querySelector(`[for=${inputName}]`);
  label.classList.add("active-label");
};

inputs.forEach((input) => {
  input.addEventListener("focus", function () {
    activeLabel(input);
  });
});

textAreas.forEach((textArea) => {
  textArea.addEventListener("focus", function () {
    activeLabel(textArea);
  });
});
