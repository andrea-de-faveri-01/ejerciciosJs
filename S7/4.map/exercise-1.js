const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

function soloName(user) {
  return user.name;
}

let arrayNames = users.map(soloName);

console.log(arrayNames);
