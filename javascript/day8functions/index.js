// function is non primitive types
// function is a block of code
// normal function

function print2() {
  console.log("Hello");
}
// there is three of to make string
// "Hello"
// 'hello'
// ` hello  ${value` back ticks

function print() {
  console.log("Hello World");
}

print2();
print();

function sum(num1, num2) {
  // parameters

  console.log(num1, num2);
  console.log(num1 + num2);
}

sum(1, 2); // arguments;

let c = 12;
let d = 3;

// function add(d, c) {
//   // parameters
//   console.log("c" + num1, "d" + num2);
// }

// add(c, d); // arguments;

function subtract() {
  // console.log(5 - 2);

  return 4 - 2;
}
let result = subtract();

console.log(result);
console.log(subtract());

function gameOfSum(a, b) {
  return a + b;
}

let store = gameOfSum(34, 88);

console.log(store);

console.log(gameOfSum(15, 12));

// find even numbers in 1 to 100

for (let i = 1; i < 100; i++) {
  console.log(findEven(i));
}

function findEven(num) {
  if (num % 2 == 0) {
    return num;
  } else {
    return `not even ${num}`;
  }
}

let fruit = "grapes";

switch (fruit) {
  case "apple":
    console.log("I love apples");
    break;
  case "banana":
    console.log("I love bananas");
    break;
  case "orange":
    console.log("I love oranges");
    break;

  case "mango":
    console.log("I love mangoes");
    break;
  default:
    console.log("I don't like this fruit");
}
