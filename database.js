module.exports = () => {
  const mongoose = require("mongoose");
  const URI = require("./config").mongo;

  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  mongoose.connection.on("connected", () => {
    console.log("Connected to the database!")
  });
}