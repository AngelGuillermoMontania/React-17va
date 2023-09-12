import { useState, createContext } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // [{nombre: "nike", cantidad: 2}]

  function agregarProducto(producto) {
    setCart([...cart, producto]);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Producto agregado al carrito",
      showConfirmButton: false,
      timer: 2500,
    });
  }

  function calcularTotalPrecio() {
    const total = cart.reduce((acc, element) => {
      return acc + element.precio * element.cantidad;
    }, 0);
    return total;
  }

  function calcularTotalProductosEnCarrito() {
    const total = cart.reduce((acc, element) => {
      return acc + element.cantidad;
      // [{cantidad: 2}, {cantidad: 5}]
      // Primer paso inicia el acc en 0
      // segundo pago comienza a iterar....    0 + 2     ===> acc = 2
      // siguiente iteracion...  2 + 5      ====> acc = 7
    }, 0);
    return total;
  }

  const data = {
    cart,
    agregarProducto,
    calcularTotalPrecio,
    calcularTotalProductosEnCarrito,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;

// const casa = {
//   color: "crema",
//   tamaño: "2 plantas",
//   m2: 152,
// };

// casa.color;
// casa["color"];

/* 
const arr = []

map   filter   some   findIndex

// agarro el arr y mapeao despues filtro despues hago el some y despues el findIndez
arr.map(elem => elem > 5).filter(num => num - 7).some(elem => elem.name !== "hola").finIndex()

// mapeo el arr
const arrMapeado = arr.map(elem => elem > 5)

// filtro el array ya mapeado
const arrFiltrado = arrMapeado.filter(num => num - 7)

// filtro el array ya mapeado
const arrFiltrado = arrMapeado.filter(num => num - 7)

*/
