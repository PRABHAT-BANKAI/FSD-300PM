const express = require("express");
const { dbconnect } = require("./config/db");
const { UserModel } = require("./models/userModel");
const PORT = 8080;
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    let userData = await UserModel.find({});
    res.render("home", { userData });
  } catch (error) {
    console.log(error);
    res.render("home");
  }
});

app.post("/add", async (req, res) => {
  try {
    await UserModel.create(req.body);
    console.log("user added successfully");
  } catch (error) {
    console.log(error);
  }
  return res.redirect("/");
});

app.get("/delete/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    await UserModel.findByIdAndDelete(id);
    console.log("deleted successfully");
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

app.get("/edit/:id", async (req, res) => {
  try {
    let { id } = req.params;
    console.log(id);

    let productData = await UserModel.findById({ _id: id });
    console.log(productData);
    res.render("update", { productData });
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

app.post("/update", async (req, res) => {
  try {
    await UserModel.findByIdAndUpdate(req.body.id, req.body);
    console.log("update successfully");
    return res.redirect("/");
  } catch (error) {
    console.log(error);
    return res.redirect("back");
  }
});

app.listen(PORT, (err) => {
  if (err) {
    console.log("server is not running");
    return;
  }
  dbconnect();
  console.log("server is running ", PORT);
});
