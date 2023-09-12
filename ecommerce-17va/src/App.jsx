import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ContainCard from "./components/ContainCard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DetailProduct from "./components/DetailProduct";
import CartContextProvider from "./context/CartContext";
import Cart from "./components/Cart";

// const router = createBrowserRouter([   /* ENRUTAMIENTO AVANZADO --- HACEN LO MISMO QUE EL UTILIZADO EN LA APP */
//   {
//     path: "/",
//     element: <Header />,
//     children: [
//       {
//         path: "/detailProduct/:idProduct",
//         element: <DetailProduct />,
//       },
//       {
//         path: "/category/:nameCategory",
//         element: <DetailProduct />,
//       },
//     ],
//   },
//   {
//     path: "/admin",
//     children: [
//       {
//         path: "/crearProducto",
//         element: <CreateProduct />,
//       },
//     ],
//   },
// ]);

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<ContainCard />} />
          <Route path="/category/:nameCategory" element={<ContainCard />} />
          <Route path="/detailProduct/:idProduct" element={<DetailProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<h1>NOT FOUND</h1>} />
        </Routes>
      </CartContextProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

/* 
--------- NOTAS FIRESTORE -----------

db ===> Importacion de la configuracion de firestore en archivo firebaseConfig.js

collection ===> Accede a una coleccion de firestore, espera como parametro el `db` previamente mencionado y 
el nombre de la coleccion a consultar. Estructura: collection(configDatabase, "nombreColeccion")

getDocs ===> Consultar mas de un documento en la coleccion. Estructura: getDocs(documentosAConsultar)
        .then((res) => {
          const array = res.docs.map((elem) => {
            return {
              ...elem.data(),
              id: elem.id,
            };
          });
          setState(array);
        })
        .catch((error) => console.log(error));

doc ====> Espera por la instancia del llamado a `collection` y el id del documento a consultar

getDoc ===> Consulta solo por un documento. En este caso no es necesario el map ya que es un solo documento. Estructura: getDoc(ref)
      .then((res) => {
        setState({
          ...res.data(),
          id: res.id,
        });
      })
      .catch((error) => console.log(error));

query/where ===> Sirve para enviar una consulta con filtros u ordenamiento a la base de datos. Ejemplo: query(productos, where("categoria", "==", nameCategory))
        
*/
