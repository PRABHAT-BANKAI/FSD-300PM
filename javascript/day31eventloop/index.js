setTimeout(() => {
  // asyncronous nature
  console.log(2);
});

console.log(1); // syncronus nature

let result = new Promise((resolve, reject) => {
  if (true) {
    resolve(5);
  }
});

async function Show() {
  console.log(9);
  setTimeout(()=>{
    console.log(17)
})
console.log("hello1")
  let response = await result;
  // console.log(response)
  setTimeout(()=>{
    console.log("hellow3")
  })
 print()

}
Show()

function print(){
  console.log("hello")
}

// result.then((res) => {
//   console.log(res);
// });

console.log(7);


1
9
7
5
2
17
"hllo"

1
9
7
"hllo"
2
17

1
9
7
"hello"
2 
17





