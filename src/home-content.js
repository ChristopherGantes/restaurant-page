import tacoMexicoImage from "./taco-mexico-exterior.jpg";

const content = document.querySelector("div#content");
const heading = document.createElement("h1");
const body = document.createElement("div");
body.setAttribute("id","main-content-body");

const description1 = document.createElement("p");
description1.setAttribute("id","spanish");
const description2 = document.createElement("p");
description2.setAttribute("id","english");
const image = document.createElement("img");

function homeContent() {
  content.replaceChildren();
  heading.textContent = "About";
  image.src = tacoMexicoImage;
  description1.textContent =
    "Taco México es un restaurante mexicano donde ofrecemos a nuestros clientes un lugar muy agradable y cómodo para disfrutar de la auténtica comida mexicana.";
  description2.textContent =
    "Taco México is a Mexican restaurant offering our customers a comfortable place to enjoy authentic Mexican cuisine.";

  content.appendChild(heading);
  content.appendChild(heading);
  content.appendChild(body);
  body.appendChild(image);
  body.appendChild(description1);
  body.appendChild(description2);
}

export default homeContent;
