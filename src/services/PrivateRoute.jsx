import React from "react";
import LoginPage from "../pages/LoginPage/LoginPage";

const PrivateRoute = ({ Rota }) => {
  const signed = true;
  if (signed == false) {
    return <LoginPage />;
  } else {
    return <Rota />;
  }
};

export default PrivateRoute;
