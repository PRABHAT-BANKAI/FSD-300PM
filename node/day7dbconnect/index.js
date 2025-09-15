const express = require("express");
const { dbConnect } = require("./config/db");
const app = express();

const PORT = 8080;

app.use(express.urlencoded({ extended: true })); // req.body encoded
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/add", (req, res) => {
  console.log(req.body);

  return res.send("added successfully");
});

app.listen(PORT, (err) => {
  if (err) {
    console.log("server is not running", PORT);
    return;
  }
  console.log("server is running ", PORT);
  dbConnect();
});
