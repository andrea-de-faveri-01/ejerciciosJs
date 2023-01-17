const movies = [
  {
    title: "Madaraspar",
    duration: 192,
    categories: ["comedia", "aventura"],
  },
  {
    title: "Spiderpan",
    duration: 122,
    categories: ["aventura", "acción"],
  },

  {
    title: "Solo en Whatsapp",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "El gato con guantes",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];
const moviesCategories = [];
const comediaCat = [];
const aventuraCat = [];
const acciónCat = [];
const thrillerCat = [];
const animaciónCat = [];

for (const movie of movies) {
  if (movie.categories.includes("comedia")) {
    comediaCat.push(movie);
  } if (movie.categories.includes("aventura")) {
    aventuraCat.push(movie);
  } if (movie.categories.includes("acción")) {
    acciónCat.push(movie);
  } if (movie.categories.includes("thriller")) {
    thrillerCat.push(movie);
  } if (movie.categories.includes("animación")) {
    animaciónCat.push(movie);
  }
}
console.log(comediaCat);
console.log(aventuraCat);
console.log(acciónCat);
console.log(thrillerCat);
console.log(animaciónCat);

//moviesCategories.push(comediaCat, aventuraCat, acciónCat, thrillerCat, animaciónCat)

//console.log(moviesCategories)