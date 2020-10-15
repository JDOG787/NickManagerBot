module.exports = () => {
  const mongoose = require("mongoose");
  const { uri } = process.env;

  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  mongoose.connection.on("connected", () => {
    console.log("Connected to the database!")
  });
}