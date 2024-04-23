import React, { useEffect, useState } from "react";

export const UserContext = React.createContext();

export const verifyUser = (username, email) => {
  console.log(username);
  console.log(email);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/"
      );
      const data = await response.json();

      const user = data[0];
      setUser(user);
    };
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
