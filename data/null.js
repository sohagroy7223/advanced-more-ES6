// undefined*********

let name;
// console.log(name);

// null***********

let names = null;
names = "omouk";
// console.log(typeof names);

// if you take parameter, and do't send argument --> undefined
function sum(n1, n2) {
  console.log(n1, n2);
}
sum(10);

// if don't return value -->undefined
// function sum(n1, n2) {
//   console.log(n1, n2);
// }
// const result = sum(10, 20);
// console.log(result);

// if only return, don't call parameter--> undefined
// function sum(n1, n2) {
//   return;
// }
// const result = sum(10, 20);
// console.log(result);

function sum(n1, n2) {
  return n1 + n2;
}
const result = sum(10, 20);
// console.log(result);
