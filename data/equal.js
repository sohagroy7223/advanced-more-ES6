// don't check data type, only compare

const num1 = 10;
const num2 = "10";

// if (num1 == num2) {
//   console.log("yes this is equal number");
// } else {
//   console.log("noo this is not equal number");
// }

// check data type and compare
const n1 = 10;
const n2 = "10";

if (n1 === n2) {
  //   console.log("yes this is equal number");
} else {
  //   console.log("noo this is not equal number");
}

// js automatic +-*/ ar por kono string number k number toire kore nay
if (5 * "2" === 10) {
  //   console.log("right answer");
} else {
  //   console.log("range answer");
}

// non-primitive number can't check in deferent variable
//answer problem
const p1 = [];
const p2 = [];
if (p1 === p2) {
  //   console.log("there are same");
} else {
  //   console.log("problem");
}

// it's good work
// answer there are same
const x1 = [];
const x2 = x1;
if (x1 === x2) {
  console.log("there are same");
} else {
  console.log("problem");
}
