let smallest = Infinity;
let greatest = -Infinity;
let arr = [12, 21, 3, 43, 55, 98];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < smallest) {
    smallest = arr[i];
  }
}
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > greatest) {
    greatest = arr[i];
  }
}
console.log(greatest)
console.log(smallest)

let maths = Math.max(...arr)