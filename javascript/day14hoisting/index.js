// console.log(userName);

// let userName = 23;

// console.log(userName);

let hero = "superman";
console.log(hero);

function outer() {
  // functional scope

  let hero = "aquaman";
  console.log(hero);
}

outer();

console.log(hero);

{
  var power = "money";
}

console.log(power);

//global scope
// block scope
//function scope
// syncronous
// console.log(1);
// // settimout asynchornous nature
// setTimeout(() => {
//   console.log(23);
// }, 5000);
// console.log(2);
// console.log(3);
// setTimeout(() => {
//   console.log(26);
// });

// javascript is a syncrhonous laguaage and  handle asynchronous operation

// setInterval asyncronous nature

// let count = 0;
// let id = setInterval(() => {
//   if (count === 5) {
//     clearInterval(id);
//   }

//   console.log(count);
//   count++;
// }, 1000);


let object = {
  name: "john",
  age: 30,
  greet() {
    console.log(`Hello, my name is ${this.name}`,this.age);
  },
}

// this keyword refers to the nearest  object
object.greet()




console.log(this)