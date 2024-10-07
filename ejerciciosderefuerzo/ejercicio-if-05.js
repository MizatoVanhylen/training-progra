/*
Realizar un ejercicio que compare dos números  y
que diga cual de los dos es mayor
primero
segundo 
o iguales
*/

const numero = {
    primero: 7,
    segundo: 7
};

const { primero, segundo } = numero;

if (primero > segundo) {
    console.log(`El numero ${primero} es Mayor que el numero ${segundo}`);
} else if (primero < segundo) {
    console.log(`El numero ${segundo} es Mayor que el numero ${primero}`);
} else {
    console.log(`El numero ${primero} es igual al numero ${segundo}`);
}
