/*
Revisar si un numero es positivo o negativo, 
además en el caso de que sea par por consola debe tirar un beep 
en caso contrario debe tirar un boop
*/
const numero = 7;

if (numero < 0) {
  console.log(`El numero ${numero} es negativo`);
} else if (numero == 0) {
  console.log(`El numero ${numero} es neutro`);
} else if (numero > 0) {
  console.log(`El numero ${numero} es positivo`);
}

if (numero % 2 === 0) {
  console.log("BEEP");
} else {
  console.log("BOOP");
}