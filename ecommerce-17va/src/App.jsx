import { useState } from "react";

import ContainCard from "./components/ContainCard";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <ContainCard />
      <Footer />
    </div>
  );
}

export default App;
