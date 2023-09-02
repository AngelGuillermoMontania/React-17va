import { useEffect, useState } from "react";

import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useParams } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

export default function DetailProduct() {
  const { idProduct } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    const productos = collection(db, "Producto");
    const ref = doc(productos, idProduct);
    getDoc(ref)
      .then((res) => {
        setProduct({
          ...res.data(),
          id: res.id,
        });
      })
      .catch((error) => console.log(error));
  }, [idProduct]);

  return (
    <Container>
      <Card
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          margin: "50px 0",
        }}
      >
        <CardMedia
          sx={{ height: 500, width: "60%" }}
          image={product.img}
          title={product.id}
          component="div"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h3" component="div">
              Marca: {product.marca}
            </Typography>
            <Typography gutterBottom variant="h4" component="div">
              Modelo: {product.modelo}
            </Typography>
            <Typography gutterBottom variant="h4" component="div">
              Categoria: {product.categoria}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.descripcion}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`$ ${product.precio}`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              En stock: {product.stock}
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <Button size="medium" variant="contained">
              Agregar al carrito <ShoppingCart size="medium" />
            </Button>
          </CardActions>
        </Box>
      </Card>
    </Container>
  );
}
