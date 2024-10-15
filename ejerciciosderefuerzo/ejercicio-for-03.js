/*
un ejercicio que permita saber si un numero es primo o no
*/
const numero = primo(numero);
 
if (numero <= 1) {
    numero = false;
}

  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      numero = false;
    }
  }

 numero = true;

const numero = parseInt(prompt("Ingrese un número:"));
const primo = primo(numero);

if (primo) {
  alert(numero + " es un número primo.");
} else {
  alert(numero + " no es un número primo.");
}
