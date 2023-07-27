import { useState } from "react";

// DONDE HAGO EL GETITEM DE LOCALSTORAGE

export default function App3() {
  const [stock, setStock] = useState(
    JSON.parse(localStorage.getItem("stock")) || []
  );

  function agregarItems() {
    localStorage.setItem("stock", JSON.stringify([...stock, { cantidad: 3 }]));
    setStock([...stock, { cantidad: 3 }]);
  }

  function eliminarItems(e) {
    // const filter = stock.filter(item => item.id !== e.target.id)
    // localStorage.setItem("stock", JSON.stringify([...stock, { cantidad: 3 }]));
    // setStock(filter)
  }

  return (
    <div>
      <button onClick={agregarItems}>AGREGAR</button>
      {stock.map((item) => (
        <p key={crypto.randomUUID()}>{item.cantidad}</p>
      ))}
      <button onClick={eliminarItems} id="dsajdas">
        X
      </button>
    </div>
  );
}
