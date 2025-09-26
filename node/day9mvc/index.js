const express = require("express");
const { connectDB } = require("./config/db");
const { productRouter } = require("./routes/productRoute");
const PORT = 8080;
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("welcome server");
});

app.use("/product", productRouter);
app.listen(PORT, (err) => {
  if (err) {
    console.log("server is not connected");
    return;
  }
  connectDB();
  console.log("server is running", PORT);
});
