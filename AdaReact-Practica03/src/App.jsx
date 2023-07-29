import { useState } from "react";
import charactersGOT from "./data.js";
import Header from "./components/Header.jsx";
import Banner from "./components/Banner.jsx";
import AddCharacter from "./components/AddCharacter.jsx";
import ContainCard from "./components/containCard.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [characters, setCharacters] = useState(charactersGOT);

  return (
    <>
      <Header />
      <Banner />
      <AddCharacter />
      <ContainCard characters={characters} />
      <Footer />
    </>
  );
}

export default App;
