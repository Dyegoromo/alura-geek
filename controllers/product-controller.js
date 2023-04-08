import { productServices } from "../service/client-service.js";

const d = document;

const newCard = (img, name, price) => {
  const d = document,
    $containerCard = d.createElement("div"),
    cardContent = `
<img
              src='${img}'
              alt="Product image"
            />
            <h4>${name}</h4>
            <p>${price}</p>
            <a href="">See product</a>
            
`;
  $containerCard.innerHTML = cardContent;
  $containerCard.classList.add("div-card");

  return $containerCard;
};

const $cardSW = d.querySelector("[data-sw]"),
  $carConsoles = d.querySelector("[data-consoles]"),
  $CatOS = d.querySelector("[data-os]");

productServices
  .dataCards()
  .then((data) => {
    data.forEach(({ cat, img, name, price }) => {
      if (cat == "Star Wars") {
        const newProduct = newCard(img, name, price);
        console.log(newProduct);
        $cardSW.appendChild(newProduct);
      }
      if (cat == "Consols") {
        const newProduct = newCard(img, name, price);
        console.log(newProduct);
        $carConsoles.appendChild(newProduct);
      }
      if (cat == "Other stuff") {
        const newProduct = newCard(img, name, price);
        $CatOS.appendChild(newProduct);
      }
    });
  })
  .catch((err) => console.log("Something went wrong :("));
