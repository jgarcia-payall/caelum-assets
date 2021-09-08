// 2 transform: translate(0, -1776px);
// 3 transform: translate(0, -889px);

// Elements
let slide1 = document.getElementById("desktop-one");
let imgOne = document.getElementById("img-one");
let contentOne = document.getElementById("content-one");

let slide2 = document.getElementById("desktop-two");
let imgTwo = document.getElementById("img-two");
let contentTwo = document.getElementById("content-two");

let slide3 = document.getElementById("desktop-three");
let imgThree = document.getElementById("img-three");
let contentThree = document.getElementById("content-three");

let slide4 = document.getElementById("desktop-four");
let imgFour = document.getElementById("img-four");
let contentFour = document.getElementById("content-four");

let carousel = document.getElementById("slider-desktop");

let counter = 1;

let btnUp = document.getElementById("arrow-up");
let btnDown = document.getElementById("arrow2");



btnUp.addEventListener("click", () => {
  if (counter > 1) {
    counter--;
  } else {
    console.log("Deseable");
  }

  if (counter == 1) {
    slide2.style.opacity = 0;

    carousel.scrollBy(0, -840);

    imgOne.classList.add("animate__fadeInDown");
    contentOne.classList.add("animate__fadeInUp");

    setTimeout(() => {
      slide1.style.opacity = 1;
    }, 500);

    setTimeout(() => {
      imgOne.classList.remove("animate__fadeInDown");
      contentOne.classList.remove("animate__fadeInUp");
    }, 1000);
  }

  if (counter == 2) {
    slide3.style.opacity = 0;
    carousel.scrollBy(0, -840);

    imgTwo.classList.add("animate__fadeInDown");
    contentTwo.classList.add("animate__fadeInUp");

    setTimeout(() => {
      slide2.style.opacity = 1;
    }, 500);

    setTimeout(() => {
      imgTwo.classList.remove("animate__fadeInDown");
      contentTwo.classList.remove("animate__fadeInUp");
    }, 1000);
  }



  if (counter == 3) {
    slide4.style.opacity = 0;
    carousel.scrollBy(0, -840);

    imgThree.classList.add("animate__fadeInDown");
    contentThree.classList.add("animate__fadeInUp");

    setTimeout(() => {
      slide3.style.opacity = 1;
    }, 500);

    setTimeout(() => {
      imgThree.classList.remove("animate__fadeInDown");
      contentThree.classList.remove("animate__fadeInUp");
    }, 1000);
  }


});

btnDown.addEventListener("click", () => {
  if (counter < 4) {
    counter++;
  } else {
    console.log("Deseable");
  }

  if (counter == 2) {
    slide1.style.opacity = 0;
    carousel.scrollBy(0, 840);
    imgTwo.classList.add("animate__fadeInDown");
    contentTwo.classList.add("animate__fadeInUp");

    setTimeout(() => {
      slide2.style.opacity = 1;

      console.log("Hellooo");
    }, 500);

    setTimeout(() => {
      imgTwo.classList.remove("animate__fadeInDown");
      contentTwo.classList.remove("animate__fadeInUp");
    }, 1000);
  }

  if (counter == 3) {
    carousel.scrollBy(0, 840);

    slide2.style.opacity = 0;

    imgThree.classList.add("animate__fadeInDown");
    contentThree.classList.add("animate__fadeInUp");

    setTimeout(() => {
      slide3.style.opacity = 1;
    }, 500);

    setTimeout(() => {
      imgThree.classList.remove("animate__fadeInDown");
      contentThree.classList.remove("animate__fadeInUp");
    }, 1000);
  }

  if (counter == 4) {
    carousel.scrollBy(0, 840);

    slide2.style.opacity = 0;

    imgFour.classList.add("animate__fadeInDown");
    contentFour.classList.add("animate__fadeInUp");

    setTimeout(() => {
      slide4.style.opacity = 1;
    }, 500);

    setTimeout(() => {
      imgFour.classList.remove("animate__fadeInDown");
      contentFour.classList.remove("animate__fadeInUp");
    }, 1000);
  }



});


