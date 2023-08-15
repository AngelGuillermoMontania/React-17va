import React, { useEffect, useState } from "react";

export default function Prueba() {
  const [estadoEjemplo, setEstadoEjemplo] = useState("");

  useEffect(() => {
    localStorage.setItem("ejemplo", JSON.stringify(estadoEjemplo));
    return () => {
      localStorage.removeItem("ejemplo");
    };
  }, []);
  return <h1>Prueba 1 SI ES TRUE {estadoEjemplo}</h1>;
}
