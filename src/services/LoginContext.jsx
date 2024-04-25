import React, { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);

  return (
    <LoginContext.Provider value={{ username, setUsername, email, setEmail }}>
      {children}
    </LoginContext.Provider>
  );
};
