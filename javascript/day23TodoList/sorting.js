let array = [19,35,12,21,34,35,48,66,7];
array.sort((a, b) => a - b); // Sorts the array in ascending order
console.log(array); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

const products = [
  {
    name: "Wireless Mouse",
    price: 25.99,
    category: "Electronics"
  },
  {
    name: "Yoga Mat",
    price: 19.99,
    category: "Fitness"
  },
  {
    name: "Water Bottle",
    price: 9.99,
    category: "Accessories"
  },
  {
    name: "Bluetooth Speaker",
    price: 45.00,
    category: "Electronics"
  },
  {
    name: "Desk Lamp",
    price: 30.49,
    category: "Home"
  }
];

products.sort((a, b) => b.price - a.price); // Sorts the products by price in ascending order
console.log(products); // Sorted array of products by price




let value = "JaVaScript"

value =value.toLowerCase().includes("aj")
console.log(value)

