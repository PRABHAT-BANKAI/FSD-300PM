// Types Of Operator
// Arithmetic operators
// Assignment operators
// Comparison operators
// Logical operators
// conversion with console.log and innerHTML

// "use strict"

//let ,var,const

let username = "batman";
// variable name is declared with value with intialization

console.log(username);

// Arithmetic operators
// + adding
// - subtracting
// * multiplication
// / division
// % modulus(remainder)
// ** exponent(power)
// ++ (increment)(prefix,postfix)

let a = 5;
let b = 3;

let sum = a + b;
console.log(sum);
console.log(a + b);

console.log(a - b);

console.log(a * b);

console.log(a / b); //Math.floor(a/b) division return quotient
console.log(Math.floor(a / b));
console.log(Math.ceil(a / b));

console.log(Math.round(9 / 4));
console.log(9 / 4);

console.log(a % b); // 5/3 remainder 2 modulus return remainder
console.log(b ** 2);
console.log(3 ** 3);

console.log(++a); // prefix increment// first increment then assigned

let temp = a++; // 6
console.log(a++); // postfix increment// first assigned then increment

console.log(a);

console.log(temp);

// Assignment operators
// =
// short hand
// +=
// -=
// *=
// /=
// %=
// **=

let c = 2;
let d = 3;

let add = 5;

// add = add + d
add += d;

console.log(add);

// DATA TYPES

// primitive types
// number
let num = 56;
console.log(typeof num);
// string
let str = "24";
console.log(typeof str);
// undefined
console.log(typeof undefined);
// boolean => false and true
let boolean = false;

console.log(typeof boolean);
// null  data type is object

console.log(typeof null);
// bigInt  for bigInt n
let bigNumber = 398704859384593845934852089n;

console.log(typeof bigNumber);

// non-primitive types
// array [1,2,3,false,true,"hello"]
// object // store key value pairs
let object = {
  userName: "batman",
  age: 25,
  city: "delhi",
};
// function is block of code

// {
// block creator

// }

// camelCase  addressOfCompany
// snakeCase   address_of_company





// Comparison operators
// ==  only value comparison
// ===
// >=
// <=
// >
// <
// !=
// !==
