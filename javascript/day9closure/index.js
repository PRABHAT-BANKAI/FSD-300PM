// nested functions Closure concepts
//  variables as a function arrow function IIFE

//closure
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, at function creation time.
function outer() {
  console.log("outer");
  let a = 1;
  let b = 2;

  function innerFun() {
    console.log("inner");
    return a + b;
  }

  a = 4;
  b = 6;
  return innerFun;
}

let inner = outer();

console.log(inner());

let arrowFun = (a) => {
  return a * 5;
};
// console.log(arrowFun(5))
// IIFE (Immediately Invoked Function Expression)

(function () {
  console.log("iife");
})();

// array store multple datas
// array index always start from 0
let array = [1, "abc", true, undefined, null, 0];

console.log(array.length);
console.log(array[array.length - 1]);

let arr = [1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let numbers = [12, 5, 66, 2, 232, 277, , 53, 24];

let max = -Infinity;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

console.log(max);

// Array With Functions
// (map ,filter, foreach, indexof, findindex ,includes, every, some)


//HOF (high order functions)
// example (map , filter, foreach)



let skillsCoding = ["html", "css", "javascript", "react", "node"];

//map
// map is array method
// 1st it will create new array
// 2nd it will updated array
// 3rd will be returning a new array

let store = skillsCoding.map((data)=>{
 return data+" language"
})

console.log(store)

let  multi = [1,2,3,4,5]


let storeData = multi.map((num)=>{
  return num*5
})

console.log(storeData)
console.log(storeData[3])