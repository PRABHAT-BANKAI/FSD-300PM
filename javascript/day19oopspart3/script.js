class Veichle {
 #year
  constructor(name, model, year, color) {
    this.name = name;
    this.model = model;
    this.#year = year;
    this.#year = 12
    this.color = color;
  }
  #toPrint() {
    return `Name: ${this.name}, Model: ${this.model}, Year: ${this.#year}, Color: ${this.color}`;
  }
  showPrint(){
    return this.#toPrint();
  }
}



class Car extends Veichle {
  constructor(name, model, year, color, speed) {
    super(name, model, year, color);
    this.speed = speed;
  }
  showSpeed() {
    return `The car is traveling at ${this.speed} km/h`;
  }
  //polymorphism
  showPrint(){
    return super.showPrint() + ` and it has 4 wheels`;
  }
}


const toyota = new Car("Toyota","fortuner","2023","black",180)
// toyota.#year = 11111
console.log(toyota)
console.log(toyota.showPrint())

console.log(toyota.showSpeed())



//polymorphism
