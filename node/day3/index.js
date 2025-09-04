const http = require("http");
let PORT = 8080;
const fs = require("fs");

const server = http.createServer((req, res) => {
  // console.log(req.url);

  // let fileName = "";

  // switch (req.url) {
  //   case "/":
  //     fileName = "home.html";

  //     break;
  //   case "/about":
  //     fileName = "about.html";
  //     break;
  //   case "/contact":
  //     fileName = "contact.html";
  //     break;

  //   default:
  //     break;
  // }

  // fs.readFile(fileName, (err, data) => {
  //   if (!err) {
  //     res.end(data);
  //   }
  // });

  fs.readFile("userData.txt", "utf-8", (err, data) => {
    console.log(data.split("\n")[0]);
    res.write(`${data.split("\n")[0].split(" ")[3]} `);
    res.end();
  });
});

server.listen(PORT, (err) => {
  if (err) {
    console.log("server is not running");
    return;
  }
  console.log("server is running", PORT);
});
