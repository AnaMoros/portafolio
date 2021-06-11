// open and close the side navigation when resizing the device
const smallNavBar = window.matchMedia("(min-width: 600px)");
const openMenuBtn = document.getElementById("open-menu");
const closeMenuBtn = document.getElementById("close-menu");

smallNavBar.addEventListener("change", handleDeviceChange);

function handleDeviceChange(e) {
  if (e.matches) {
    console.log("bigger than 600px");
    document.getElementById("sidenav").style.display = "unset";
  } else {
    console.log("smaller than 600px");
    document.getElementById("sidenav").style.display = "none";
  }
}
openMenuBtn.addEventListener("click", () => {
  document.getElementById("sidenav").style.display = "block";
});

closeMenuBtn.addEventListener("click", () => {
  document.getElementById("sidenav").style.display = "none";
});

//run initial size check
handleDeviceChange(smallNavBar);
