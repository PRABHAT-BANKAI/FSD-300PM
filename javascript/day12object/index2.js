// let arr = [1, 2, 3];
// //let arr2 = [...arr];
// let arr2 = arr;

// console.log(arr == arr2);

// let employee = {
//   name: "John",
//   age: 30,
//   salary: 5000,
//   print: function (a, b) {
//     console.log(employee);
//     return a + b;
//   },
// };

// console.log(employee.print(12, 3));

// // function add(a, b) {
// //   return a + b;
// // }

// // add(12,3)

// let store = [1, 2, 3, 4, 5, 6];
// let str = "123456789";

// let result = "1234" + "helloworld";

// for (let i = 0; i < str.length; i++) {
//   if (i == 4) {
//     str[i] = "hello";
//   }
//   console.log(str[i]);
// }

// console.log(str);

// for (let i = 0; i < store.length; i++) {
//   if (i == 4) {
//     store[i] = "hello";
//   }
//   console.log(store[i]);
// }

// console.log(store);

// for (let i = 1; i <= 10; i++) {
//   if (i == 8) {
//     // break;
//     continue;
//   }
//   console.log(i);
// }

// substring
//subarray

//*****
//*   *
//*   *
//*   *
//*****

let n = 5;
for (let i = 1; i <= n; i++) {
  let str = "";
  for (let j = 1; j <= n; j++) {
    if (i == 1 || i == n || j == 1 || j == n) {
      str += "*";
    } else {
      str += " ";
    }
  }
  console.log(str);
}
