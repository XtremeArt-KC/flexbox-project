const menu = document.getElementById("nav");
const button = document.getElementById("menu-btn");

button.addEventListener("click", (e) => {
  menu.classList.toggle("active");
});

// remove-menu
const links = document.getElementsByClassName("nav-link");

function linkAction() {
  const menu = document.getElementById("nav");
  menu.classList.remove("active");
}

links.forEach((link) => link.addEventListener("click", linkAction));
