import React, { useContext } from "react";
import LoginPage from "../pages/LoginPage/LoginPage";
import { LoginContext } from "./LoginContext";

const PrivateRoute = ({ Rota }) => {
  const { alreadyLogged } = useContext(LoginContext);

  if (alreadyLogged == false) {
    return <LoginPage />;
  } else {
    return <Rota />;
  }
};

export default PrivateRoute;
