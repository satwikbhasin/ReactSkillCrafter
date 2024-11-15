import axios from "axios";

export const retrieveProducts = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/products/retrieve/`
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
      .post(`${process.env.REACT_APP_BACKEND_URL}/products/insert/`, {
        productName: productName,
        productQuantity: productQuantity,
        productImage: "Not Supported",
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
      .put(`${process.env.REACT_APP_BACKEND_URL}/products/update/`, {
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
      .delete(`${process.env.REACT_APP_BACKEND_URL}/products/delete/${deletedId}`)
      .then((response) => {
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
