import { Button } from "@mui/material";
import useCount from "./useCount";
import { ShoppingCart } from "@mui/icons-material";

export default function CountDeleteCart({ cantidad, onDelete }) {
  const { restarCount, count, sumarCount, resetCount } = useCount();

  return (
    <>
      <div>
        <Button
          onClick={() => {
            if (count + 1 <= cantidad) sumarCount();
          }}
        >
          Agregar Cantidad A Eliminar
        </Button>
        <h3>{count}</h3>
        <Button onClick={restarCount}>Quitar Cantidad A Eliminar</Button>
      </div>
      <Button
        size="medium"
        variant="contained"
        onClick={() => {
          onDelete(count);
          resetCount();
        }}
      >
        Eliminar del carrito <ShoppingCart size="medium" />
      </Button>
    </>
  );
}
