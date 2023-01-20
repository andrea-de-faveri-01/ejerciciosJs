const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

const visitedString = " (Visitado)";
function visitedCity(city) {
  if (city.isVisited === true) {
    return city.name + visitedString;
  } else {
    return city.name;
  }
}

const visitedCities = cities.map(visitedCity);

console.log(visitedCities);
