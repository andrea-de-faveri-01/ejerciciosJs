const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

function numPar(num) {
  return num % 2 === 0;
}

let agesPar = ages.filter(numPar);

console.log(agesPar);
