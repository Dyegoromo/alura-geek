const dataCards = () =>
  fetch("http://localhost:3000/card").then((response) => response.json());

const createProduct = (cat, img, name, price) => {
  return fetch("http://localhost:3000/card", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ cat, img, name, price }),
  });
};

export const productServices = {
  dataCards,
  createProduct,
};
