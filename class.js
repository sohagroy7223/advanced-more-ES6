class product {
  constructor(name, price, color) {
    this.malik = "sohag roy";
    this.name = name;
    this.price = price;
    this.color = color;
  }

  details() {
    console.log(`this is ${this.name} product ar details`);
  }
}

const iphone = new product("iphone", 1200, "blue");
iphone.details();
console.log(iphone);

const xiaomi = new product("redmi", 1000, " blue");
console.log(xiaomi);
