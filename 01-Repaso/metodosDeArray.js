const arr = ["Guille", "Mica"];

const copia = arr.forEach((nombre) => {
  // undefined
  return "Hola" + nombre; // retorna y corta la ejecucion
});

const copia2 = arr.map((nombre) => {
  // ["HolaGuille", "HolaMica"]
  return "Hola" + nombre;
});


//  LOS MAS IMPORTANTES EN REACT - MAP Y FILTER