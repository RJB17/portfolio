function navMenu() {
  document.getElementById("menu").classList.toggle("show");
  document.getElementById("content").classList.toggle("block");
}

function resetNavigation() {
  document.getElementById("menu").classList.remove("show");
  document.getElementById("content").classList.add("block");
}
