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
    </div>
  );
}
