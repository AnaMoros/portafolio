// open and close the side navigation when resizing the device
const smallNavBar = window.matchMedia("(min-width: 600px)");
const openMenuBtn = document.getElementById("open-menu");
const closeMenuBtn = document.getElementById("close-menu");
const sideNav = document.getElementById("sidenav");
smallNavBar.addEventListener("change", handleDeviceChange);

function handleDeviceChange(e) {
  if (e.matches) {
    sideNav.classList.add("big-visibility");
    sideNav.classList.remove("ani-open-from-left");
  } else {
    sideNav.classList.add("no-ani");
    sideNav.classList.remove("big-visibility");
  }
}
openMenuBtn.addEventListener("click", () => {
  sideNav.classList.remove("no-ani");
  sideNav.classList.add("ani-open-from-left");
});

closeMenuBtn.addEventListener("click", () => {
  sideNav.classList.remove("ani-open-from-left");
});

//run initial size check
handleDeviceChange(smallNavBar);
