import { useEffect } from "react"; // ESTO ES UN TIPO DE SUBDIVISION DE IMPORTACION
import { ThreeCircles } from "react-loader-spinner";
import { useParams } from "react-router-dom";

import CardProduct from "./CardProduct";
import useProduct from "./useProduct";

import { Box } from "@mui/material";

export default function ContainCard() {
  const { nameCategory } = useParams();
  const { allProducts, getAllProduct, getCategoryProducts, loading } =
    useProduct();

  useEffect(() => {
    if (nameCategory) {
      // productos de esa categoria
      getCategoryProducts(nameCategory);
    } else {
      // traeme todos
      getAllProduct();
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
      <ThreeCircles
        height="100"
        width="100"
        color="#4fa94d"
        visible={loading}
        ariaLabel="three-circles-rotating"
        outerCircleColor="#FF1515"
        innerCircleColor="#15FF15"
        middleCircleColor="#1515FF"
      />
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
  );
}
