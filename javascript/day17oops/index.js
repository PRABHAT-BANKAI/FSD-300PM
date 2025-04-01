// oops , oop( object oriented programming)
//Object-oriented programming is about modeling a system as a collection of objects, where each object represents some particular aspect of the system. Objects contain both functions (or methods) and data. An object provides a public interface to other code that wants to use it but maintains its own private, internal state; other parts of the system don't have to care about what is going on inside the object.

// 4 pillars
// inheritance
// abstraction
// polymorphism
// encapsulation

// factory function
// in functions we create a new object
// and update that new object with parameters
// return new object with updates

// function userData(name, age, address, salary) {
//   let object = {};
//   object.name = name;
//   object.age = age;
//   object.address = address;
//   object.salary = salary;

//   return object;
// }

// let dhruvData = userData("dhruv",55,"gujarat",1)

// console.log(dhruvData)

// let paramData = userData("param",44,"gujarat",2)
// console.log(paramData)

// constructor function

function UserData(name, age, place, salary) {
  this.name = name;
  this.age = age;
  this.place = place;
  this.salary = salary;
}

//prototype

UserData.prototype.displayDetails = function () {
  console.log(
    `Name: ${this.name}, Age: ${this.age}, Place: ${this.place}, Salary: ${this.salary}`
  );
};
let krishData = new UserData("krish", 1, "ahmedebad", 1241);
console.log(krishData);

let arpit = new UserData("arpit", 12, "ahmedebads", 12421);

console.log(arpit);

krishData.displayDetails();

arpit.displayDetails();

console.log(krishData.displayDetails == arpit.displayDetails);

let arr1 = [1, 2, 3];

let arr2 = [4, 5];

console.log(arr1.map == arr2.map);
console.log(arr2.map == arr1.filter);

Array.prototype.map = () => {
  console.log("prank");
};

arr1.map();
