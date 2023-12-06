// hamburger menu click
const burgerMenu = document.querySelector(".thehamburger");
const navMenu = document.querySelector(".nav-container");
burgerMenu.addEventListener("click", function (event) {
  navMenu.classList.toggle("hidden");
});
const heartShow = document.querySelectorAll(".heart");
heartShow.forEach(selectHeart);
function selectHeart(show) {
  show.addEventListener("click", function (event) {
    this.classList.toggle("red-color");
  });
}
