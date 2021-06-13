// open and close the side navigation when resizing the device
const smallNavBar = window.matchMedia("(min-width: 720px)");
const openMenuBtn = document.getElementById("open-menu");
const closeMenuBtn = document.getElementById("close-menu");
const sideNav = document.getElementById("sidenav");
const overlay = document.getElementById("overlay");
const navLinks = document.getElementsByClassName("nav-links");
smallNavBar.addEventListener("change", handleDeviceChange);

function handleDeviceChange(e) {
  if (e.matches) {
    sideNav.classList.add("big-visibility");
    sideNav.classList.remove("ani-open-from-left");
    overlay.classList.remove("overlay-open");
  } else {
    sideNav.classList.add("no-ani");
    sideNav.classList.remove("big-visibility");
  }
}
openMenuBtn.addEventListener("click", () => {
  sideNav.classList.remove("no-ani");
  sideNav.classList.add("ani-open-from-left");
  overlay.classList.add("overlay-open");
});
overlay.addEventListener("click", closeNav);
closeMenuBtn.addEventListener("click", closeNav);
for (link of navLinks) {
  link.addEventListener("click", closeNav);
}
function closeNav() {
  sideNav.classList.remove("ani-open-from-left");
  overlay.classList.remove("overlay-open");
}

//run initial size check
handleDeviceChange(smallNavBar);

// Wrap every letter in a span
const textWrapper = document.querySelector(".hero-animation");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);
