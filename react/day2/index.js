// Array and Object Intro
// Available methods

//

let array = ["one", "two", "three", "four","three", "four","three", "four"];

// map is a high order function and method of array

// map create new array and update the value and return with updated array

let newArray = array.map((item, index) => {
  return item + index;
});

console.log(newArray);

function show({ name, city, power = "empty" }) {
  console.log(name, city, power);
}

let object = {
  name: "batman",
  city: "gothamcity",
};

show(object);

function print(tools = "html") {
  console.log(tools);
}

print();

// Spreading
// merging
// destructuring
// map and key
// filter and reduce

let arr = [12, 90, 35, 65, 77];

let arr2 = [12, 123, 15, ...arr];

// console.log(arr2)

let arr3 = [...arr, ...arr2];
console.log(arr3);

// let [age, name, grade] = ["dhruv", 1, 90];

// console.log(name,age,grade)

let { student, classes, subject } = {
  student: "param",
  classes: 1,
  subject: "chess",
};

console.log(student, classes, subject);

let arr4 = [44, 55, 66, 77, 8];

let result2 = array.reduce((acc, item) => {

if(acc[item]== undefined){
  acc[item] = 1
}else{
  acc[item]++
}

  return  acc
}, {});


console.log(result2)




function game(...data){

  console.log(data)
}


game("pubg","csgo","volrent","gta6","plantvszombies")
