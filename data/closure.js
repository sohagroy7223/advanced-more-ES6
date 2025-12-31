// function sum() {
//   let number = 0;
//   return function () {
//     number++;
//     console.log(number);
//   };
// }

// const results = sum();
// results();
// results();
// results();
// results();
// const results2 = sum();
// results2();
// results2();

// //

// results();
// results2();

function bankAccount() {
  let balance = 1000;
  return function () {
    console.log(balance);
  };
}
// const account = bankAccount();
// account();
// account();
