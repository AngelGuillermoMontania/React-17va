import { useState, createContext } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  function agregarProducto(producto) {
    /* Si ya existe la idea es que agregue la cantidad indicada al product ya en el carrito */
    /* si no, agregar ese producto nuevo al carrito */

    const existe = cart.some(
      (productInCart) => productInCart.id === producto.id
    );

    if (existe) {
      // const copiaProducto = cart.find(
      //   (productInCart) => productInCart.id === producto.id
      // );
      // copiaProducto.cantidad = copiaProducto.cantidad + producto.cantidad;
      // console.log(copiaProducto);
      // const newCart = cart.splice(
      //   cart.findIndex((productoInCart) => {
      //     console.log(productoInCart, productoInCart.id == producto.id);
      //     return productoInCart.id == producto.id;
      //   }), // 5
      //   1,
      //   copiaProducto
      // );

      let newCart = cart.map((productoInCart) => {
        if (productoInCart.id === producto.id) {
          return {
            ...productoInCart,
            cantidad: producto.cantidad + productoInCart.cantidad,
          };
        } else {
          return productoInCart;
        }
      });

      setCart(newCart);
    } else {
      setCart([...cart, producto]);
    }

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

  function eliminarProductoPorId(id, cant) {
    const productoBuscado = cart.find((producto) => producto.id === id);
    if (productoBuscado.cantidad - cant <= 0) {
      // EJEMPLO: 6 - 3 <= 0    ----> carrito de ese producto 1
      const productosFiltrados = cart.filter((producto) => producto.id !== id);
      setCart(productosFiltrados);
    } else {
      let nuevoCarrito = cart.map((productoInCart) => {
        if (productoInCart.id === id) {
          return {
            ...productoInCart,
            cantidad: productoBuscado.cantidad - cant,
          };
        } else {
          return productoInCart;
        }
      });
      setCart(nuevoCarrito);
    }
  }

  /* 
  cart = [{1}, {2}]
  linea 41 = buscando y haciendo una copia del objeto buscado. Ejemplo: Copia del objeto {copy 2}
  cart = [{1}, {copy 2}]
  */

  function limpiarCarrito() {
    setCart([]);
  }

  function devolverCantidadPorProducto(id) {
    const existe = cart.some((productInCart) => productInCart.id === id);

    if (existe) {
      return cart.find((productInCart) => productInCart.id === id).cantidad;
    } else {
      return 0;
    }
  }

  const data = {
    cart,
    agregarProducto,
    calcularTotalPrecio,
    calcularTotalProductosEnCarrito,
    eliminarProductoPorId,
    limpiarCarrito,
    devolverCantidadPorProducto,
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

// COMPLEJIDAD TEMPORAL
// ARRAY TIENE 500 millones de objetos dentro
/* for (let i = 0; i < array.length; i++) {
  for (let a = 0; a < array.length; a++) {
    const element = array[a];
  }
}   // 1 dia   ---> Tomen este numero como referencia

recursivo ---->   // 1 hs */
