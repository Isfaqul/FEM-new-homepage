const menuBtn = document.querySelector("[data-menu-button-closed]");
const menu = document.querySelector("[data-menu]");

menuBtn.addEventListener("click", () => {
  menuBtn.toggleAttribute("data-menu-button-open");
  menu.toggleAttribute("data-menu-show");
});
