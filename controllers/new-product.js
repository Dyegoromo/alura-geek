import { productServices } from "../service/client-service.js";

const d = document;
const $form = d.querySelector("[data-form]");

$form.addEventListener("submit", (e) => {
  e.preventDefault();

  const cat = d.querySelector(".category").value,
    imgFakePath = d.getElementById("img").value,
    name = d.querySelector(".name").value,
    price = d.querySelector(".price").value;

  const img = `assets/${imgFakePath.slice(12, imgFakePath.lenght)}`;

  productServices
    .createProduct(cat, img, name, price)
    .then((response) => {
      console.log(response);
      window.location.href = "./index.html";
      /* console.log(cat, img, name, price); */
    })
    .catch((err) => console.log(err));
});
