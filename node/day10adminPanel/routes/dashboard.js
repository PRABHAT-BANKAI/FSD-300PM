const express = require("express");
const UserModel = require("../models/userModels");

const dashboardRouter = express.Router();

dashboardRouter.get("/", (req, res) => {
  let getData = req.cookies.userData;
  if (!getData) {
    return res.render("login");
  }
  return res.redirect("/dashboard");
});

dashboardRouter.get("/dashboard", (req, res) => {
  let getData = req.cookies.userData;
  console.log(getData);
  if (getData) {
    return res.render("dashboard");
  }
  return res.redirect("/");
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
      res.cookie("userData", userData);
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
    let getData = req.cookies.userData;
    if (!getData) {
      return res.render("login");
    }
    res.render("userTables", { store });
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

dashboardRouter.get("/logout", (req, res) => {
  res.clearCookie("userData");
  res.redirect("/");
});
module.exports = { dashboardRouter };
