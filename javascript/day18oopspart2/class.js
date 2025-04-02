class Vehicle {
  constructor(name, model, price) {
    this.name = name;
    this.model = model;
    this.price = price;
  }
  print() {
    console.log(`${this.name}`);
  }
  // class function create prototype bedefault
}

let mustang = new Vehicle("mustang", "2014", 800000);
let fararri = new Vehicle("fararri", "2000", 10000000);

console.log(mustang);

mustang.print(); // Output: mustang
console.log(mustang.print == fararri.print)
