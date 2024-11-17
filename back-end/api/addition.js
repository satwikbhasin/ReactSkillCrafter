const express = require("express");
const router = express.Router();

router.get("/:firstNo/:secondNo", (req, res) => {
  const firstNo = parseInt(req.params.firstNo);
  const secondNo = parseInt(req.params.secondNo);
  const sum = firstNo + secondNo;
  res.json({ sum });
});

module.exports = router;