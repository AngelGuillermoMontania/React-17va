import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ContainCard from "./components/ContainCard";
import Detail from "./components/Detail";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header /> {/* ESTE COMPONENTE SIEMPRE APARECERA */}
      <Routes>
        <Route path="/" element={<ContainCard />} />
        <Route path="/detailProduct/:idProduct" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/* 
PARAMETROS Y QUERIES

-- PARAMETROS

Aparecen o se indican despues de una ruta, seguida de una /



-- QUERIES

Aparecen o se indican despues de una ruta, seguida de un "?" y luego de un "="
Si quiero colocar mas de una, las separo con un "&"

*/
