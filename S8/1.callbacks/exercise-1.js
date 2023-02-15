const numbersList = [];

function sum(a, b){
return a + b
}

function substract(a, b){
return a - b
}

function father(a, b, callback){
numbersList.push(callback(a, b))
}

father(33,7, sum)
father(49, 22, substract)
father(5, 7, sum)

console.log(numbersList);