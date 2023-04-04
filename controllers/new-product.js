import { productServices } from "../service/client-service.js";

const d = document;
const $form = d.querySelector("[data-form]");

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  const img = d.getElementById("img").value,
    name = d.querySelector(".name").value,
    price = d.querySelector(".price").value;

  console.log(img, name, price);

  productServices
    .createProduct(img, name, price)
    .then(() => {
      console.log("Done!");
    })
    .catch((err) => console.log(err));
});

/* ------------------- */

/* 
$categories = d.querySelector(".category").value,
$catSW = d.querySelector("[data-sw]".value),
$carConsoles = d.querySelector("[data-consoles]".value),
$CatOS = d.querySelector("[data-os]").value; */
