const express = require("express");
const { DBconnect } = require("./config/db");
const { userRouter } = require("./routes/userRoutes");
require("dotenv").config();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/user", userRouter);

app.listen(process.env.PORT, (error) => {
  if (error) {
    console.log("server is not running");
    return;
  }
  DBconnect();
  console.log("server is running ", process.env.PORT);
});
