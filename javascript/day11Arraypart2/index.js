// Array With Functions Push ,Pop, shift, unshifts, Splice string function

let array = [1];

array.push(3);
array.push(4);
const store = array.push(2);
const getValue = array.pop(); // remove the element from last of the array

console.log(store);
console.log(getValue);

array.shift(); // remove the element from first of the array

array.unshift("batman");

console.log(array);

// trim() trim will help in remove spaces around the string

let string = "           batman  superman                    ";
console.log(string.trim());

// split()  split will help to convert string into array

let word = "a-b-c-d-e-f-g-h-i-j-k-l";

word = word.split("-");

console.log(word);

word = word.join("#"); // join() will help to convert array into string
console.log(word);

// what is the different between splice and slice

const arr = [12, 13, 14, 15, 16, 17, 18, 19, 20]; // splice can change original array

arr.splice(2, 3, "batman", "superman"); // first argument for started index, second argument for how many element you want remove , third argument for optional(add element in array from where the index started)
console.log(arr);



let arr2 = [1, 2, 3, 4, 5, 6, 7]// slice cannot change original array

const sliceOfPizza = arr2.slice(2,4)//first argument for starting index, second argument for last index 


console.log(arr2);

console.log(sliceOfPizza);


let str = "abcdefghijklmnopqrstuvwxyz"

 str.split("").forEach((alphabets,index)=>{
  console.log(`${alphabets} == ${index+1}`)
 })


 let duplicate = [12,3,434,6534,6,345,5,5,5,5,5,5]

let unique = new Set(duplicate)
console.log(unique)