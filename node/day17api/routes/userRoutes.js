const express = require("express");
const { UserModel } = require("../models/userModel");
const bcrypt = require("bcrypt");

const userRouter = express.Router();

userRouter.post("/", async (req, res) => {
  let {userName,email,password}=req.body
    password = await bcrypt.hash(password, 10);
  try {
    await UserModel.create({userName,password,email});
    return res.status(201).json({
      message: "user registration succesfully",
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
});

userRouter.get("/", async (req, res) => {
  try {
    let userData = await UserModel.find({});
    return res.status(200).json({
      message: userData,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
});

userRouter.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id, "delete");
    await UserModel.findByIdAndDelete(id);
    return res.status(200).json({
      message: "user delted successfully",
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
});

userRouter.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    await UserModel.findByIdAndUpdate(id, req.body);
    return res.status(200).json({
      message: "user updated successfully",
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
});

module.exports = { userRouter };
