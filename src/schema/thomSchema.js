const mongoose = require("mongoose");

const thomSchema = new mongoose.Schema({
  category: {
    type: String,
    reuqired: true,
    lowercase: true,
  },
  itemName: {
    type: String,
    reuqired: true,
  },
  price: {
    type: String,
    required: true,
  },
  img: Image,
});

module.exports = mongoose.model("Thoms", thomSchema);
