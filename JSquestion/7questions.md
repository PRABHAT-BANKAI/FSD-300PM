
# JavaScript Basic Questions

### Functions, Arrays, Strings, Loops

**1.** Write a function `capitalizeNames` that takes an array of names and returns a new array with each name capitalized.
**Example:**
```js
let names = ['john', 'jane', 'doe'];
console.log(capitalizeNames(names)); 
```
**Output:**
```
['John', 'Jane', 'Doe']
```

---

**2.** Write a function `countWords` that takes a sentence as input and returns the total number of words in the sentence.
**Example:**
```js
console.log(countWords('JavaScript is awesome'));
```
**Output:**
```
3
```

---

**3.** Create a function `findMinNumber` that takes an array of numbers and returns the smallest number from the array using a `for` loop.
**Example:**
```js
let numbers = [30, 25, 10, 50];
console.log(findMinNumber(numbers));
```
**Output:**
```
10
```

---

**4.** Write a function `printNumbers` that takes a number `n` and prints all numbers from 1 to `n` using a `while` loop.
**Example:**
```js
printNumbers(5);
```
**Output:**
```
1
2
3
4
5
```

---

**5.** Write a function `joinArrayToString` that takes an array of strings and joins them into a single string with spaces in between using a `for` loop.
**Example:**
```js
let words = ['I', 'love', 'coding'];
console.log(joinArrayToString(words));
```
**Output:**
```
I love coding
```

---

**6.** Create a function `calculateProduct` that takes an array of numbers and returns the product of all the numbers using a `while` loop.
**Example:**
```js
let numbers = [2, 3, 4];
console.log(calculateProduct(numbers));
```
**Output:**
```
24
```

---

**7.** Write a function `removeSpaces` that takes a string and removes all spaces from the string using a `for` loop.
**Example:**
```js
console.log(removeSpaces('hello world'));
```
**Output:**
```
helloworld
```

---

**8.** Create a function `doubleNumbers` that takes an array of numbers and returns a new array with each number doubled.
**Example:**
```js
let numbers = [1, 2, 3, 4];
console.log(doubleNumbers(numbers));
```
**Output:**
```
[2, 4, 6, 8]
```

---

**9.** Write a function `printOddNumbers` that prints all odd numbers between 1 and 10 using a `while` loop.
**Example:**
```js
printOddNumbers();
```
**Output:**
```
1
3
5
7
9
```

---

### Closure

**10.** Create a function `createIncrementer` that returns another function. The returned function increments a counter each time it is called. Demonstrate using this function by calling it multiple times to show how closure works.
**Example:**
```js
let increment = createIncrementer();
console.log(increment());  // 1
console.log(increment());  // 2
console.log(increment());  // 3
```
