const express = require("express");
const PORT = 8080;
const app = express();
const path = require("path");
const { dashboardRouter } = require("./routes/dashboard");
const { dbConnect } = require("./config/db");

app.set("view engine", "ejs");
app.use("/assets", express.static(path.join(__dirname, "/assets")));
app.use(express.urlencoded({ extended: true }));
app.use("/", dashboardRouter);

app.listen(PORT, (err) => {
  if (err) {
    console.log("server is not running");
    return;
  }
  dbConnect();
  console.log("server is running ", PORT);
});
