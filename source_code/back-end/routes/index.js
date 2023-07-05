var express = require("express");
var router = express.Router();

const app = express();
const cors = require("cors");
// const session = require("express-session");
// const { MongoClient } = require("mongodb");

app.use(express.json());
app.use(cors);

const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/";
mongoose.connect(uri).then(console.log("Connected!"));

const ProductModel = require("../models/Product");
const UserModel = require("../models/User");

// mongoose.connect(
//   "mongodb+srv://satwik:aneCtJ5dCUd5ofge@satwikbhasin-assignment.dqz7zzb.mongodb.net/?retryWrites=true&w=majority",
//   {
//     useNewURLParser: true,
//   }
// );

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
  } catch (err) {
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

router.post("/login/", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const user = await UserModel.findOne({ email: email });

    if (!user) {
      return res.json({ isValid: false, message: "User not found!" });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.json({ isValid: false, message: "Incorrect password" });
    }

    res.json({
      isValid: true,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/signup/", async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  console.log(req.body);

  const user = new UserModel({
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  });
  try {
    await user.save();
    res.json({ success: true, message: "User registered successfully!" });
  } catch (err) {
    console.log(err);
    if (err.code === 11000) {
      res.json({ success: false, message: "User already exists!" });
    } else {
      res.json({ success: false, message: "Failed to register user" });
    }
  }
});

router.get("/add/:firstNo/and/:secondNo", (req, res) => {
  let firstNo = parseInt(req.params.firstNo),
    secondNo = parseInt(req.params.secondNo);
  sum = firstNo + secondNo;
  res.json({ sum: sum });
});

module.exports = router;
