const express = require("express");

const app = express();

const PORT = 8080;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.json({
//     message: "hello world",
//   });
// });

// let array = [
//   { name: "batman", subjects: "maths", marks: 25 },
//   { name: "superman", subjects: "science", marks: 15 },
//   { name: "spiderman", subjects: "arts", marks: 99 },
// ];

let array = [];
app.get("/", (req, res) => {
  return res.render("home", { array });
});

app.post("/add-data", (req, res) => {
  console.log(req.body);
  array.push(req.body);
  res.redirect("/");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(PORT, (err) => {
  if (err) {
    console.log("server is not running", PORT);
    return;
  }
  console.log("server is running", PORT);
});
