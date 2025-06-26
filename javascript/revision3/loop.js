// 10 table
// 10 * 1 = 10

for (let i = 1; i <= 10; i++) {
  console.log(`${10} * ${i} = ${10 * i}`);
}


// initialization
// let number = 1;

// while (condition) {
//   // code to be executed
//   // increment/decrement
//   // update the condition
//   // check the condition again
//   // if true, execute the code again
//   // if false, exit the loop
// }


let number = 50
let value = 1

while(value <= number){
  if(value % 2 == 0){
    console.log(`${value} is even`)
  }else{
    console.log(`${value} is odd`)
  }

  value++
}


// do while loop

// do{
//   console.log("this will execute at least once")
// }while(condtion)


let num = 1

do{
  num++
  console.log(num)
 
}while(num <= 10)