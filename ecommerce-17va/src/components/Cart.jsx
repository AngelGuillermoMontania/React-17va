import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

export default function Cart() {
  const { cart, calcularTotalPrecio } = useContext(CartContext);

  return (
    <Container>
      {cart ? (
        cart.map((product) => (
          <Card
            key={product.id}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
              margin: "50px 0",
            }}
          >
            <CardMedia
              sx={{ height: 200, width: 300 }}
              image={product.img}
              title={product.id}
              component="div"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "70%",
              }}
            >
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  Marca: {product.marca}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  Modelo: {product.modelo}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  Categoria: {product.categoria}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.descripcion}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {`$ ${product.precio}`}
                </Typography>
              </CardContent>
              <Typography variant="h5" color="text.secondary">
                Cantidad: {product.cantidad}
              </Typography>
              <CardActions
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Button
                  size="medium"
                  variant="contained"
                  // onClick={() =>
                  //   agregarProducto({ ...product, cantidad: count })
                  // }
                >
                  Eliminar del carrito <ShoppingCart size="medium" />
                </Button>
              </CardActions>
            </Box>
          </Card>
        ))
      ) : (
        <h1>NO HAY PRODUCTOS EN EL CARRITO</h1>
      )}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h1>TOTAL:</h1>
        <h1>$ {calcularTotalPrecio()}</h1>
      </div>
    </Container>
  );
}
