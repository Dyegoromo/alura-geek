import { productServices } from "../service/client-service.js";

const $form = document.querySelector("[data-form]"),
  d = document;

const getInfo = async () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  if (id == null) {
    alert("Id not found");
  }

  const $cat = d.querySelector(".category"),
    $img = d.getElementById("img").value,
    $name = d.querySelector(".name"),
    $price = d.querySelector(".price");

  try {
    const card = await productServices.productDetail(id);
    if (card.cat && card.name && card.price) {
      $cat.value = card.cat;
      $name.value = card.name;
      $price.value = card.price;
    } else {
      throw new Error();
    }
  } catch (error) {
    alert(error);
  }
};

getInfo();

$form.addEventListener("submit", (e) => {
  e.preventDefault();

  const $cat = d.querySelector(".category").value,
    imgFakePath = d.getElementById("img").value,
    $name = d.querySelector(".name").value,
    $price = d.querySelector(".price").value,
    $img = `assets/${imgFakePath.slice(12, imgFakePath.lenght)}`;

  const url = new URL(window.location);
  const id = url.searchParams.get("id");
  productServices.updateProducts($cat, $img, $name, $price, id).then(() => {
    window.location.href = "./index.html";
  });
});
