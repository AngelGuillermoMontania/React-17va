import CardCharacter from "./CardCharacter.jsx";
import PaginationApp from "./PaginationApp.jsx";

import { Box } from "@mui/material";

export default function ContainCards({
  characters,
  setCurrentPage,
  currentPage,
}) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          padding: "20px",
        }}
      >
        {characters.length > 0 &&
          characters.map((data) => {
            return <CardCharacter data={data} key={data.id} />;
          })}
      </Box>
      <PaginationApp
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
}
