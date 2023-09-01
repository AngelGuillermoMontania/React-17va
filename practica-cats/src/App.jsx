import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ImagesCat from "./components/ImagesCat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ImagesCat/:catId" element={<ImagesCat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
