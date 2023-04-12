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

const productDetail = (id) => {
  return fetch(`http://localhost:3000/card/${id}`).then((response) =>
    response.json()
  );
};

const updateProducts = (cat, img, name, price, id) => {
  return fetch(`http://localhost:3000/card/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ cat, img, name, price }),
  })
    .then((response) => response)
    .catch((err) => console.log(err));
};

export const productServices = {
  dataCards,
  createProduct,
  deleteProduct,
  productDetail,
  updateProducts,
};
