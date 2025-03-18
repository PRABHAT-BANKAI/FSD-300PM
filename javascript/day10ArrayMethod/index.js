// Array With Functions
// (map ,filter, foreach, indexof, findindex ,includes, every, some)

//HOF (high order functions)
// High order function is a function that takes  a function an argument and return some result
// example (map , filter, foreach)

// a function  passing as a argument  is called callback function 

let skillsCoding = ["html", "css", "javascript", "react", "node"];

//map
// map is array method
// 1st it will create new array
// 2nd it will updated array
// 3rd will be returning a new array

let store = skillsCoding.map((data) => {
  return data + " language";
});

console.log(store);

let multi = [1, 2, 3, 4, 5];

let storeData = multi.map((num) => {
  return num * 5;
});

console.log(storeData);
console.log(storeData[3]);

//filter method of array
// 1st it will create new array
// 2nd it will only return true value
// 3rd will be returning a new array

let array = [11, 22, 33, 44, 55, 66, 77, 88, 99, 101, 101, 101, 101, 101];

let filterNumbers = array.filter((item) => item % 2 != 0);

console.log(filterNumbers);

let sum = 0;

const value = array.forEach((num) => {
  sum += num;
});

console.log(value);
console.log("Sum of array elements:", sum);

const indexNumber = array.indexOf(101)

console.log(indexNumber);

const findindexNumber = array.findIndex((item)=>item >= 101)

console.log(findindexNumber);

let string = "volkswagen"


console.log(string);

let input = "oe"

let resultOfString = string.includes(input)

console.log(resultOfString);


let container = [7, 14, 16, 13, 1, 22, 24]

let everyNumber = container.every((num) => num % 2 === 0)

console.log(everyNumber);

let someNumber = container.some((num) => num % 2 === 0)

console.log(someNumber);


// sort , split ,trim, join

// "                  batman superman               "


let array2 = [12,123,123,534,6,7,9,34]

array2.sort((a,b)=>b-a)

console.log(array2);


console.log(12 - +"1132452")


