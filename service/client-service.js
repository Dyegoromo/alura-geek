const dataCards = () =>
  fetch("http://localhost:3000/card").then((response) => response.json());

/* dataCards().then((data) => {
  console.log(data[0].name);
}); */

const createProduct = (img, name, price) => {
  return fetch("http://localhost:3000/card", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ img, name, price }),
  });
};

export const productServices = {
  dataCards,
  createProduct,
};
