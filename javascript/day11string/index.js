// Understanding String
// String Function
// substr, substring, join, trim, split

let array = ["hello", "i", "am", "javascript"];

let result = array.join(",");

console.log(result);

console.log([1, 2, 3] == "1,2,3,4");

// shallow copy
let array1 = [1, 2, 3]; //hjfjhgd

let array2 = [...array1, 4, 5, 6]; //atsfsgdf

console.log(array2);
console.log(array1 == array2);

let string = "     dhruv patel            ";
console.log(string);

console.log(string.trim());

let numberStr = "1 2 3 4 5 5 6 67 7 7";

let store = numberStr.split(" ");

console.log(store);

let subArray = [1, 2, 3, 4, 5];

for (let i = 0; i < subArray.length; i++) {
  for (let j = i; j < subArray.length; j++) {
    let str = "";
    for (let k = i; k <= j; k++) {
      str += subArray[k];
    }
    console.log(str);
  }
}

// JS Objects ( PPT)
// Object Property
// Object Methods
// Object with Array
// Objects Looping
// Make Quotes

//object is a collection key value pair

let object = {
  name: "Dhruv",
  age: 25,
  city: "Pune",
  hobbies: ["reading", "painting", "coding"],
  print:function(){
    console.log("hello from dhruv")
  }
};

console.log(object.name);
object.print()

//. notation
// bracket notation

console.log(object["age"]);

let objectemployee = {
  name: "Dhruv",
  age: 25,
  city: "Pune",
  hobbies: ["reading", "painting", "coding"],
  subject: {
    math: 30,
    science: 40,
    english: 50,
    socialStudies: 60,
    history: 70,
    geography: 80,
  },
};
let array4 = [
  "math",
  "science",
  "english",
  "socialStudies",
  "history",
  "geography",
];



console.log(objectemployee.subject[array4[4]])


for(let i=0;i<array4.length;i++){
  console.log(objectemployee.subject[array4[i]])
}


let duplicateName = [ 
  "apple",
  "banana",
  "apple",
  "orange",
  "apple",
  "banana",
  "mango",
  "banana",
  "orange",
  "mango",
  "grape",
]

//output
// {
//   apple: 3,
//   banana: 3,
//   orange: 2,
//   mango: 2,
//   grape: 1
// }


let storeKeyNames = Object.keys(objectemployee)
console.log(storeKeyNames)

let storeValue = Object.values(objectemployee)

console.log(storeValue)


// Object.freeze(objectemployee) cannot update value of object after object.freeze

objectemployee.name = "batman"
console.log(objectemployee)

let userData = {
  name: "Dhruv",
  age: 25,

}
delete userData.name

console.log(userData)