import { useContext } from "react";

import { FavoriteContext } from "../context/FavoriteContext";

export default function ContainFavorites() {
  const { allFavorites } = useContext(FavoriteContext);

  return (
    <div>
      {/* RECORRER Y MOSTRAR UN FAVORITECARD POR CADA UNO del array allFavorites*/}
    </div>
  );
}
