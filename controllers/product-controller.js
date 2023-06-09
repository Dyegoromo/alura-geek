import { clientServices } from "../../service/client-service.js";
import { productServices } from "../service/client-service.js";

const d = document;

const newCard = (img, name, price, id) => {
  const d = document,
    $containerCard = d.createElement("div"),
    cardContent = `
<img
              src='${img}'
              alt="Product image"
            />
            <button class="delete" id="${id}">Delete</button>
            <button class="edit" id="${id}">Edit</button>
            <h4>${name}</h4>
            <p>${price}</p>
            <a href="">See product</a>
            
`;
  $containerCard.innerHTML = cardContent;
  $containerCard.classList.add("div-card");

  const btnDelete = $containerCard.querySelector("button"),
    $btnEdit = $containerCard.querySelector(".edit");

  $btnEdit.addEventListener("click", (e) =>
    window.open(`edit_product.html?id=${id}`)
  );

  btnDelete.addEventListener("click", () => {
    const idBtn = btnDelete.id;
    productServices
      .deleteProduct(idBtn)
      .then((response) => {
        console.log(response);
        console.log(id);
      })
      .catch((err) => {
        console.log("Something went wrong");
      });
  });

  return $containerCard;
};

const $cardSW = d.querySelector("[data-sw]"),
  $carConsoles = d.querySelector("[data-consols]"),
  $CatOS = d.querySelector("[data-os]");

productServices
  .dataCards()
  .then((data) => {
    data.forEach(({ cat, img, name, price, id }) => {
      let newProduct = null;
      switch (cat) {
        case "Star Wars":
          newProduct = newCard(img, name, price, id);
          $cardSW.appendChild(newProduct);
          break;
        case "Consols":
          newProduct = newCard(img, name, price, id);
          $carConsoles.appendChild(newProduct);
          break;
        case "Other stuff":
          newProduct = newCard(img, name, price, id);
          $CatOS.appendChild(newProduct);
          break;
      }
    });
  })
  .catch((err) => console.log(err));
