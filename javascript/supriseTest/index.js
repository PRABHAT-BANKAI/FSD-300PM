for(let i=1;i<100;i++){
  if(i%2!=0){
    console.log(i);
  }
}

for(let i=100; i>=1; i--){
  console.log(i);
}
let num=26
count=0
for(let i=1;i<=num;i++){
  if(num%i==0){
    count++;
  }
}
console.log(num);

if(count==0){
  console.log("The number is prime");
}else {
  console.log("The number is not prime");
}

let temp = 50
if(temp >= 50){
  console.log("hot day")
}else{
  console.log("cold day")
}