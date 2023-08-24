import { useParams } from "react-router-dom";

export default function Detail() {
  const { idProduct } = useParams(); /* USE PARAMS ME SIRVE PARA ACCEDER
   A LOS PARAMETROS QUE INDIQUE EN LA ROUTE */

  return <h1>Detail del producto con id {idProduct}</h1>;
}
