function navMenu() {
  document.getElementById("header").classList.toggle("auto");
  document.getElementById("hamburgerMenu").classList.toggle("change");
  document.getElementById("menu").classList.toggle("show");
}

function resetNavigation() {
  document.getElementById("menu").classList.remove("show");
}
