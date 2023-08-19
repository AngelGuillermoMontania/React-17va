import { useState, useEffect } from "react"; // ESTO ES UN TIPO DE SUBDIVISION DE IMPORTACION
// import { PacmanLoader } from "react-spinners";
import { ThreeCircles } from "react-loader-spinner";

import CardProduct from "./CardProduct";

import { Box } from "@mui/material";
// IMPORTAR LA  DB
import { db } from "../firebaseConfig";
// IMPORTAR LOS HOOKS DE FIREBASE
import { getDocs, collection } from "firebase/firestore";

export default function ContainCard() {
  const [allProducts, setAllProducts] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    /* ACCEDO A LA COLECCION QUE QUIERO CON EL HOOK COLLECTION */
    const productos = collection(db, "Producto");

    /* ACCEDO A LOS DOCUMENTOS DE LA COLLECTION BUSCADA */
    getDocs(productos)
      .then((res) => {
        const products = res.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        setAllProducts(products);
        // setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexWrap: "wrap",
        minHeight: "70vh",
      }}
    >
      {/* <PacmanLoader loading={true} color="#FFFFFF" size="70" />
      {allProducts.map((product) => (
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
      ))}
      */}
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
