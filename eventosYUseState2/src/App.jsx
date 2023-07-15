import { useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons";

// function App() {
//   const [nombres, setNombres] = useState(["ADA"]); //   [STRINGS]

//   //const [estado, setEstado] = useState(valorInicial)

//   /* document.querySelector("#btn").addEventListener("click", (event) => {

//   }) */

//   const sumar = (event) => {
//     setNombres([...nombres, "GUILLE"]);
//     localStorage.setItem("nombres", JSON.stringify(nombres));
//   };

//   return (
//     <>
//       {nombres.map((nombre, index) => (
//         <h1 key={index}>{nombre}</h1>
//       ))}
//       {/* <ContainCard city={estado} sumar={sumar} */}
//       <button onClick={sumar}>SUMAR</button>
//       {/* <button onClick={(event) => {console.log(event)}}>SUMAR</button> */}
//     </>
//   );
// }

function App() {
  const [count, setCount] = useState(0);

  const sumar = () => {
    setCount(count + 1);
  };

  console.log("HOLA");

  return (
    <>
      <h1>{count}</h1>
      <Buttons sumar={sumar} />
    </>
  );
}

// NOTA: El set de un estado reemplaza el estado.

export default App;
