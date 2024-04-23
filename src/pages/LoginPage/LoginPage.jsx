import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { verifyUser } from "../../services/Auth";

const LoginPage = () => {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);

  const handleLogin = () => {
    verifyUser(username, email);
  };

  return (
    <div>
      <input
        type="name"
        placeholder="Digite o seu username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Digite o seu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleLogin}>Entrar</button>
      <p>{username}</p>
    </div>
  );
};

export default LoginPage;
