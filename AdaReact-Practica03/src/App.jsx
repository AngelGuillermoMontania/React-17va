import { useState } from "react";
import charactersGOT from "./data.js";
import Header from "./components/Header.jsx";
import Banner from "./components/Banner.jsx";
import AddCharacter from "./components/AddCharacter.jsx";
import ContainCard from "./components/containCard.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [characters, setCharacters] = useState([]);

  function click() {
    // console.log("PRIMER CONSOLE", characters);
    // setCharacters([
    //   ...characters,
    //   {
    //     id: crypto.randomUUID(),
    //     fullName: "Pycelle",
    //     title: "Grand Maester of the Seven Kingdoms",
    //     family: "",
    //     image: "pycelle.jpg",
    //     imageUrl: "https://thronesapi.com/assets/images/pycelle.jpg",
    //   },
    // ]);
    // /* new Promise()  TE PROMETO QUE VOY A GUARDAR LO QUE ME ESTAS PIDIENDO EN EL ESTADO */
    // console.log("SEGUNDO CONSOLE", characters);
    // 1 - MUESTRA EL PRIMER CONSOLE LOG
    // 2 - nueva Promise, setCharacters...  Cuando termine la promesa, agrego el personaje
    // 3 - muestra el segundo console.log
    // 4 - lo agrego al estado
    //  PROBLEMA!!!!
    // console.log("PRIMERO")
    // setCharacters([
    //   ...characters,
    //   {
    //     id: crypto.randomUUID(),
    //     fullName: "Pycelle",
    //     title: "Grand Maester of the Seven Kingdoms",
    //     family: "",
    //     image: "pycelle.jpg",
    //     imageUrl: "https://thronesapi.com/assets/images/pycelle.jpg",
    //   },
    // ]);
    // localStorage.getItem("characters", characters);
    //  POSIBLE SOLUCION AL PROBLEMA!!!!
    // console.log("PRIMERO")
    // setCharacters([
    //   ...characters,
    //   {
    //     id: crypto.randomUUID(),
    //     fullName: "Pycelle",
    //     title: "Grand Maester of the Seven Kingdoms",
    //     family: "",
    //     image: "pycelle.jpg",
    //     imageUrl: "https://thronesapi.com/assets/images/pycelle.jpg",
    //   },
    // ]);
    // localStorage.setItem("characters", [...characters, {
    //   id: crypto.randomUUID(),
    //   fullName: "Pycelle",
    //   title: "Grand Maester of the Seven Kingdoms",
    //   family: "",
    //   image: "pycelle.jpg",
    //   imageUrl: "https://thronesapi.com/assets/images/pycelle.jpg",
    // }]);
  }

  return (
    <>
      <Header />
      <Banner />
      <AddCharacter />
      <ContainCard characters={characters} />
      <Footer />
      <button onClick={click}>CLICK</button>
    </>
  );
}

export default App;
