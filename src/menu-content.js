const content = document.querySelector("div#content");
const heading = document.createElement("h1");
const menuContainer = document.createElement("div");
menuContainer.setAttribute("id", "menu-container");

const menuList = [
  {
    name: "Burrito",
    description: "Flour tortilla filled with beans,  cheese...",
  },
  {
    name: "Nachos Supreme",
    description:
      "Beans,  beef,  or chicken and topperd with lettuce, sour cream,  guacamole, and pico",
  },
  {
    name: "Alambre",
    description:
      "Marinated steak or chicken along with chorizo, peppers, onions topped with mushroom and cheese with lettuce, tomato, sour cream, rice and beans on the side",
  },
  {
    name: "Chilaquiles Mexican (Spicy)",
    description:
      "Marinated steak or chicken along with chorizo, peppers, onions topped with mushroom and cheese with lettuce, tomato, sour cream, rice and beans on the side",
  },
  {
    name: "Pollo con Queso",
    description:
      "A bed of rice with grilled chicken and covered with queso dip and flour tortillas on the side",
  },
  {
    name: "Tacos Al Carbon",
    description:
      "Three flour tortillas filled with grilled steak or chicken, queso dip and pico de gallo, rice and beans on the side",
  },
  {
    name: "Flautas Gigantes",
    description:
      "Two deep-fry corn tortillas filled with shredded beef or chicken and covered with sour cream, lettuce, cheese, avocado and tomato and rice on the side",
  },
  {
    name: "Enchiladas Mexicana (Spicy)",
    description:
      "Three enchiladas chicken or beef covered with green salsa, cheese, lettuce, sour cream and guacamole, rice and beans on the side",
  },
  {
    name: "Chimichangas",
    description:
      "Two flour tortillas filled with steak or chicken and covered with queso dip, rice, lettuce, sour cream and guacamole on the side",
  },
  {
    name: "Carne Asada with Grilled Onions",
    description:
      "Seasoned sliced steak served with rice, beans and lettuce, sour cream, guacamole, flour tortillas and pico de gallo",
  },
  {
    name: "Burrito Verde (Spicy)",
    description:
      "Steak or chicken and covered with queso dip and green salsa and rice and beans on the side",
  },
  {
    name: "Burrito Especial",
    description:
      "Burrito wrap filled with chicken or steak, lettuce, cheese, rice and pico de Gallo, black beans and rice on the side",
  },
  {
    name: "Chimi Plate",
    description:
      "Flour tortilla filled with steak or chicken and covered with queso dip, black beans and rice on the side",
  },
];

function createMenuItem(name, description) {
  const menuItem = document.createElement("div");
  menuItem.setAttribute("class", "menu-item");

  const itemName = document.createElement("p");
  itemName.setAttribute("class", "menu-item-name");

  const itemDescription = document.createElement("p");
  itemDescription.setAttribute("class", "menu-item-desc");

  itemName.textContent = name;
  itemDescription.textContent = description;

  menuItem.appendChild(itemName);
  menuItem.appendChild(itemDescription);

  return menuItem;
}

function createMenu() {
  menuList.forEach((item) => {
    const menuItem = createMenuItem(item.name, item.description);
    menuContainer.appendChild(menuItem);
  });
}

function menuContent() {
  content.replaceChildren();
  menuContainer.replaceChildren();
  createMenu();
  heading.textContent = "Menu"
  content.appendChild(heading);
  content.appendChild(menuContainer);
}

export default menuContent;
