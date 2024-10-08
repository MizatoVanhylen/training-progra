/*
Crear un objeto que diga persona y debe tener 3 notas en una asignatura
la primera nota vale 30%
la segunda vale 20%
y la ultima vale 50%
pasar promedio de la nota segun el porcentaje 

promedio sin tomar en cuenta el porcentaje 


*/

/*const alumno = {
  notaUno: 5.0, 
  notaDos: 4.3,
  notaTres:7.0
};

const porcentaje = {
  treinta: 0.3,
  veinte: 0.2,
  cincuenta: 0.5
};*/

const datosUsuario = {
  porcentaje: {
    treinta: 0.3,
    veinte: 0.2,
    cincuenta: 0.5
  },
  alumno: {
    notaUno: 5.0, 
    notaDos: 4.3,
    notaTres:7.0
  }
};


const { notaUno, notaDos, notaTres } = datosUsuario.alumno;
const { treinta, veinte, cincuenta } = datosUsuario.porcentaje;

const promedioPonderado = ((notaUno * treinta) + (notaDos * veinte) + (notaTres * cincuenta)).toFixed(1);

console.log(`Tu promedio ponderado es de ${promedioPonderado}`);

const promedio = ((notaUno + notaDos + notaTres) / 3).toFixed(1);

console.log(`Tu promedio no ponderado es de ${promedio}`);
