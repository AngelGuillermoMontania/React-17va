// EJEMPLO CONDICIONAL CORTO
// function App() {

//   const darkMode = null

//   return <div style={{backgroundColor: darkMode || "white"}}>
//     <h1>dshja</h1>
//   </div>;
// }

// export default App;

/* RENDERIZANDO ELEMENTOS MEDIANTE UNA FUNCION */
// function App() {
//   const mostrarNombre = () => {
//     return <h1>GUILLE</h1>;
//   };
//   return <div>{mostrarNombre()}</div>;
// }

// export default App;

/* UTILIZANDO IMAGENES */

import Test from "./assets/test.jpg";
import Test2 from "./assets/react.svg";
import Test3 from "./assets/test.jpg";

function App() {
  return (
    <div>
      <h1>dshja</h1>
      <img src={Test} alt="not found" />
      <img src={Test2} alt="not found" />
      <img src={Test3} alt="not found" />
      <img src="http://placekitten.com/200/300" />
    </div>
  );
}

export default App;
