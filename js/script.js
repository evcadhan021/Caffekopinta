// Toggle Class Active
const navbarNav = document.querySelector(".navbar-nav");
document.getElementById("hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar side bar untuk menghilangkan nav

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
