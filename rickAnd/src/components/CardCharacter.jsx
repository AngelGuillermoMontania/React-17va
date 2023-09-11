import { useContext } from "react";

import { Typography, CardMedia, CardContent, Card } from "@mui/material";
import { Link } from "react-router-dom";

import { AiOutlineStar, AiFillStar } from "react-icons/ai";

import { FavoriteContext } from "../context/FavoriteContext";

export default function CardCharacter({ data }) {
  const { getFavorite, addFavorite, removeFavorite } =
    useContext(FavoriteContext);

  return (
    <Card
      sx={{
        width: 250,
        margin: "10px 0",
        boxShadow: "14px 14px 13px -6px rgba(0,0,0,0.50)",
        position: "relative",
      }}
    >
      {getFavorite(data.id) ? (
        <AiFillStar size={50} onClick={() => removeFavorite(data)} />
      ) : (
        <AiOutlineStar size={50} onClick={() => addFavorite(data)} />
      )}
      <Link
        to={`/detailCharacter/${data.id}`}
        style={{ textDecoration: "none" }}
      >
        <CardMedia sx={{ height: 250 }} image={data.image} title={data.name} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              zIndex: "5",
              position: "relative",
            }}
          >
            {data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            status: {data.status}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
}
