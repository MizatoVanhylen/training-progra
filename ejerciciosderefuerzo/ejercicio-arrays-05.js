/**
 * Crear un array con pokemones  y agregar un pokemon nuevo  al array y
 * realizar if que debe hacer que haga que en el caso
 * de que el nombre del pokemon tenga más de 8 caracteres lo agregue y 
 * si tienes menos de ocho caracteres agrege un ditto 
 * .push
 */

const pokemon = ["Eevee", "Flareon", "Vaporeon", "Jolteon"];
console.log(pokemon);

const evolucion = "Espeon"

if (evolucion.length >= 8){pokemon.push(evolucion)
  console.log(`Se agrega ${evolucion} a la lista`)
  } else { pokemon.push("Ditto");
    console.log(`Se agrega Ditto a la lista`)
  }


  

