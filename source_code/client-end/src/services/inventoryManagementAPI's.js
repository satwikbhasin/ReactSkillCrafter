import axios from "axios";
import backendLink from "../assets/backendLink";

export const retrieveProducts = async () => {
  try {
    const response = await axios.get(
      `${backendLink}/products/retrieve/`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const addProduct = async (
  productName,
  productQuantity,
  productImage
) => {
  try {
    await axios
      .post(`${backendLink}/products/insert/`, {
        productName: productName,
        productQuantity: productQuantity,
        productImage: productImage,
      })
      .then((response) => {
        if (response.data.success) {
          alert("Product Added!");
        } else {
          alert("Couldn't add product.");
        }
      });
  } catch (error) {
    alert("Couldn't add product.");
  }
};

export const updateProduct = async (
  updatedId,
  updatedName,
  updatedQuantity
) => {
  try {
    await axios
      .put(`${backendLink}/products/update/`, {
        id: updatedId,
        updatedName: updatedName,
        updatedQuantity: updatedQuantity,
      })
      .then((response) => {
        if (response.data.success) {
          alert("Product Updated!");
        } else {
          alert("Couldn't update product.");
        }
      });
  } catch (error) {
    alert("Couldn't update product.");
  }
};

export const deleteProduct = async (deletedId) => {
  try {
    await axios
      .delete(`${backendLink}/products/delete/${deletedId}`)
      .then((response) => {
        console.log(response);
        if (response.data.success) {
          alert("Product Deleted!");
        } else {
          alert("Couldn't delete product.");
        }
      });
  } catch (error) {
    alert("Couldn't delete product.");
  }
};
