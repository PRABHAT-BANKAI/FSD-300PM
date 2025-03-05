// Some Logical, Programs
// procedure programs , swapping Ex : grade , bill , interest , employ salary

let a = 5;
let b = 20;

// let temp = a
// a = b
// b = temp
console.log("a b" + a + b); // "" ''  ``
console.log(1 + 2 + 3 + "45" + 7);
console.log(`a is ${a}  and b is ${b}`);
a = a + b;
b = a - b;
a = a - b;

console.log(`a is ${a} and b is ${b}`);

let html = 98;
let css = 57;
let javascript = 33;

let total = html + css + javascript;

//Math.floor
//Math.ceil
//Math.round
//Math.float

let average = total / 3;

console.log(Math.floor(average));

let randomNumber = Math.random() * 100;
console.log(randomNumber);

console.log(4 + 6 * 2 - (4 - 1) / 2 + 3 * 2);
// 4+6*2-3/2+3*2

// if Statement

if (5 < 2) {
  console.log("5 is greater than 2");
}
if (2 < 5) {
  console.log("2 is less than 5");
}

console.log("hi");

let check = 0;

if (check === 0) {
  console.log("first hi");
}
if ((check = 0)) {
  console.log("hi");
} else {
  console.log("bye");
}

let valueNum = 23;
if (valueNum % 2 == 0) {
  console.log("even");
}else{
  console.log("odd");
}


let email = "asd@gmail.com"
let password = "12345"

if(email === "asd@gmail.coom" && password === "12345"){
  console.log("email is correct")
}else{
  console.log("email is incorrect")
}

