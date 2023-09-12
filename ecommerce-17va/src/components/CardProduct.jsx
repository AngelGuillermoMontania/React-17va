import { Link } from "react-router-dom";
import { useContext } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { CartContext } from "../context/CartContext";

export default function CardProduct(prop) {
  const { agregarProducto } = useContext(CartContext);

  return (
    <Card sx={{ width: 245, margin: "0 50px 25px" }}>
      <Link
        to={`/detailProduct/${prop.id}`}
        style={{ textDecoration: "none", color: "white" }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="225"
            image={prop.img}
            alt={prop.modelo}
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {prop.marca}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {prop.modelo}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {prop.descripcion}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`$ ${prop.precio}`}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <ShoppingCartIcon
          size="large"
          sx={{
            color: "#00FF00",
          }}
          onClick={() => agregarProducto({ ...prop, cantidad: 1 })}
        />
      </CardActions>
    </Card>
  );
}
