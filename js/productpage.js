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
const arrowDown = document.querySelectorAll(".arrow-down");
const productText = document.querySelectorAll(".product-text");
const arrowUp = document.querySelectorAll(".arrow-up");
arrowDown[0].addEventListener("click", function (event) {
  productText[0].classList.remove("hidden");
  arrowUp[0].classList.remove("hidden");
});
arrowDown[1].addEventListener("click", function (event) {
  productText[1].classList.remove("hidden");
  arrowUp[1].classList.remove("hidden");
});
arrowDown[2].addEventListener("click", function (event) {
  productText[2].classList.remove("hidden");
  arrowUp[2].classList.remove("hidden");
});

// hiding paragraph again with click
arrowUp[0].addEventListener("click", function (event) {
  productText[0].classList.add("hidden");
  arrowUp[0].classList.add("hidden");
});
arrowUp[1].addEventListener("click", function (event) {
  productText[1].classList.add("hidden");
  arrowUp[1].classList.add("hidden");
});
arrowUp[2].addEventListener("click", function (event) {
  productText[2].classList.add("hidden");
  arrowUp[2].classList.add("hidden");
});

// changing image
const colorOption = document.querySelectorAll(".dress-color");
const displayImage = document.querySelector(".single-image");

let imageSmall1 = colorOption[0];
let imageSmall2 = colorOption[1];
let color1 = colorOption[2];
let color2 = colorOption[3];
let color3 = colorOption[4];

color1.addEventListener("click", function (event) {
  displayImage.src = "images/blackcolor.webp";
  imageSmall1.src = "images/blackdress2.webp";
  imageSmall2.src = "images/blackdress3.webp";
});
color2.addEventListener("click", function (event) {
  displayImage.src = "images/black&white.webp";
  imageSmall1.src = "images/b&w2.webp";
  imageSmall2.src = "images/b&w3.webp";
});
color3.addEventListener("click", function (event) {
  displayImage.src = "images/Drapedwrapdress.jpg";
  imageSmall1.src = "images/drap2.webp";
  imageSmall2.src = "images/drape3.webp";
});

imageSmall1.addEventListener("mouseover", function (event) {
  console.log(displayImage);
  if (displayImage.src === color1.src) {
    displayImage.src = "images/blackdress2.webp";
    imageSmall2.addEventListener("mouseover", function (event) {
      displayImage.src = "images/blackdress3.webp";
    });

    // imageSmall1.addEventListener("mouseover", function (event) {
    //   displayImage.src = "images/blackdress2.webp";
    // });
  } else if (displayImage.src === color2.src) {
    displayImage.src = "images//b&w2.webp";
    imageSmall2.addEventListener("mouseover", function (event) {
      displayImage.src = "images/b&w3.webp";
    });

    // imageSmall1.addEventListener("mouseover", function (event) {
    //   displayImage.src = "images/b&w2.webp";
    // });
  } else if (displayImage.src === color3.src) {
    displayImage.src = "images/drap2.webp";
    imageSmall2.addEventListener("mouseover", function (event) {
      displayImage.src = "images/drape3.webp";
    });

    // imageSmall1.addEventListener("mouseover", function (event) {
    //   displayImage.src = "images/drap2.webp";
    // });
  }
});
// imageSmall2.addEventListener("mouseover", function (event) {
//   console.log(displayImage);
//   if (displayImage.src === color1.src) {
//     displayImage.src = "images/blackdress3.webp";
//     imageSmall1.addEventListener("mouseover", function (event) {
//       displayImage.src = "images/blackdress2.webp";
//     });
//     // imageSmall2.addEventListener("mouseover", function (event) {
//     //   displayImage.src = "images/blackdress3.webp";
//     // });
//   } else if (displayImage.src === color2.src) {
//     displayImage.src = "images//b&w3.webp";
//     imageSmall1.addEventListener("mouseover", function (event) {
//       displayImage.src = "images/b&w2.webp";
//     });
//     // imageSmall2.addEventListener("mouseover", function (event) {
//     //   displayImage.src = "images/b&w3.webp";
//     // });
//   } else if (displayImage.src === color3.src) {
//     displayImage.src = "images/drape3.webp";
//     imageSmall1.addEventListener("mouseover", function (event) {
//       displayImage.src = "images/drap2.webp";
//     });
//     // imageSmall2.addEventListener("mouseover", function (event) {
//     //   displayImage.src = "images/drape3.webp";
//     // });
//   }
// });

// adding item to basket
let num = 1;
const basketButton = document.querySelector(".basket-button");
const countIcon = document.querySelector(".no-of-items");
const displayNumber = document.querySelector(".display-count");
const popUpElement = document.querySelector(".pop-up");
const popUpButton = document.querySelector(".pop-up-button");

basketButton.addEventListener("click", function (event) {
  countIcon.classList.remove("hide");
  popUpElement.classList.remove("hidden");
  displayNumber.innerText = num++;
  displayNumber.style.color = "#ffffff";
});
popUpButton.addEventListener("click", function (event) {
  popUpElement.classList.add("hidden");
});
