// class product {
//   constructor(name, price, color) {
//     this.malik = "sohag roy";
//     this.name = name;
//     this.price = price;
//     this.color = color;
//   }

//   details() {
//     console.log(`this is ${this.name} product ar details`);
//   }
// }

// const iphone = new product("iphone", 1200, "blue");
// iphone.details();
// console.log(iphone);

// const xiaomi = new product("redmi", 1000, " blue");
// xiaomi.details();
// console.log(xiaomi);

class clothing {
  constructor(what, price, color) {
    this.woner = "sohga fashion";
    this.brand = what;
    this.price = price;
    this.color = color;
  }
  details() {
    console.log(`this ${this.brand} full details`);
  }
}

const pant = new clothing("calvin", 800, "naviblue");
pant.details();
console.log(pant);

const hodi = new clothing("Hodi", 1200, "sky-blue");
hodi.details();
console.log(hodi);
