// open and close of side navbar for mobile view

const openMenuBtn = document.getElementById("open-menu");
const closeMenuBtn = document.getElementById("close-menu");

openMenuBtn.addEventListener("click", () => {
  document.getElementById("sidenav").style.visibility = "visible";
});

closeMenuBtn.addEventListener("click", () => {
  document.getElementById("sidenav").style.visibility = "hidden";
});
