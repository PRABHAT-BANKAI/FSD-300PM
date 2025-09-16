const { default: mongoose } = require("mongoose");

const dbConnect = async () => {
  await mongoose.connect("mongodb://127.0.0.1/krishPatners"); // collection of database
  console.log("database is connected");
};

module.exports = { dbConnect };
