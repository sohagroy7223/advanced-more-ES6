const person = {
  name: "allok",
  age: 20,
  1: 100,
  isStudent: true,
  friends: ["sobuj", "akash", "samor", "kabbo", "rittik"],
  father: {
    name: "dajhs",
    age: 49,
    job: {
      isDoctor: true,
    },
  },
  mother: {
    name: "fdusd",
    age: 39,
  },
};
// dotted notation *********normal

// console.log(person.mother.age);
// console.log(person.1);*** not working

// bracket notation*********** it is powerful

// console.log(person["father"]["job"]["isDoctor"]);
// console.log(person[1]);---> it is working

// don't give an error. give it undefine*****
// console.log(person.brother?.age);
