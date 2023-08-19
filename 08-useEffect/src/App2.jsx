import { useState } from "react";
import "./App.css";
import Prueba from "./Prueba";
import Prueba2 from "./Prueba2";

function App() {
  const [condition, setCondition] = useState(true);

  function changeCondition() {
    setCondition(!condition);
  }

  return (
    <>
      <button onClick={changeCondition}>Cambiar Condicion</button>{" "}
      {condition ? <Prueba /> : <Prueba2 />}
    </>
  );
}

export default App;
