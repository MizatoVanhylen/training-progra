/*
un array de  cuatro elementos que cualquier valor que este duplicado lo elimine 
*/

const pokemon = ["Eevee", "Flareon", "Vaporeon", "Jolteon", "Espeon", "Jolteon", "Umbreon", "Flareon"];

console.log(pokemon);

const duplicados = [...new Set(pokemon)];

console.log(duplicados);