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
let mobileBtn = document.getElementById("mobileBtn")

mobileBtn.addEventListener("click", function () {
  mobileBtn.classList.toggle("active");
});

sideNav.style.right = "-250px";
menuBtn.onclick = () => {
  if (sideNav.style.right == "-250px") {
    sideNav.style.right = "0";
  } else {
    sideNav.style.right = "-250px";
  }
}

var scroll = new SmoothScroll('a[href*="#"]',{
  speed: 1000,
  speedAsDuration: true
});