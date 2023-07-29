// import {useState} from "react"

import {
  Card as CardMUI,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function Card({ fullName, title, family, imageUrl }) {
  // SI NECESITASE UN ESTADO Y ME ESTOY IMPORTANDO *(todo) as React
  //  const [ejemplo, setEjemplo] = React.useState("djksahb")

  return (
    <CardMUI
      sx={{ maxWidth: 345, width: 250, height: 550, margin: "20px 50px" }}
    >
      <CardMedia sx={{ height: 300 }} image={imageUrl} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          {fullName}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Familia: {family}
        </Typography>
      </CardContent>
    </CardMUI>
  );
}
