const express = require("express");
const { auth } = require("./middleware/auth");
const PORT = 8080;
const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("home");
});

// app.use(auth);// middleware

app.get("/about", auth, (req, res) => {
  res.send("about page");
});

app.get("/contact", (req, res) => {
  res.send("contact page");
});

app.post("/checkAuth", auth, (req, res) => {
  res.redirect("/contact");
});

app.listen(PORT, (err) => {
  if (err) {
    console.log("server is not running", PORT);
    return;
  }
  console.log("server is running", PORT);
});
