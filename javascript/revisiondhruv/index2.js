function print() {
  console.log("Hello World!");
}
// normal function

// call function
print();

function sum() {
  var a = 10;
  var b = 20;
  console.log(a + b);
  return "sum";
}

console.log(sum(), "output");
//closure
//A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, at function creation time.

function outer() {
  let a = 12;
  let b = 13;

  function inner() {
    return a + b;
  }

  return inner;
}

let innerStore = outer();

let sumStore = innerStore();

console.log(sumStore); // output: 25
