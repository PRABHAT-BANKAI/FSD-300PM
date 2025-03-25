// function findPrimeNumber(number) {
//   let count = 0;
//   for( let i=1;i<=number;i++){
//    if( number%i == 0 ){
//     count++;
//    }
//   }
//   if(count ==2){
//     return true;
//   }else{
//     return false;
//   }
// }
// for(let i=1 ; i<=100; i++){
//   if(findPrimeNumber(i)){
//     console.log(i);
//   }
// }

// let num = 5;
// let count = 0;

// for(let i=1; i<=num; i++){
//   let str ="";
//   for(let j=1; j<=num; j++){
//     if(i==1 || i== num){
//       str += "*";
      
//     }else if(i+j==num+1){
//       str += "*";
//     }
//     else{
//       str += " ";
//     }
//   } 
//   console.log(str);
// }


let arr = [
  [[22,33],[44,55],[66,77]],
  [4,5,6],
  [7,8,9]
]

console.log(arr[0][1][1])
