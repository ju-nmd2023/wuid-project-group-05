// hamburger menu click
const burgerMenu = document.querySelector(".thehamburger");
const navMenu = document.querySelector(".nav-container");
burgerMenu.addEventListener("click", function (event) {
  navMenu.classList.toggle("hidden");
});
// wishlist click (using the foreach method to iterate over collection of elements )
const heartIcon = document.querySelectorAll(".heart");
heartIcon.forEach((heart) => {
  heart.addEventListener("click", function (event) {
    this.classList.toggle("red-color");
  });
});
// showing text under heading
const arrowDown = document.querySelector(".arrow-down");
const arrowUp = document.querySelector(".arrow-up");
const productText = document.querySelector(".product-text");
arrowDown.addEventListener("click", function (event) {
  productText.classList.remove("hidden");
  arrowUp.classList.remove("hidden");
});
arrowUp.addEventListener("click", function (event) {
  productText.classList.add("hidden");
  arrowUp.classList.add("hidden");
});
