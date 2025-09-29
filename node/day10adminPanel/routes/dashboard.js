const express = require("express");

const dashboardRouter = express.Router();

dashboardRouter.get("/", (req, res) => {
  return res.render("login");
});

dashboardRouter.get("/dashboard", (req, res) => {
  return res.render("dashboard");
});

dashboardRouter.get("/signUp",(req,res)=>{
  return res.render("signUp")
})


dashboardRouter.post("/add_user",(req,res)=>{
  console.log(req.body)
})

module.exports = { dashboardRouter };
