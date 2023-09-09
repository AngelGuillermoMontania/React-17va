import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Detail from "./components/Detail";
import Count from "./components/Count";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import CountContextProvider from "./context/countContext";

function App() {
  return (
    <BrowserRouter>
      <CountContextProvider>
        <Routes>
          <Route path="/" element={<Count />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </CountContextProvider>
    </BrowserRouter>
  );
}

export default App;
