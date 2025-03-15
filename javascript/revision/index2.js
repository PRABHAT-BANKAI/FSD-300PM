// Date :- 15-03-2025


// Data types

// primitive data type
// string/ "string", 'string', `back ticks inverted coma`
// number // 1234
//  boolean // true or false
// undefined
// null
// BigInt // 12312349083459083069980929384098234098n

// non- primitive data type (reference data type )

// function
// object
// array

let num = 12345;

console.log(typeof num); // number

let str = `hello ${num}`; //'hello'   //"hello"
console.log(str);
console.log(typeof str); // string

let boolean = true;
console.log(boolean);
console.log(typeof boolean); // boolean

console.log(typeof undefined);

let num2;
console.log(num2); // javscript throws undefined when value is intialized in variable

let value = null;

console.log(value); // null
console.log(typeof value);

console.log(null === undefined);

console.log("1" === 1);
// implicit
// explicit

let num3 = 12334534560982309840923123n;

console.log(num3);

print(12, 5);
function print(a, b) {
  console.log(`a is ${a},b is ${b}`);
}

// object store key value pairs
let userData = {
  name: "batman",
  age: 20,
  address: "gotham city",
  salary: "billionare",
};

console.log(typeof userData);

// so array can store multiple datatypes , array created by square brackets []

let array = [
  1,
  2,
  3,
  4,
  5,
  "hi from javscript",
  true,
  false,
  1234,
  "",
  null,
  undefined,
];

console.log(array);
console.log(typeof userData);

let storeNumber = "1234a56";

console.log(typeof storeNumber);
let newStoreNumber = Number(storeNumber);
console.log(newStoreNumber);
console.log(typeof newStoreNumber);

let storeBoolean = true;

console.log(typeof storeBoolean);

let newNumber = Number(storeBoolean);

console.log(newNumber);

// explicit conversion

console.log(2 + 2 + "5" + 2); // concatenation
console.log(true - true);

console.log(1);
console.log(2);
console.log(3);

for (let i = 1; i <= 100; i++) {
  console.log(i);
}

let star = "";

let i = 0;

while (i < 5) {
  star += "*";
  console.log(star);
  i++;
}

for (let i = 0; i <= 5; i++) {
  let str = "";
  for (let j = 1; j <= 5 - i; j++) {
    str += " ";
  }
  for (let j = 1; j <= i; j++) {
    str += "*";
  }

  console.log(str);
}

//prefix  ++num // first number increment then value will be assigned
//postfix num++ // first number value will be assigned then value will be incremented

let int = 1;

console.log(int++); //1

console.log(++int); // 3

console.log(int++); //3

console.log(++int); //5

console.log(int++); //5
