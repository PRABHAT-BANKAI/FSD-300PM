console.log("hello");

let num = 5;
let count = 0;
for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= num; j++) {
    for (let k = 1; k <= num; k++) {
      count++;
    }
  }
}
console.log(count);

// *
// **
// ***
// ****
// *****


//*****
//*
//***** 
//*
//***** 


for (let i = 1; i <= num; i++) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    str += "*";
  }
  console.log(str);
}
