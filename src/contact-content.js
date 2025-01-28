const content = document.querySelector("div#content");
const heading = document.createElement("h1");
const contactContainer = document.createElement("div");
contactContainer.setAttribute("id", "contact-container");

const cards = [
  {
    title: "Phone",
    info: "(770) 781-9595",
  },
  {
    title: "Address",
    info: "530 Lake Center Pkwy D Cumming, GA 30040 ",
  },
  {
    title: "Hours",
    info: "Sunday-Saturday: 11:00AM-9:00PM",
  },
];

function createCard(title, info) {
  const card = document.createElement("div");
  card.setAttribute("class", "card");

  const cardTitle = document.createElement("p");
  cardTitle.setAttribute("class", "card-title");

  const cardInfo = document.createElement("p");
  cardInfo.setAttribute("class", "card-info");

  cardTitle.textContent = title;
  cardInfo.textContent = info;

  card.appendChild(cardTitle);
  card.appendChild(cardInfo);

  return card;
}

function contactContent() {
  content.replaceChildren();
  contactContainer.replaceChildren();
  heading.textContent = "Contact Information";

  cards.forEach((item) => {
    const card = createCard(item.title, item.info);
    contactContainer.appendChild(card);
  });

  content.appendChild(heading);
  content.appendChild(contactContainer);
}

export default contactContent;
