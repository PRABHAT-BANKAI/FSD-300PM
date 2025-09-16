const express = require("express");
const { dbConnect } = require("./config/db");
const { UserModel } = require("./models/userModels");
const app = express();

const PORT = 8080;

app.use(express.urlencoded({ extended: true })); // req.body encoded
app.use(express.json());

app.get("/", async (req, res) => {
  let response = await UserModel.find({});

  return res.json({
    message: response,
  });
});

app.post("/add", async (req, res) => {
  try {
    console.log(req.body);

    await UserModel.create(req.body);
    console.log("added");

    return res.send("added successfully");
  } catch (error) {
    console.log(error);
  }
});

app.delete("/delete/:id", async (req, res) => {
  console.log(req.params.id);
  await UserModel.findByIdAndDelete(req.params.id);
  res.send("deleted succesfully");
});

app.put("/update/:id", async (req, res) => {
  await UserModel.findByIdAndUpdate(req.params.id, req.body);

  return res.send("updated succesfully");
});

app.listen(PORT, (err) => {
  if (err) {
    console.log("server is not running", PORT);
    return;
  }
  console.log("server is running ", PORT);
  dbConnect();
});
