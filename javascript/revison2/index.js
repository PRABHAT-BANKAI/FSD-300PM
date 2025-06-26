// for(initialization;condition;inc or dec)
//   {

//     block execution
//   }

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)

// first step initialization
// 2nd condition check
// if condition is true then for block will execute if conditiion is false then loop will break
// last part increament
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i + "even number");
  } else {
    console.log(i + "odd number");
  }
}

// while loop

let num = 1; // first initialization

// second condition check
while (num <= 50) {
  // if condition is true then enter in while loop for execution\
  console.log(num);
  num++; // last part increment
}

// do while loop
let value = 1; // initialization

do {
  // code execute
  value++; // increment
  console.log(value);
} while (value < 5); // codition check

function print() {
  console.log("Hello World");
}

print();
console.log(2);
console.log(1);
console.log(3);

function print1() {
  console.log(1);
}
function print2() {
  console.log(2);
}
function print3() {
  console.log(3);
}

print3();
print();
print2();

function sum() {
return 15 + 6
}

console.log(sum())


//variable function 
// anonymous function
let subtract = function(b,a){//parameters
  return b-a
}


console.log(subtract(12,32))// arguments

let num1 = 1
let num2 = 5

console.log(subtract(5,5))
console.log(subtract(4,19))


console.log(subtract(num1,num2))


// arrow function 

const show =()=>{
  console.log("Hello World")
}

show()