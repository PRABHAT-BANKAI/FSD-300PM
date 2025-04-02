function Animal(name, color, country) {
  this.name = name;
  this.color = color;
  this.country = country;
}
Animal.prototype.nameShow= function (){
  console.log(`The animal's name is ${this.name}`);
}

function Dog(name, color, country) {
  Animal.call(this, name, color, country);
  this.bark = function () {
    console.log("Woof!");
  };
}
Dog.prototype = Object.create(Animal.prototype);

function Cat(name, color, country) {
  Animal.call(this, name, color, country);
  this.sound = function () {
    console.log("Meow!");
  };
}
Cat.prototype = Object.create(Animal.prototype);

let bunny = new Dog("bunny", "brown", "india");
console.log(bunny);
let meow = new Cat("meow", "black", "india");
console.log(meow);

bunny.nameShow();
meow.nameShow();
