const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

function numMas18(num) {
  return num > 18;
}

agesMas18 = ages.filter(numMas18);

console.log(agesMas18);
