let cardsApp = document.querySelector(".cards-app");
let mainBackgroundImage = document
  .querySelector(".main-background")
  .querySelector(".top");
let closeIcon = document.querySelector(".close-icon");

function toggleCardApp() {
  if (cardsApp.classList.contains("invisible")) {
    cardsApp.classList.remove("invisible");
    closeIcon.classList.remove("invisible");
    mainBackgroundImage.style.filter = "blur(10px)";
  } else {
    cardsApp.classList.add("invisible");
    closeIcon.classList.add("invisible");
    mainBackgroundImage.style.filter = "blur(0px)";
  }
}

if ((cardsApp.style.display = "flex")) {
  cardsApp.classList.add("visible");
}

function hideCardApp() {
  closeIcon.classList.add("invisible");
  cardsApp.classList.add("invisible");
  mainBackgroundImage.style.filter = "blur(0px)";
}
