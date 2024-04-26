import React, { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [alreadyLogged, setAlreadyLogged] = useState(false);

  return (
    <LoginContext.Provider
      value={{
        alreadyLogged,
        setAlreadyLogged,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
