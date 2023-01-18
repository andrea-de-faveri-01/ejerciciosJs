function findArrayIndex(array, text) {
  return array.indexOf(text);
}

function removeItem(array, text) {
  array.splice(array.indexOf(text), 1);
  return array;
}

arrayBichos = ["Caracol", "Mosquito", "Salamandra", "Ajolote"];

const bicho1 = "Mosquito";
const bicho2 = "Ajolote";

console.log(findArrayIndex(arrayBichos, bicho1));
console.log(findArrayIndex(arrayBichos, bicho2));

//console.log(removeItem(arrayBichos, bicho1))
console.log(removeItem(arrayBichos, bicho2));
