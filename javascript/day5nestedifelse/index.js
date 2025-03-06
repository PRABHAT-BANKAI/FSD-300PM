let num = 55;

if (num > 10) {
  if (num > 20) {
    console.log("yes my number  is (55) greater than both number 10 and 20");
  } else {
    console.log(
      `yes my number is ${num} greater than 10 but is not greateer than 20`
    );
  }
} else {
  console.log(`my number is ${num} not greater than 10 and 20`);
}

let userName = "batma";
let password = "12345";

if (userName === "batman") {
  if (password === "12345") {
    console.log("login successful");
  } else {
    console.log("invalid password");
  }
} else {
  console.log("invalid user name");
}
if (userName == "batman" && password === "12345") {
  console.log("login successful");
} else {
  console.log("invalid user name or password");
}

function print() {
  let a = 10;
  let b = 10;
  let c = 10;

  if (a == b && b == c && c == a) {
    console.log("all numbers are equal");
  } else {
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
  }
}

print();

//let
//const
//var
const value = 55;
// value = "batman"
{
  console.log(value);
}

{
  var tempValue = 12;
  var tempValue = 13;
  tempValue = tempValue + tempValue;
  console.log(tempValue);
}
console.log(tempValue);

let getNumber =  Math.floor(Math.random() * 3) + 1;
console.log(getNumber);




