import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CountContext } from "../context/countContext";

export default function Detail() {
  const { count, sumar, restar, reset } = useContext(CountContext);
  return (
    <div style={{ margin: "100px 0" }}>
      <h1>Contador: {count}</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={sumar}>SUMAR</button>
        <button onClick={restar}>RESTAR</button>
      </div>
      <div>
        <button onClick={reset}>RESET</button>
      </div>
      <Link to="/">IR A HOME</Link>
    </div>
  );
}
