function sum(a, b, c) {
  console.log(a, b, c);
  //   console.log(...arguments);
  //   console.log(typeof sum);
}

// sum(12, 23, 34, 52, 17, 93, 52);
// console.log(sum.length);

// //
// it is not changed because it is permeative
function sum(num1, num2) {
  num1 = 50;
  // console.log(num1, num2);
}
let nu1 = 10;
let nu2 = 30;
sum(nu1, nu2);
// console.log(nu1, nu2);

//  /////
// is is changed because it is non permeative
const persons = { name: "sohag", age: 20 };

function nam(myName) {
  myName.name = "akash";
  //   console.log(myName);
}
nam(persons);
