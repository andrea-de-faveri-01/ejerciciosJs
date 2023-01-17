const peliculasPequeñas = [];
const peliculasMedianas = [];
const peliculasGrandes = [];

const movies = [
    {name: "Your Name", durationInMinutes: 130},
    {name: "Pesadilla antes de navidad", durationInMinutes: 225}, 
    {name: "Origen", durationInMinutes: 165}, 
    {name: "El señor de los anillos", durationInMinutes: 967},
    {name: "Solo en casa", durationInMinutes: 214},
    {name: "El jardin de las palabras", durationInMinutes: 40}];

for (let i = 0; i < movies.length; i++) {
    if (movies[i].durationInMinutes < 100) {
        peliculasPequeñas.push(movies[i])
    }

    else if (movies[i].durationInMinutes >= 100 && movies[i].durationInMinutes < 200) {
        peliculasMedianas.push(movies[i])
    } 
    else {
        peliculasGrandes.push(movies[i])
    }
    
}

console.log(peliculasPequeñas);
console.log(peliculasMedianas);
console.log(peliculasGrandes);