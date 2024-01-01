let darkModeIcon = document.querySelector("header .mode i");
let stylesheet = document.getElementsByTagName("link")[0];
let navIcon = document.querySelector("header .nav-icon");
let sideNav = document.querySelector(".side-nav");
let hideIcon = document.querySelector(".hide i");
let waveImages = document.querySelectorAll(".chef-cards img:last-of-type");
let navLinks = document.querySelectorAll("nav ul li");

let isDarkMode = false;

darkModeIcon.addEventListener("click", () => {
  isDarkMode = !isDarkMode;

  if (isDarkMode) {
    stylesheet.href = "./css/dark-mode.css";
    darkModeIcon.classList.replace("fa-moon", "fa-sun");
    for (let i = 0; i < waveImages.length; i++) {
      waveImages[i].src = "./imgs/wave.svg";
    }
  } else {
    stylesheet.href = "./css/style.css";
    darkModeIcon.classList.replace("fa-sun", "fa-moon");
    for (let i = 0; i < waveImages.length; i++) {
      waveImages[i].src = "./imgs/wave2.svg";
    }
  }
});

navIcon.addEventListener("click", () => {
  sideNav.style.display = "block";
  sideNav.style.right = "0";
  sideNav.style.position = "fixed";
  console.log(89);
});

hideIcon.addEventListener("click", () => {
  sideNav.style.display = "none";
});


for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", () => {
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].classList.remove("active");
    }
    navLinks[i].classList.add("active");
  });
}