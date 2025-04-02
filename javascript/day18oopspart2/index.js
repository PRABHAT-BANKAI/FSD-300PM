// constructor function

function Vehicle(name, model, price) {
  this.name = name;
  this.model = model;
  this.price = price;
  this.priceAm = 0;
  this.priceAmount = function (amount) {
    this.priceAm += amount;

  };
}
Vehicle.prototype.displayInfo = function () {
  console.log(`Name: ${this.name}`);
};






let audi = new Vehicle("audi", "a4", 120000);

audi.priceAmount(500)
console.log(audi);
let suzuki = new Vehicle(" suzuki","ultra",1200)
console.log(suzuki);



console.log(audi.displayInfo == suzuki.displayInfo)



let arr = [1,2,3]
let arr2 = [5,6,7]

console.log(arr.map == arr2.map) // false




// Array.prototype.map = ()=>{
//  return "prank"
// }
// console.log(arr.map())
// console.log(arr2.map())