//15-03-2025

//if

// nested if else

// if elseif else ladder

//question // logical operators

// for loop
// while loop
// dowhile loop

// if(condition){ condition always based on true or false

// }

if (5 > 2) {
  console.log("5 is greater than 2");
}
let num = 13;

if (num % 2 == 0) {
  console.log(`${num} is even`);
} else {
  console.log(`${num} is odd`);
}

let email = "asdf@gmail.com";
let password = 12345;

if (email == "asdf@gmail.com") {
  if (password == 12345) {
    console.log("login successful");
  } else {
    console.log("wrong password");
  }
} else {
  console.log("wrong email");
}

let b = 9;
let a = 9;
let c = 9;
if (b == a && b == c && c == a) {
  console.log("all are same");
  // return;
} else {
  if (a > b) {
    if (a > c) {
      console.log("a is the largest");
    } else {
      console.log("c is the largest");
    }
  } else {
    if (b > c) {
      console.log("b is the largest");
    } else {
      console.log("c is the largest");
    }
  }
}

let light = "black";

if (light == "red") {
  console.log("stop");
} else if (light == "orange") {
  console.log("slow down");
} else if (light == "green") {
  console.log("go");
} else {
  console.log("invalid light color");
}

let budget = 4000;

if (budget >= 6000) {
  console.log("taj hotel");
} else if (budget >= 5000) {
  console.log("patang restaurant");
} else if (budget >= 4000) {
  console.log("dominoz");
} else if (budget >= 4000) {
  console.log("Mcdonalds");
} else if (budget >= 2000) {
  console.log("honest");
} else if (budget >= 1000) {
  console.log("dhaba");
} else {
  console.log("ghar betho");
}

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

// for(initization;condition;inc or dec){
//   code execution
// }

for (let i = 1; i <= 100; i++) {
  console.log(i);
}

// while loop
//1step initialization

// while(condition){
//   code execution
//   last step increment/decrement
// }

let low = 0;
let high = 15;

while (low <= high) {
  console.log(low);
  low++;
  high--;
}

// first initialization
// do {
//   second excute code of block
// inc or dec

// } while (condition); third step check condition

// let num1  = 1

// do{
//   num1++
//   console.log(num1)

// }while(num1 <=8)

// normal function

function sum(a, b) {
  // parameters
  return a + b;
  // console.log("sum");
}
// arguments

console.log(sum(14, 15));

let result = sum(12, 2);
console.log(result);

// normal function
// arrow function
// variable function
// anonymous function
