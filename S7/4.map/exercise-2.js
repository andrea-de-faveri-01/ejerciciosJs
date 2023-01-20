const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const newName = "Anacleto";
function soloNameA(user) {
  if (user.name[0] === "A") {
    return (user.name = newName);
  } else {
    return user.name;
  }
}

let arrayNames = users.map(soloNameA);

console.log(arrayNames);
