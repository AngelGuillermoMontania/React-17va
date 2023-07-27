import { useState } from "react";
import charactersGOT from "./data.js";

function App() {
  const [characters, setCharacters] = useState(charactersGOT);
  console.log(characters);
  return <div></div>;
}

export default App;
