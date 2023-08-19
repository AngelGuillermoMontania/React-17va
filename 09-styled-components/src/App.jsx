import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import styled from "styled-components";
import Header from "./Header";

const Button = styled.button`
  background-color: green;
  color: white;
  border: none;
  padding: 1rem;
`;

const ButtonSuccess = styled.button`
  background-color: ${(props) => (props.$success ? "blue" : "red")};
  color: white;
  border: none;
  padding: 1rem;
`;

const ButtonError = styled(Button)`
  background-color: red;
`;

function App() {
  return (
    <>
      <Header />
      {/* STYLED-COMPONENTS */}
      <Button>HACE CLICK</Button>
      <ButtonSuccess $success>HACE CLICK</ButtonSuccess>
      <ButtonError>ERROR</ButtonError>

      {/* CSS MODULED */}
      {/* <button className="styles.btn"></button>
      <button className="styles.btn"></button> */}
    </>
  );
}

export default App;
