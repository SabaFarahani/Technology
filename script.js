const menuBar = document.querySelector(".navbar-toggle");
const menuLinks = document.querySelector(".navbar-menu");

menuBar.addEventListener("click", () => {
  menuBar.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});


const barIcon = document.querySelector(".fa-bars");
const closeIcon = document.querySelector(".fa-xmark");

barIcon.addEventListener("click", () => {
  if (closeIcon.classList.contains("fa-solid")) {
    barIcon.classList.toggle("active");
    closeIcon.classList.toggle("active");
  }
});

closeIcon.addEventListener("click", () => {
  if (barIcon.classList.contains("fa-solid")) {
    closeIcon.classList.toggle("active");
    barIcon.classList.toggle("active");
  }
});
