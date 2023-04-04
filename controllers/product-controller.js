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
            <h4>'${name}'</h4>
            <p>'${price}'</p>
            <a href="">See product</a>
            
`;
  $containerCard.innerHTML = cardContent;
  console.log(
    "Esta es la img:",
    img,
    "Este es el nombre:",
    name,
    "Y este es el precio:",
    price
  );

  return $containerCard;
};

const $cardSW = d.querySelector("[data-sw]");

productServices
  .dataCards()
  .then((data) => {
    data.forEach(({ img, name, price }) => {
      const newProduct = newCard(img, name, price);
      console.log(newProduct);
      $cardSW.appendChild(newProduct);
    });
  })
  .catch((err) => console.log(err));

console.log(newProduct);
