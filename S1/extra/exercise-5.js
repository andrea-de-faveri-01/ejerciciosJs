let sellTot = 0
let sellAverage = 0
const products = [
    {name: 'Gorra de rodilla', sellCount: 10},
    {name: 'Pantalón de pana', sellCount: 302},
    {name: 'Reloj de papel albal', sellCount: 23},
    {name: 'Inpar de zapatos', sellCount: 6}
];

for (let i = 0; i < products.length; i++) {
  sellTot += products[i].sellCount;
  sellAverage = sellTot/products.length;
}
console.log(sellAverage)