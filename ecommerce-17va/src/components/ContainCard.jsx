import { Box } from "@mui/material";
import { useState } from "react";
import CardProduct from "./CardProduct";

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
    <Box
      sx={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}
    >
      {allProducts.map((product) => (
        <CardProduct />
      ))}
      <button onClick={getProducts}>Ver Productos</button>
    </Box>
  );
}
