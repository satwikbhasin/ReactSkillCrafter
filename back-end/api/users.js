var express = require("express");
var router = express.Router();

const UserModel = require("../database-models/user");

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

module.exports = router;
