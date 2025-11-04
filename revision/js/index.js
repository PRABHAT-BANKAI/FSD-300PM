// //HOF

// function sum (num1,cb){//12, fun

//   let a = 5
//   let b = 10

//   return num1 + cb(a,b)

// }

// function sub (a,b){
//  return a-b
// }

// console.log(sum(12,sub))//7

// // map
// //foreach
// //filter

let array = [12, 32, 5, 64, 2, 6, 7, 2, 8, 9];

// array.unshift(0)
// array.shift()

// console.log(array)

// let store = array.splice(1,3,"one","two","three","four","five")
// console.log(store)

// console.log(array)

// let store = array.slice(1,4)
// console.log(store)
// console.log(array)

//Promise is an object  which is return three statement
//1 pending
//2 rejected
//3 fullfilled

let promise = new Promise((res, rej) => { //promise.all and promise.race
  let number = 15;
  if (number % 2 == 0) {
    res("even");
  } else {
    rej("odd");
  }
});

async function result() {
  try {
    let store = promise;
    console.log(store);
  } catch (err) {
    console.log(err,"err");
  }
}

result();
