/* EJEMPLO 1 */

// // function Ejemplo() {
// //   return (
// //     <>
// //       <h1>Hola Soy El Ejemplo</h1>
// //       <p>Bueno, soy la etiqueta p</p>
// //     </>
// //   );
// // }

// function Ejemplo({ palabra, apellido = "Students" }) {
//   // const nombre = "ADA";
//   // const edad = false;

//   const estudios = "Programadora";
//   console.log(prop);
//   return (
//     <>
//       <h1>Hola Soy El Ejemplo</h1>
//       {/* <p>Bueno, soy la etiqueta p</p> */}
//       {/* <h1>Hola, me llamo {}</h1> */}
//       {/* <h1>Hola, mi edad es {edad ? "Es true" : "Es false"}</h1> */}
//       <h1>
//         Hola, mi nombre es {`${palabra} ${apellido}`} y viene desde el
//         componente App.jsx
//       </h1>
//       <input type="text"></input>
//     </>
//   );
// }

// export default Ejemplo;

// function Ejemplo() {
//   return (
//     <>
//       <h1>Hola Soy El Ejemplo</h1>
//       <p>Bueno, soy la etiqueta p</p>
//     </>
//   );
// }

/* EJEMPLO 2 */
function Ejemplo({ cosas }) {
  return (
    <div>
      {cosas.map((palabra, index) => (
        <div key={index}>
          <h1>{palabra}</h1>
          <h2>Hola</h2>
        </div>
      ))}
    </div>
  );
}

export default Ejemplo;
