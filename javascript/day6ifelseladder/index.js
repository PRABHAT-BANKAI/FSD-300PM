// if else ladder Statement Choice

// if (true) {
//   var variable = 1;

// } else {
//   console.log(variable);
// }

// if(condtion){
//   // statements
// }else{
//   // statements
// }

if (5 < 2) {
  console.log("Condition is true");
} else if (4 < 2) {
  console.log("Condition 2 is true");
} else if (2 != 2) {
  console.log("Condition 3 is true");
} else {
  console.log("if all condition is false then else will execute");
}

let budget = 2000;

if (budget >= 6000) {
  console.log("i will in taj hotel");
} else if (budget >= 4000) {
  console.log("i will in patang");
} else if (budget >= 3000) {
  console.log("i will go in dominos");
} else if (budget >= 1500) {
  console.log("i will go in macdonald");
} else if (budget >= 1000) {
  console.log("dhaba");
} else {
  console.log("stay at home");
}

let percentage = 65;

if (percentage >= 85 && percentage <= 100) {
  console.log("Grade A");
} else if (percentage >= 65 && percentage <= 85) {
  console.log("Grade B");
} else if (percentage >= 45 && percentage <= 65) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

let marks = 90;

if (marks >= 89) {
  console.log("bike");
} else {
  console.log("pitai");
}

let light = "green";

if (light === "red") {
  console.log("stop");
} else if (light === "orange") {
  console.log("slow down");
} else if (light == "green") {
  console.log("go");
} else {
  console.log("invalid color");
}

let temperature = 47;

if (temperature > 45) {
  console.log("hot climate");
} else if (temperature > 33) {
  console.log("warm climate");
  if (temperature == 37) {
    console.log("perfect day");
  }else{
    console.log("not perfect day");
  }
} else if (temperature < 33) {
  console.log("normal climate");
} else if (temperature >= 15) {
  console.log("cold climate");
} else {
  console.log("freezing climate");
  if (temperature == 0) {
    console.log("perfect night");
  } else {
    console.log("not perfect night");
  }
}
