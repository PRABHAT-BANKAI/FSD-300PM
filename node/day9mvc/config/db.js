const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1/kishansir");
    console.log("connected to db");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connectDB };
