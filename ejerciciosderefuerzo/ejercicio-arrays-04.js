/*
Crear un array que el largo del array sea par, se debe cortar el array
de la mitad para atras y de la mitad para adelante
se debe revisar que hace .slice
*/ 

/*const numeros = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
const numeros2 = [2, 3, 4, 5, 6, 7, 8, 9]

const mitadAtras = numeros.slice(0, numeros.length / 2);
const mitadAdelante = numeros.slice(numeros.length / 2 );



console.log(mitadAtras);
console.log(mitadAdelante);

/* que funcione para numeros impares
en el caso que sea un numero impar se aproxime hacia abajo*/

const numeros3 = [5, 6, 8]

const mitadAtras = numeros3.slice(0, Math.floor(numeros3.length / 2));
const mitadAdelante = numeros3.slice(Math.floor(numeros3.length / 2) );


console.log(mitadAtras);
console.log(mitadAdelante);

