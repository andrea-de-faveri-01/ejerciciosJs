class Rectangle {
  constructor(height, width, color) {
    this.altura = height;
    this.anchura = width;
    this.color = color;
  }
  getArea() {
    return this.altura * this.anchura;
  }
  esMismoColor(otroRectangulo) {
    return this.color === otroRectangulo.color;
  }
  setColor(colorNuevo) {
    this.color = colorNuevo;
  }
}

/**
 * * crear un metodo de clase setColor, que reciba un color
 * * y se lo cambie al objeto que está invocando
 * * el método
 *  */

const rectangulo1 = new Rectangle(3, 2, "green");
console.log(rectangulo1.getArea());

const rectangulo2 = new Rectangle(4, 5, "orange");
console.log(rectangulo2.getArea());

console.log(rectangulo1.esMismoColor(rectangulo2));
console.log(rectangulo2.esMismoColor(rectangulo1));

const rectangulo3 = new Rectangle(5, 3, "green");
console.log(rectangulo3.color);

rectangulo3.setColor("red");
console.log(rectangulo3.color);
