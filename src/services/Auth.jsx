import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "./LoginContext";

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const { username, email } = useContext(LoginContext);
  const fetchUser = async () => {
    console.log(username);
    console.log(email);

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/?username=${username}&email=${email}`
    );
    const users = await response.json();
    const user = users[0]; // Acessa o primeiro usuário no array
    setUser(user);
    console.log(user.name);
  };

  useEffect(() => {
    if (username && email) {
      fetchUser();
    }
  }, [username, email]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
