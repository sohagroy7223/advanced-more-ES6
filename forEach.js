const products = [
  { id: 1, name: "iphone", model: "iphone17", color: "gold", price: 1300 },
  { id: 2, name: "xiaomi", model: "xiaomi not 13", color: "blue", price: 200 },
  { id: 3, name: "samsung", model: "samsung s25", color: "blue", price: 1100 },
  { id: 4, name: "iphone", model: "iphone13", color: "gold", price: 1000 },
  { id: 5, name: "xiaomi", model: "xiaomi not 8", color: "blue", price: 100 },
];
products.forEach((product) => {
  if (product.color === "gold") {
    // console.log(product);
  }
});

products.forEach((element) => {
  if (element.price >= 1000) {
    console.log(element);
  }
});
