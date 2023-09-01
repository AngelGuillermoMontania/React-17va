import { useState } from "react";
import "./App.css";
import useCount from "./useCount.js";
import Detail from "./Detail";

function App() {
  const data = useCount();

  return (
    <>
      <div className="card">
        <button onClick={data.sumar}>SUMAR</button>
        <button onClick={data.restar}>RESTAR</button>
      </div>
      <h1>count is {data.count}</h1>
      {/* <Detail /> */}
    </>
  );
}

export default App;

/* 
Cosas a tener en cuenta de los Custom Hooks
Por convención, los Custom Hooks empiezan por use, por ejemplo, useCounter.
Dos componentes usando el mismo Hook NO comparten estado. Los Custom Hooks son un mecanismo para reutilizar lógica de estado, pero cada vez que usas uno todo estado y efecto dentro de este son aislados completamente.

 */
