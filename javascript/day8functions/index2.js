// FUNCTION WITH FOUR WAYS RECURSION

// normal function
// variable function
// arrow function
// anonymous funtion // function dont have name

// variable function

// mul(1,2) you cannot access variable  before initialization
let mul = function (a, b) {
  // console.log(a * b);

  return a * b + " " + "multiply";
}; // anonymous function

console.log(mul("4", 1));

let subtract = (a) => a - 2;

// syntax of arrow function

// (a, b) =>{
// return  a - b}  // it is same as below
// arrow function without name (anonymous function)

console.log(subtract(10));

let number = 72;

let count = 0;
for (let i = 1; i <= number; i++) {
  if (number % i == 0) {
    count++;
  }
}

console.log(count);
if (count == 2) {
  console.log(number + " is a prime number");
} else {
  console.log(number + " is not a prime number");
}

let areaOfRectangle = (b, l) => {
  return l * b;
};

console.log(areaOfRectangle(5, 10));

function parameterOfRectangle(b, l) {
  return 2 * (l + b);
}

console.log(parameterOfRectangle(5, 10));

let value = 0;
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    value++;
  }
}

console.log(value);

//*
//**
//***
//****
//***** 