const mongoose = require("mongoose");

const dbConnect = async () => {
  await mongoose.connect("mongodb://127.0.0.1/kaushikaInnovation");
  console.log("database connnected")

};

module.exports ={dbConnect}