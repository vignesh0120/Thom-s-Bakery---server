const express = require("express");
const router = express.Router();
const Thoms = require("../schema/thomSchema");

require("../db/db");

const backery = [
  { category: "backery", name: "bun", price: 20 },
  { name: "sandwitch", price: 30 },
  { name: "lassi", price: 20 },
  { name: "egg puff", price: 20 },
  { name: "choclate cake", price: 50 },
];

router.get("/", (req, res) => {
  res.status(200).json(backery);
});

module.exports = router;
