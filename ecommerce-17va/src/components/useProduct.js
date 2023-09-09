// IMPORTAR LA  DB
import { useState } from "react";
import { db } from "../firebaseConfig";
// IMPORTAR LOS HOOKS DE FIREBASE
import {
  getDocs,
  collection,
  query,
  where,
  getDoc,
  doc,
} from "firebase/firestore";

function useProduct() {
  const [allProducts, setAllProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ACCEDO A LA COLECCION QUE QUIERO CON EL HOOK COLLECTION */
  const productos = collection(db, "Producto");

  function getAllProduct() {
    setLoading(true);
    setAllProducts([]);
    // Si no, mostrare todos los productos
    getDocs(productos)
      .then((res) => {
        const products = res.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        setAllProducts(products);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }

  function getCategoryProducts(nameCategory) {
    setLoading(true);
    setAllProducts([]);

    const q = query(productos, where("categoria", "==", nameCategory));
    getDocs(q)
      .then((res) => {
        const products = res.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        setAllProducts(products);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }

  function getDetailProduct(idProduct) {
    const ref = doc(productos, idProduct);
    getDoc(ref)
      .then((res) => {
        setProduct({
          ...res.data(),
          id: res.id,
        });
      })
      .catch((error) => console.log(error));
  }

  return {
    allProducts,
    product,
    getAllProduct,
    getCategoryProducts,
    getDetailProduct,
    loading,
  };
}

export default useProduct;
