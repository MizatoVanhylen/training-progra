/*
un for que sume todos los valores de un array 
*/

const numeros = [3, 50,45 ,22 ,60 ,39, 55];
let total = 0;
for(let i = 0; i < numeros.length; i++ ){
  console.log("Los numeros de la lista son los siguientes: ", numeros[i])
  total = total + numeros[i];
};

console.log("El total de la suma es ", total );

/*
los numeros se deben ingresar por chrome
*/