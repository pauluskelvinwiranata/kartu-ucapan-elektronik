const openButton = document.getElementById("openButton"),
  closeButton = document.getElementById("closeButton"),
  overlay = document.getElementById("overlay");

openButton.addEventListener("click", () => {
  overlay.style.display = "flex";
}),
  closeButton.addEventListener("click", () => {
    overlay.style.display = "none";
  });
