import React from "react";
import { DiReact } from "react-icons/di";
import style from "./Header.module.css";
import style2 from "./Ejemplo.module.css";

export default function Header() {
  return (
    <div>
      <h1 className={style.title}>TITULO</h1>
      <h1 className={style2.title}>TITULO</h1>
      <div>
        <div></div>
      </div>
      <DiReact color="red" size={50} />
    </div>
  );
}

/* 
  CSS MODULES

  - Ya no se trabaja con id, solo con clases
  - el archivo debe llamarse ejemplo.module.css
  - Se importa como una variable o codigo js
  - y se usa como si fuera un objeto: Ejemplo: 
  import style from "ejemplo.module.css"

  <div className={style.cosa}></div>


  ---> NOTA: Css modules funciona, gracias a que a cada clase le asigna un id distinto
  de esta forma se asegura que si repito nombre de clase, no se pisen
 */
