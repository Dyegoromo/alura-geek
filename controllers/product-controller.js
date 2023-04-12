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
      if (cat == "Star Wars") {
        const newProduct = newCard(img, name, price, id);
        /* console.log(newProduct); */
        $cardSW.appendChild(newProduct);
      }
      if (cat == "Consols") {
        const newProduct = newCard(img, name, price, id);
        /* console.log(newProduct); */
        $carConsoles.appendChild(newProduct);
      }
      if (cat == "Other stuff") {
        const newProduct = newCard(img, name, price, id);
        $CatOS.appendChild(newProduct);
      }
    });
  })
  .catch((err) => console.log("Something went wrong :("));
