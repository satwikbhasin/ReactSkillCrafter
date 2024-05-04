var express = require("express");
var router = express.Router();

router.get("/add/:firstNo/and/:secondNo", (req, res) => {
  let firstNo = parseInt(req.params.firstNo),
    secondNo = parseInt(req.params.secondNo);
  sum = firstNo + secondNo;
  res.json({ sum: sum });
});

module.exports = router;
