const bgImage = document.querySelector(".bg-image");
const bodyBg = document.querySelector('body');

const scrollWatcher = document.querySelector(".scroll-watcher")

const rightHeaderButton = document.querySelector(".right-header-btn")
const headerTop = document.querySelector(".header-top")
const lightModeIcon = document.querySelector(".js-light-mode")
const darkModeIcon = document.querySelector(".js-dark-mode")

const bgHeading = document.querySelector(".bg-heading")
const bgSubHeading = document.querySelector(".bg-sub-heading")

const firstHeading = document.querySelector(".first-heading")
const firstPara = document.querySelector(".first-para")
const cardsPara = document.querySelector(".cards-para")

const aboutSelfTitle = document.querySelector(".about-self-title")
const aboutSelfPara = document.querySelector(".about-self-para")
const aboutSelfPara2 = document.querySelector(".about-self-para-2")
const aboutSelfPara3 = document.querySelector(".about-self-para-3")

const footerContainer = document.querySelector(".footer-container") 
const footerLeft = document.querySelector(".footer-left") 
const footerRight = document.querySelector(".footer-right")

const footerRightLink = document.querySelector(".footer-right-link")
const footerRightLink2 = document.querySelector(".footer-right-link-2")
const footerRightLink3 = document.querySelector(".footer-right-link-3")
const footerRightLink4 = document.querySelector(".footer-right-link-4")

window.addEventListener("scroll", () => {
  updateBgImage();
})

function updateBgImage() {
  bgImage.style.opacity = 1 - window.pageYOffset / 900;
  bgImage.style.backgroundSize = 160 - window.pageYOffset / 12 + "%"
}
// The mode is light mode by default

function lightToDark() {
  headerTop.style.backgroundColor = "#11181f";
  rightHeaderButton.style.backgroundColor = "white";
  rightHeaderButton.style.color = "black";
  scrollWatcher.style.backgroundColor = "#374c61";

  bgHeading.style.color = "white";
  bgSubHeading.style.color = "#b0b0b0";
  bodyBg.style.backgroundColor = "black";

  firstHeading.style.color = "white";
  firstPara.style.color = "rgb(158, 157, 157)";
  cardsPara.style.color = "white";

  aboutSelfTitle.style.color = "white";
  aboutSelfPara.style.color = "rgb(163, 161, 161)";
  aboutSelfPara2.style.color = "rgb(163, 161, 161)";
  aboutSelfPara3.style.color = "rgb(163, 161, 161)";

  footerContainer.style.backgroundColor = "rgb(30, 29, 29)";
  footerContainer.style.boxShadow = "0 4px 8px rgba(255, 255, 255, .05), 0 4px 8px rgba(255, 255, 255, 0.75)";
  footerLeft.style.color = "rgb(196, 196, 196)";
  footerRight.style.color = "rgb(196, 196, 196)";

  footerRightLink.style.color = "rgb(196, 196, 196)";
  footerRightLink2.style.color = "rgb(196, 196, 196)";
  footerRightLink3.style.color = "rgb(196, 196, 196)";
  footerRightLink4.style.color = "rgb(196, 196, 196)";

  lightModeIcon.style.width = "0px";
  darkModeIcon.style.width = "80px";
}

darkToLight()

function darkToLight() {
  headerTop.style.backgroundColor = "aliceblue";
  rightHeaderButton.style.backgroundColor = "black";
  rightHeaderButton.style.color = "white";
  scrollWatcher.style.backgroundColor = "rgb(199, 226, 250)";

  bgHeading.style.color = "black";
  bgSubHeading.style.color = "rgb(83, 83, 83)";
  bodyBg.style.backgroundColor = "white";

  firstHeading.style.color = "black";
  firstPara.style.color = "rgb(112, 111, 111)";
  cardsPara.style.color = "black";
  
  aboutSelfTitle.style.color = "black";
  aboutSelfPara.style.color = "rgb(92, 91, 91)";
  aboutSelfPara2.style.color = "rgb(92, 91, 91)";
  aboutSelfPara3.style.color = "rgb(92, 91, 91)";

  footerContainer.style.backgroundColor = "rgb(230, 227, 227)";
  footerContainer.style.boxShadow = "0 4px 8px rgba(0, 0, 0, .05), 0 4px 8px rgba(0, 0, 0, 0.75)";
  footerLeft.style.color = "rgb(59, 59, 59)";
  footerRight.style.color = "rgb(59, 59, 59)";

  footerRightLink.style.color = "rgb(59, 59, 59)";
  footerRightLink2.style.color = "rgb(59, 59, 59)";
  footerRightLink3.style.color = "rgb(59, 59, 59)";
  footerRightLink4.style.color = "rgb(59, 59, 59)";

  lightModeIcon.style.width = "82px";
  darkModeIcon.style.width = "0px";
}

modeIcons()

function modeIcons() {
lightModeIcon.addEventListener("click", () => {
  lightToDark()
})

darkModeIcon.addEventListener('click', () => {
  darkToLight()
})
}