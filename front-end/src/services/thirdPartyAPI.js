export const getProducts = async () =>
  await fetch("https://fakestoreapi.com/products/").then((response) => {
    return response.json();
  });
