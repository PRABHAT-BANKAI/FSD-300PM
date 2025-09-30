const express = require("express");
const UserModel = require("../models/userModels");

const dashboardRouter = express.Router();

dashboardRouter.get("/", (req, res) => {
  return res.render("login");
});

dashboardRouter.get("/dashboard", (req, res) => {
  return res.render("dashboard");
});

dashboardRouter.get("/signUp", (req, res) => {
  return res.render("signUp");
});

dashboardRouter.post("/add_user", async (req, res) => {
  console.log(req.body);
  try {
    await UserModel.create(req.body);
    console.log("added successfully");
    return res.redirect("/");
  } catch (error) {
    console.log(error);
    res.redirect("/signup");
  }
});

dashboardRouter.post("/login", async (req, res) => {
  const { userName, password } = req.body;

  try {
    const userData = await UserModel.findOne({ userName });

    if (userData.password === password) {
      res.redirect("/dashboard");
    } else {
      console.log("password is not match");
      res.redirect("/");
    }
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

dashboardRouter.get("/usersTable", async (req, res) => {
  try {
    let store = await UserModel.find({});
    res.render("userTables",{store});
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});
module.exports = { dashboardRouter };
