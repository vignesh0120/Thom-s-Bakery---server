const express = require("express");
const router = express.Router();
const Thoms = require("../schema/thomSchema");

require("../db/db");

router.get("/", async (req, res) => {
  try {
    const data = await Thoms.find();
    res.status(200).json(data);
    console.log("fetched data");
  } catch (e) {
    res.status(500).json("couldn't retrieve");
  }
});

module.exports = router;
