const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".container_header");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("attivo");
  offScreenMenu.classList.toggle("attivo");
});