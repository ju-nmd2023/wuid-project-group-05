let num = 1;
const buttonElement = document.querySelectorAll(".cart-button");
const countIcon = document.querySelector(".no-of-items");
const displayNumber = document.querySelector(".display-count");

//buttonElement.forEach((cart-button) => {buttonElement.addEventListener("click", function (event) {

//displayNumber.innerText = num++;
//displayNumber.style.color = "#ffffff";
//});
//});
buttonElement.forEach(clickButton);
function clickButton(addToCart) {
  addToCart.addEventListener("click", function (event) {
    countIcon.classList.remove("hide");
    displayNumber.innerText = num++;
    displayNumber.style.color = "#ffffff";
  });
}
