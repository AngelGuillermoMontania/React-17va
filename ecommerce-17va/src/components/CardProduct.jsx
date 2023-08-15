import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function CardProduct({
  categoria,
  descripcion,
  id,
  img,
  marca,
  modelo,
  precio,
}) {
  return (
    <Card sx={{ width: 245, margin: "0 50px 25px" }}>
      <CardActionArea>
        <CardMedia component="img" height="225" image={img} alt={modelo} />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {marca}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {modelo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {descripcion}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`$ ${precio}`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ShoppingCartIcon size="large" color="primary" />
      </CardActions>
    </Card>
  );
}
