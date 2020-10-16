const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  nick: String,
  authorId: String
});

module.exports = mongoose.model("Request", schema);