let Harry = {
  name: "Harry",
  age: 40,
  married: true,
  sayHi() {
    console.log("harry say hi");
  },
};

console.log(Harry);
Harry.sayHi();

function add(n1, n2) {
  console.log(n1 + n2);
  return n1 + n2;
}

add(8, -4);
let sum1 = add(1, 2);
console.log(sum1);

//class

let c1 = {
  radius: 5,
  getArea() {
    return Math.PI * this.radius * this.radius;
  },
};

console.log(c1.radius);

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

let c2 = new Circle(5);
console.log(c2.radius);
console.log(c2.getArea());
