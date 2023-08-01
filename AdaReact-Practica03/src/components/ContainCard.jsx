import Card from "./Card";
import Grid from "@mui/material/Unstable_Grid2";

function ContainCard({ characters }) {
  return (
    <Grid
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      sx={{ flexWrap: "wrap" }}
    >
      {characters &&
        characters.map((character) => (
          <Card
            key={character.id}
            fullName={character.fullName}
            title={character.title}
            family={character.family ? character.family : "Desconocida"}
            imageUrl={character.imageUrl}
          ></Card>
        ))}
    </Grid>
  );
}

export default ContainCard;

// EN FUNCION FLECHA, NO COLOCO LAS LLAVES TIENE UN RETURN IMPLICITO
