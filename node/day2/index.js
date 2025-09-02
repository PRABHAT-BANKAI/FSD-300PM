const http = require("http"); // core module
const path = require("path"); // core module
const fs = require("fs")
// local module
const { sum, sub, multiple } = require("./sum");

// third party module

//nodemon
// express
//multer
// ejs

let PORT = 8080;

const server = http.createServer((req, res) => {
  // res.write(
  //   `sum of numbers is  ${sum(1, 5)}  sub of number is ${sub(
  //     12,
  //     6
  //   )} multiply of numbers is ${multiple(2, 3)}`
  // );
  res.setHeader("Content-Type", "application/json");
  const data = { message: "Hello from Node.js!" };
  return res.end(JSON.stringify(data));
});

server.listen(PORT, (err) => {
  if (err) {
    console.log("server is not running");
    return;
  }
  console.log(`server is running Port no ${PORT}`);
});
