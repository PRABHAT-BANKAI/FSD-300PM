// let object = {
//   userName: "batman",
// }; /// asdfk2
// ojbect is a  collection of key value pairs
// // dot notation
// console.log(object.userName);

// // bracket notation
// console.log(object["userName"]);

// object.age = 222;

// console.log(object);

// let obj2 = {
//   userName: "batman",
//   age: 222,
// };  // 0908823s

// console.log(object === obj2);

// let obj3 = obj2

// console.log(obj3 === obj2)

let object = {
  userName: "batman",
  age: 222,
};

let object2 = object;

object2.salary = 120000000;

console.log(object2);
console.log(object);

let userData = {
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zipCode: "12345",
    phoneNumbers: [
      { type: "home", number: "123-456-7890" },
      { type: "work", number: "987-654-3210" },
    ],
  },
};
console.log(userData.address.phoneNumbers[1].number);

let student = {
  name: "John Doe",
  age: 18,
  grade: "A",
  subjects: {
    math: 45,
    science: 80,
    english: 90,
    history: 75,
    art: 65,
    music: 85,
  },
  print: function () {
    console.log("hello from student");
  },
};

student.print();

let subArr = ["math", "science", "english", "history", "art", "music"];

//output math ==> 45
console.log(student.subjects[subArr[0]]);

for (let i = 0; i < subArr.length; i++) {
  console.log(`${subArr[i]} ==> ${student.subjects[subArr[i]]}`);
}

///   input ["apple","oppo","samsung","Mi", apple,google,google,android,mi]

//output {
// apple: 2,
// oppo: 1,
// samsung: 1,
// Mi: 2,
// google: 2,
// android: 1}

let employee = {
  name: "John Doe",
  age: 30,
  department: "IT",
};

// Object.freeze(employee)
employee.name = "batman";

employee.salary = 123545;
employee.salary = 12;
console.log(employee);

let a = {
  a: 1,
  b: 2,
  c: 3,
};

let c = a;
c.a = 4;
c.r = 7;
console.log(a === c);
