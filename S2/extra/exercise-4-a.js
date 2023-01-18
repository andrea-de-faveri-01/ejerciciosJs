function findArrayIndex(array, text) {
  return array.indexOf(text);
}

arrayBichos = ["Caracol", "Mosquito", "Salamandra", "Ajolote"];

const bicho1 = "Mosquito";
const bicho2 = "Salamandra";

console.log(findArrayIndex(arrayBichos, bicho1));
console.log(findArrayIndex(arrayBichos, bicho2));
