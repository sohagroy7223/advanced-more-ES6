const numbers = [1, 2, 3, 4, 5, 6, 7];

// const newArray = [];

// for (let i = 0; i < numbers.length; i++) {
//   const element = numbers[i];
//   const sum = element + 1;
//   newArray.push(sum);
// }
// console.log(newArray);

const square = numbers.map((value) => value * 2);
// console.log(square);

const friends = ["sogor", "sumon", "maha", "suvo", "modu"];

const newFriends = friends.map((element, index) => {
  // console.log(index);
  // console.log(element);
  // return element;
});
// console.log(newFriends);

const allNumbers = [12, 34, 56, 78, 345, 23];

const bigNumber = allNumbers.map((num) => num + 2);
// console.log(bigNumber);

// syntax
// if single line******
// variableName.map(element, index)=>

// if multiple line******
// variableName.map(element, index)=>{
//   return must
// }
