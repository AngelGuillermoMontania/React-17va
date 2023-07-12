import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const sumar = () => {
    setCount(count + 1);
    console.log(setCount);
  };
  //  count++  =  count = count + 1

  const restar = () => {
    setCount(count - 1);
  };
  // EVENT de un evento
  return (
    <>
      <h1>{count}</h1>
      <div>
        <button onClick={sumar}>Sumar</button>
        <button onClick={restar}>Restar</button>
        {count === 5 ? <h1>SOY CINCO</h1> : ""}
      </div>
    </>
  );
}

// A un evento en React debo pasarle la declaracion de una funcion y no la ejecucion
// a un estado siempre se le llama por convencion ===>    [nombreEstado, setNombreEstado]
// Lo que puedo colocar para iniciar un estado es cualquier tipo de dato   useState(false) useState([])  useState({})  useState("")
// Puedo usar la cantidad que quiera de estados en un componente
// NO, se demora. En realidad por detras tiene una promesa

export default App;
