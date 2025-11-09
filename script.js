const menu = document.querySelector(".nav ul");
const toggle = document.querySelector(".menue_toggle");
toggle.addEventListener("click", () => {
menu.style.display = menu.style.display === "flex" ? "none" : "flex";
});
