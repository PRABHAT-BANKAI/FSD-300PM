let arr = [1, 2, 3, 4, 5]; // out [6, 7 ,8, 9, 10]

for (let i = 0; i < arr.length; i++) {
  arr[i] = arr.length + i;
}

console.log(arr); // out [6, 7 ,8, 9, 10] // array is mutable

let string = "hello"; // out "hello world"

for (let i = 0; i < string.length; i++) {
  string[i] = string.length + i; // strings are immutable
  console.log(string[i]);
}

console.log("hellow"+"orld"); // out "hello world" // strings are immutable
