function swap(array, pos1, pos2){
let box = array[pos1]
array[pos1] = array[pos2]
array[pos2] = box
return array
}


let arrayGol = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']



console.log(swap(arrayGol, 0, 3))