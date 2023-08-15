import { useState, useEffect, useCallback } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [render, setRender] = useState(
    JSON.parse(localStorage.getItem("count")) || 0
  );

  function sumar() {
    setCount((count) => count + 1);
  }

  /* useEffect(() => {
    // SE EJECUTA AL MONTARSE EL COMPONENTE POR QUE NO TIENE DEPENDENCIAS
    setRender(render + 1);

    // EJEMPLO DE USO CLASICO
    // fetch("https://jsonplaceholder.typicode.com/users")   
    //   .then((response) => response.json())
    //   .then((data) => setProducts(data));
  }, []); */

  /* useEffect(() => {
    // SE EJECUTA AL MONTARSE Y ACTUALIZARSE EL COMPONENTE SEGUN LA DEPENDENCIA COLOCADA
    setRender(render + 1);

    // EJEMPLO DE USO CLASICO
    // GUARDO PRIMERO UN ESTADO DE ESTA MANERA const [search, setSearch] = useState("ca");
    // fetch(`https://jsonplaceholder.typicode.com/users?search=${search}`)
    // `https://jsonplaceholder.typicode.com/users?search=c`
    // `https://jsonplaceholder.typicode.com/users?search=ca`
    // .then((response) => response.json())
    // .then((data) => setProducts(data));
    // COMO DEPENDENCIA COLOCARIA EL ESTADO SEARCH
    // FUNCIONARIA UN BUSCADOR DE TIEMPO REAL
  }, [count]); */

  useEffect(() => {
    // LA FUNCION QUE ESTA EN EL RETURN ES LA QUE SE EJECUTA AL DESMONTARSE EL COMPONENTE
    setRender(render + 1);
    localStorage.setItem("count", JSON.stringify(render));
    return () => {
      localStorage.removeItem("count");
    };

    // EJEMPLO DE USO CLASICO
    // Si el componente deja de verse en pantalla o se quita del flujo de componentes, pasa
    // al ciclo de vida de desmonte
  }, [count]);

  // Los ciclos de vida son 3 (Sin incluir la inicializacion):
  // 1- Montaje ---- Mounting ---- onMounted ---- componentDidMount
  // 2- Actualizacion ---- Updating/Update ---- onUpdate ---- componentDidUpdate
  // 3- Desmontaje ---- Unmounting ---- onUnmounted ---- componentWillUnmount

  return (
    <>
      <button onClick={sumar}>count is {count}</button>
      <h5>Render: {render}</h5>
    </>
  );
}

export default App;

// Un componente cuando se renderiza se lee por javascrit dos veces.
// * El el primer paso solo guarda lo que le indiquemos
// * El segundo paso muestra la informacion de lo que guarde en primer lugar

/* USEEFFECT, espera 2 parametro, la funcion que va a ejecutar y las dependencias */
