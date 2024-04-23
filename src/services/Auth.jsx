import React, { useEffect, useState } from "react";

//Cria o context
export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/"
      );
      const data = await response.json();

      // Aqui você pode definir a lógica para selecionar o usuário que você quer atribuir ao contexto
      // Por exemplo, você pode selecionar o primeiro usuário da lista:
      const user = data[0];
      //console.log(user.name);
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
