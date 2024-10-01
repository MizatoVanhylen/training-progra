/**
 * Crear algoritmo que tomeun array de
 * objetos y devuelva array de pares
 */
let array = [{
  id: 1,
  name: "Nicolas",
},{
  id: 2,
  name: "Felipe", 
},{id: 3,
  name: "Canchito",

}];

let pares = [
  [1, {ide: 1, name: "Nicolas"}],
  [2, {ide: 2, name: "Felipe"}],
  [3, {ide: 3, name: "Chanchito"}],
]

  function toPairs(arr){
    let pairs = [];
    for(idx in arr ) {
        let elemento = arr[idx];
        pairs [idx] = [elemento.id, elemento];
    }
    return pairs
  }

  let resultado = toPairs(array);
  console.log(resultado);