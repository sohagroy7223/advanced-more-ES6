class vehicle {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  move() {
    console.log("i can run ");
  }
}

class Bus extends vehicle {
  constructor(name, price, seat) {
    super(name, price);
    this.seat = seat;
  }
}
class trackTor extends vehicle {
  constructor(name, price, load) {
    super(name, price);
    this.load = load;
  }
}

const greenLine = new vehicle("lembor", 1000000);
// console.log(greenLine);

const tata = new trackTor("tata", 340000, "full");
console.log(tata);
