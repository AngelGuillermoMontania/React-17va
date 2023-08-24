import React from "react";
import { Link } from "react-router-dom";

export default function ContainCard() {
  return (
    <>
      <h1>ContainCard</h1>
      <div>
        {/* <a href="https://www.google.com/" target="_blank">
          Ir al detalle
        </a> */}
        {/* SOLO USAR ETIQUETA <a><a/> PARA REDIRECCIONAR A OTRA PAGINA */}
      </div>

      <Link
        to="/detailProduct"
        style={{
          color: "#FFFFFF",
          fontWeight: "bold",
          backgroundColor: "blue",
          borderRadius: "5px",
          border: "none",
          padding: "10px",
        }}
      >
        Ir al detalle con LINK
      </Link>
    </>
  );
}
