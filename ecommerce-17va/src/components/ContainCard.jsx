import { useState, useEffect } from "react"; // ESTO ES UN TIPO DE SUBDIVISION DE IMPORTACION
// import { PacmanLoader } from "react-spinners";
import { ThreeCircles } from "react-loader-spinner";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useParams } from "react-router-dom";

import CardProduct from "./CardProduct";

import { Box } from "@mui/material";
// IMPORTAR LA  DB
// IMPORTAR LOS HOOKS DE FIREBASE

export default function ContainCard() {
  const [allProducts, setAllProducts] = useState([]);

  const { nameCategory } = useParams();

  useEffect(() => {
    /* ACCEDO A LA COLECCION QUE QUIERO CON EL HOOK COLLECTION */
    const productos = collection(db, "Producto");

    // where = donde
    if (nameCategory) {
      // Si existe un parametro en la url, buscara esa categoria
      const q = query(productos, where("categoria", "==", nameCategory));
      getDocs(q)
        .then((res) => {
          const products = res.docs.map((product) => {
            return {
              ...product.data(),
              id: product.id,
            };
          });
          setAllProducts(products);
        })
        .catch((error) => console.log(error));
    } else {
      // Si no, mostrare todos los productos
      getDocs(productos)
        .then((res) => {
          const products = res.docs.map((product) => {
            return {
              ...product.data(),
              id: product.id,
            };
          });
          setAllProducts(products);
        })
        .catch((error) => console.log(error));
    }
  }, [nameCategory]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexWrap: "wrap",
        minHeight: "85vh",
      }}
    >
      {allProducts.length ? (
        allProducts.map((product) => (
          <CardProduct
            categoria={product.categoria}
            descripcion={product.descripcion}
            img={product.img}
            id={product.id}
            marca={product.marca}
            modelo={product.modelo}
            precio={product.precio}
            key={product.id}
          />
        ))
      ) : (
        <ThreeCircles
          height="100"
          width="100"
          color="#4fa94d"
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor="#FF1515"
          innerCircleColor="#15FF15"
          middleCircleColor="#1515FF"
        />
      )}
    </Box>
  );
}
