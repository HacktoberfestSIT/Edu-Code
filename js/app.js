// let menuBtn = document.querySelector('#menuBtn');
// let sideNav = document.querySelector('#sideNav');

// sideNav.style.right = "-250px";
// menuBtn.addEventListener(onclick, () => {
//     if(sideNav.style.right == "-250px"){
//         sideNav.style.right = "0";
//     } else {
//         sideNav.style.right = "-250px";
//     }
// })

let menuBtn = document.getElementById("menuBtn");
let sideNav = document.getElementById("sideNav");
const mobileNav = document.querySelector(".links");
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector("nav");


hamburger.addEventListener("click", function () {
  mobileNav.classList.toggle("active");
  hamburger.classList.toggle("is-active");
});

var scroll = new SmoothScroll('a[href*="#"]',{
  speed: 1000,
  speedAsDuration: true
});

console.log("Hello World");