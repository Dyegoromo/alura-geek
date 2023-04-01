const dataCards = () =>
  fetch("http://localhost:3000/card").then((response) => response.json());

export const productServices = {
  dataCards,
};
