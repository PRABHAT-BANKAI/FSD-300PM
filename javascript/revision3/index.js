// if(condition){
//     // code
// }else{
// when condition is false}

let number = 10;

if (number > 11) {
  console.log("number is greater than 5");
} else {
  console.log("number is not greater than ");
}

let value = 7;

if (value % 2 == 0) {
  console.log("even");
} else {
  console.log("odd");
}

let email = "abcd@gmail.com";
let password = "12345";

if (email == "abcd@gmail.com") {
  if (password == "12345") {
    console.log("login successfull");
  } else {
    console.log("password is incorrect");
  }
} else {
  console.log("email is incorrect");
}

let a = 10;
let b = 20;
let c = 30;

if (a > b) {
  if (a > c) {
    console.log("a is greater than b and c");
  } else {
    console.log("c is greater than a and b");
  }
} else {
  if (b > c) {
    console.log("b is greater than a and c");
  } else {
    console.log("c is greater than a and b");
  }
}

let light = "purple";

if (light == "red") {
  console.log("stop");
} else if (light == "yellow ") {
  console.log("slow down");
} else if (light == "green") {
  console.log("go");
} else {
  console.log("invalid color");
}

let budget = 2000;

if (budget >= 6000) {
  console.log("patang restaurant");
} else if (budget >= 4000) {
  console.log("taj hotel");
} else if (budget >= 1000) {
  console.log("dominos");
} else if (budget >= 1000) {
  console.log("dhaba");
} else {
  console.log("home food");
}
