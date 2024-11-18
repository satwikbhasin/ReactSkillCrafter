const mongoose = require('../config/database');

const ProductSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productQuantity: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model("Product", ProductSchema, "inventory")
module.exports = Product;