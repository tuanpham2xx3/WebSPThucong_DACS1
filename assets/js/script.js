'use strict';



/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElems = [navOpenBtn, navCloseBtn];

for (let i = 0; i < navElems.length; i++) {
  navElems[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
  });
}



/**
 * search toggle
 */

const searchContainer = document.querySelector("[data-search-wrapper]");
const searchBtn = document.querySelector("[data-search-btn]");

searchBtn.addEventListener("click", function () {
  searchContainer.classList.toggle("active");
});



/**
 * whishlist & cart toggle
 */

const panelBtns = document.querySelectorAll("[data-panel-btn]");
const sidePanels = document.querySelectorAll("[data-side-panel]");

for (let i = 0; i < panelBtns.length; i++) {
  panelBtns[i].addEventListener("click", function () {

    let clickedElemDataValue = this.dataset.panelBtn;

    for (let i = 0; i < sidePanels.length; i++) {

      if (clickedElemDataValue === sidePanels[i].dataset.sidePanel) {
        sidePanels[i].classList.toggle("active");
      } else {
        sidePanels[i].classList.remove("active");
      }

    }

  });
}



/**
 * back to top
 */

const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  window.scrollY >= 100 ? backTopBtn.classList.add("active")
    : backTopBtn.classList.remove("active");
});



/**
 * product details page
 */

const productDisplay = document.querySelector("[data-product-display]");
const productThumbnails = document.querySelectorAll("[data-product-thumbnail]");

for (let i = 0; i < productThumbnails.length; i++) {
  productThumbnails[i].addEventListener("click", function () {
    productDisplay.src = this.src;
    productDisplay.classList.add("fade-anim");

    setTimeout(function () {
      productDisplay.classList.remove("fade-anim");
    }, 250);

  });
}

/**
 * List chuyển động gì đấy 
 */

const buttons = document.querySelectorAll(".filter-btn");
const lists = document.querySelectorAll(".grid-list");

buttons.forEach((button, index) => {
  button.addEventListener("click", function() {
    toggleListVisibility(index);
    toggleButtonActiveState(button);
  });
});

function toggleListVisibility(index) {
  lists.forEach((list, i) => {
    if (i === index) {
      list.style.display = "grid";
    } else {
      list.style.display = "none";
    }
  });
}

function toggleButtonActiveState(clickedButton) {
  buttons.forEach((button) => {
    if (button === clickedButton) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}


/**
 *Tele đến sản phẩm
 */


function Telesanpham() {
  const markedPosition = document.getElementById('Sanpham');
  const paragraphOffset = -160; // Giá trị âm để dịch lên một đoạn
  const newPosition = markedPosition.offsetTop + paragraphOffset;
  window.scrollTo({
    top: newPosition,
    behavior: 'smooth'
  });
}

function Telebaiviet() {
  const markedPosition = document.getElementById('Baiviet');
  const paragraphOffset = -160; // Giá trị âm để dịch lên một đoạn
  const newPosition = markedPosition.offsetTop + paragraphOffset;
  window.scrollTo({
    top: newPosition,
    behavior: 'smooth'
  });
}

function Telexuhuong() {
  const markedPosition = document.getElementById('Xuhuong');
  const paragraphOffset = -100; // Giá trị âm để dịch lên một đoạn
  const newPosition = markedPosition.offsetTop + paragraphOffset;
  window.scrollTo({
    top: newPosition,
    behavior: 'smooth'
  });
}


function Telelienhe() {
  const markedPosition = document.getElementById('Lienhe');
  const paragraphOffset = -100; // Giá trị âm để dịch lên một đoạn
  const newPosition = markedPosition.offsetTop + paragraphOffset;
  window.scrollTo({
    top: newPosition,
    behavior: 'smooth'
  });
}




function redirectToPage(){
  window.location.href= "dangnhap.html";
}




