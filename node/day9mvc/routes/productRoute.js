const express = require("express");
const { ProductModel } = require("../models/product");

const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  let productsData = await ProductModel.find({});
  return res.render("home", { productsData });
});

productRouter.post("/", async (req, res) => {
  try {
    await ProductModel.create(req.body);
    console.log("added successfully");
    return res.redirect("/product");
  } catch (error) {
    return res.json({ message: error });
  }
});
module.exports = { productRouter };
