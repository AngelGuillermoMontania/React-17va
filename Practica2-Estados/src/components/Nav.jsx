import React from "react";
import Logo from "../assets/logoAda.png";
import SearchBar from "./SearchBar.jsx";

function Nav({ onSearch }) {

  return (
    <header>
      <img src={Logo} />
      <h1>Ada Wheater - APP</h1>
      <SearchBar onSearch={onSearch} />
    </header>
  );
}

export default Nav;
