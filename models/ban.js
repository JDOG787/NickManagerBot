const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  userId: String,
  duration: Number
});

module.exports = mongoose.model("Ban", schema);