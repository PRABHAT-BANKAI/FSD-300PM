let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let max = -Infinity;

for (let i = 0; i < arr.length; i = i + 2) {
  let res = arr.slice(i, i + 2);
  let sum = res.reduce((acc, item) => {
    acc += item;
    return acc;
  }, 0);
 
  if(max<sum){
    max=sum
  }
}

console.log(max)
