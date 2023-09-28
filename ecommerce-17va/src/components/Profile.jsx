import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { isAuthenticated, user } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <h1>Email: {user.email}</h1>
      <img src={user.picture} height={240} width={240} />

      {user.email === "angelguillermomontania@gmail.com" ? (
        <h1>Es admin</h1>
      ) : (
        <h1>No es admin</h1>
      )}
    </div>
  );
}

// AGREGAR UN PRODUCTO A LA BD DE FIRESTORE
// import { doc, setDoc } from "firebase/firestore";

// // Add a new document in collection "cities"
// await setDoc(doc(db, "producto", crypto.randomUUID()), {
//   name: "Nike",
//   valor: 80000,
//   categoria: "Deportivas"
// });

// setDoc(doc(db, "producto", crypto.randomUUID()), {
//   name: "Nike",
//   valor: 80000,
//   categoria: "Deportivas"
// }).then(() => {});
