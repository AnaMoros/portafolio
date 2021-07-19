"use strict";
// open and close the side navigation when resizing the device
const navMinWidth = window.matchMedia("(min-width: 768px)");
const openMenuBtn = document.getElementById("open-menu");
const closeMenuBtn = document.getElementById("close-menu");
const mainNav = document.getElementById("main-nav");
const overlay = document.getElementById("overlay");
const navLinks = document.getElementsByClassName("nav-links");

navMinWidth.addEventListener("change", handleDeviceChange);

//run initial size check
handleDeviceChange(navMinWidth);

overlay.addEventListener("click", closeNav);
closeMenuBtn.addEventListener("click", closeNav);
for (let link of navLinks) {
  link.addEventListener("click", closeNav);
}

openMenuBtn.addEventListener("click", () => {
  mainNav.classList.remove("no-ani");
  mainNav.classList.add("ani-open-from-left");
  overlay.classList.add("overlay-open");
});

function handleDeviceChange(size) {
  if (size.matches) {
    mainNav.classList.add("visible");
    mainNav.classList.remove("ani-open-from-left", "sidenav");
    overlay.classList.remove("overlay-open");
  } else {
    mainNav.classList.add("no-ani", "sidenav");
    mainNav.classList.remove("visible");
  }
}

function closeNav() {
  mainNav.classList.remove("ani-open-from-left");
  overlay.classList.remove("overlay-open");
}

// Wrap every letter in a span
const textWrapper = document.querySelectorAll(".hero-animation");
for (let h2 of textWrapper) {
  h2.innerHTML = h2.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );
}
