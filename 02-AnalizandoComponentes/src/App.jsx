/* EJEMPLO 1  */
// import Ejemplo from "./Ejemplo";
//
// function App() {
//   const nombre = "ADA";

//   return (
//     <div>
//       <Ejemplo palabra={nombre} edad="30" provincia="San Juan" pais="sarasa" />
//     </div>
//   );
// }

// /*
//   {
//     palabra: "ADA",
//     apellido: "Students"
//   }
// */

// export default App;

/* EJEMPLO 2 */
import Ejemplo from "./Ejemplo";

function App() {
  const cosas = ["ADA", "ADA", "ADA", "ADA"];

  return (
    <div>
      <Ejemplo cosas={cosas} />
    </div>
  );
}

export default App;
