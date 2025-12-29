const allDevice = [
  { id: 1, brand: "iphone", model: "iphone17", color: "gold", price: 1300 },
  { id: 2, brand: "xiaomi", model: "xiaomi not 13", color: "blue", price: 200 },
  { id: 3, brand: "samsung", model: "samsung s25", color: "blue", price: 1100 },
  { id: 4, brand: "iphone", model: "iphone13", color: "gold", price: 1000 },
  { id: 5, brand: "xiaomi", model: "xiaomi not 8", color: "blue", price: 100 },
];

// filter function**********

const colorBlue = allDevice.filter((p) => {
  if (p.color === "blue") {
    return p;
  }
});
console.log(colorBlue);

// find function ************

const idFour = allDevice.find((p) => p.id === 4);
// console.log(idFour);

// forEach function*********

// allDevice.forEach((p) => console.log(p));
// or
allDevice.forEach((p) => {
  if (p.brand === "xiaomi") {
    //     console.log(p);
  }
});

// map function************

const addMoney = allDevice.map((p) => {
  if (p.brand === "iphone") {
    p.price = p.price + 100;
  }
  return p;
});
// console.log(addMoney);
