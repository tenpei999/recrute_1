const input = "";
const main = "";
window.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".js-hamburger");
  const body = document.querySelector("body");
  const nav = document.querySelector(".p-nav");
  const navBody = document.querySelector(".p-nav__body");
  const navButton = document.querySelector(".p-nav__button");
  const buttonSquare = document.querySelector(".c-button-square");
  document.querySelector(".header-logo");
  const toggleMenu = () => {
    body.classList.toggle("is-open");
    nav.classList.toggle("is-open");
    navBody.classList.toggle("is-open");
    navButton.classList.toggle("is-open");
    buttonSquare.classList.toggle("is-open");
  };
  hamburger.addEventListener("click", toggleMenu);
  document.addEventListener("click", (e) => {
    if (body.classList.contains("is-open") && !hamburger.contains(e.target)) {
      toggleMenu();
    }
  });
});
function changeText() {
  console.log("hogegegegegerereEEELLYY");
}
document.addEventListener("DOMContentLoaded", changeText);
