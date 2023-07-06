var express = require("express");
var router = express.Router();

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://satwik:aneCtJ5dCUd5ofge@satwikbhasin-assignment.dqz7zzb.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewURLParser: true,
  }
);

const ProductModel = require("../models/Product.js");

router.post("/insert/", async (req, res) => {
  const productName = req.body.productName;
  const productQuantity = req.body.productQuantity;
  const productImage = req.body.productImage;

  const product = new ProductModel({
    productName: productName,
    productQuantity: productQuantity,
    productImage: productImage,
  });
  try {
    await product.save();
    res.send(((success = true), (message = "Item Added!")));
  } catch (err) {
    res.send(((success = false), (message = "Couldn't add product.")));
    console.log(err);
  }
});

router.get("/retrieve/", async (req, res) => {
  try {
    const products = await ProductModel.find({});
    res.send(products);
  } catch (err) {
    console.log(err);
  }
});

router.put("/update/", async (req, res) => {
  const newName = req.body.updatedName;
  const newQuantity = req.body.updatedQuantity;
  const id = req.body.id;

  try {
    await ProductModel.updateOne(
      { _id: id },
      {
        productName: newName,
        productQuantity: newQuantity,
      }
    );
  } catch (err) {
    console.log(err);
  }
});

router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;

  try {
    await ProductModel.deleteOne({ _id: id });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
