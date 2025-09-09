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
app.get("/delete/:id", (req, res) => {
  console.log(req.params.id);
  array = array.filter((element, index) => index != req.params.id); // 0!=3 true// 1!=3// 3!=3
  res.redirect("/");
});

app.get("/edit/:id", (req, res) => {
  let updateData = array[req.params.id];

  return res.render("update", { updateData, updateId: req.params.id });
});

app.post("/update-data", (req, res) => {
  let { updateId, name, marks, subject, city, gender, hobbies } = req.body;

  array[updateId] = { name, marks, subject, city, gender, hobbies };

  return res.redirect("/");
});

app.listen(PORT, (err) => {
  if (err) {
    console.log("server is not running", PORT);
    return;
  }
  console.log("server is running", PORT);
});
