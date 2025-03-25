// block scope

let percentage = 80;

// syntax
// if (condition) {// true //false
//   //execute
// }

if (percentage > 90) {
  console.log("you will get prize");
} else {
  console.log("you will get pitai");
}

let num = 22;

if (num % 2 == 0) {
  console.log("number is even");
} else {
  console.log("number is odd");
}

//if else ladder
let light = "green";

if (light == "red") {
  console.log("Stop");
} else if (light == "yellow") {
  console.log("Slow down");
} else if (light == "green") {
  console.log("Go");
} else {
  console.log("Unknown light color");
}

let budget = 200;

if (budget > 10000) {
  console.log("i will go taj hotel");
} else if (budget > 8000) {
  console.log("i will no one");
} else if (budget > 6000) {
  console.log("i will go patang");
} else if (budget > 2000) {
  console.log("i will go gathiya rath");
} else if (budget > 2000) {
  console.log("i will go burger ing");
} else if (budget > 500) {
  console.log("i will go dhaba");
} else {
  console.log("ghar betho");
}

let email = "asd@gmail.com";
let password = 12345;

if (email == "asd@gmail.com") {
  if (password == 12345) {
    console.log("login successful");
  } else {
    console.log("invalid password");
  }
} else {
  console.log("invalid email");
}

let a = 5;
let b = 100;
let c = 15;

if (a > b) {
  if (a > c) {
    console.log("a is the largest number");
  } else {
    console.log("c is the largest number");
  }
} else {
  if (b > c) {
    console.log("b is the largest number");
  } else {
    console.log("c is the largest number");
  }
}
