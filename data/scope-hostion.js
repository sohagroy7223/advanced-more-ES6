// function sum(num1, num2) {
//   const result = num1 + num2;
//   return result;
// }
// const res = sum(19, 21);
// console.log(res);

// if variable var you can access it n his parent

function sum(num1, num2) {
  const result = num1 + num2;
  if (true) {
    var result2 = num1 - num2;
  }

  //   console.log(result2);
}
sum(10, 20);

// simple example
// if your variable is var

console.log(price);

const price = 100; // if variable is const -> ReferenceError: Cannot access 'price' before initialization
