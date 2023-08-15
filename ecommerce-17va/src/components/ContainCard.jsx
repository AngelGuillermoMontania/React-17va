import { useState } from "react"; // ESTO ES UN TIPO DE SUBDIVISION DE IMPORTACION

import CardProduct from "./CardProduct";

import { Box } from "@mui/material";
// IMPORTAR LA  DB
import { db } from "../firebaseConfig";
// IMPORTAR LOS HOOKS DE FIREBASE
import { getDocs, collection } from "firebase/firestore";

export default function ContainCard() {
  const [allProducts, setAllProducts] = useState([]);

  function getProducts() {
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
      })
      .catch((error) => console.log(error));
  }

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
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
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <button
          style={{ padding: "8px", backgroundColor: "purple", color: "white" }}
          onClick={getProducts}
        >
          Ver productos
        </button>
      </Box>
    </Box>
  );
}
