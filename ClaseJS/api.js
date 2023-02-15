export function getClimaPorDiaSemana(dia){
    fetch(`http://api.clima.com/${dia}`)
    .then(function (resultado){
console.log(resultado);
    })
    .catch(function (err){
         console.log(err);
    })
    
}