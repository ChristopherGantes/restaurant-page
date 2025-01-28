import "./styles.css";
import tacoMexicoLogoImage from "./tm-logo.png";
import homeContent from "./home-content";
import menuContent from "./menu-content";
import contactContent from "./contact-content";

console.log("I'm alive and running...");

const logoDiv = document.querySelector("#logo");
const logoImage = document.createElement("img");
logoImage.src = tacoMexicoLogoImage;

logoDiv.appendChild(logoImage);

const homeButton = document.querySelector("#home-button");
homeButton.addEventListener("click", homeContent);

const menuButton = document.querySelector("#menu-button");
menuButton.addEventListener("click", menuContent);

const contactButton = document.querySelector("#contact-button");
contactButton.addEventListener("click", contactContent);
