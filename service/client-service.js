const dataCards = () =>
  fetch("http://localhost:3000/card").then((response) => response.json());

const createProduct = (cat, img, name, price) => {
  return fetch("http://localhost:3000/card", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ cat, img, name, price, id: uuid.v4() }),
  });
};

const deleteProduct = (id) => {
  return fetch(`http://localhost:3000/card/${id}`, {
    method: "DELETE",
  });
};

export const productServices = {
  dataCards,
  createProduct,
  deleteProduct,
};
