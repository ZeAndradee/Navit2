import React, { useContext, useState } from "react";
import { LoginContext } from "../../services/LoginContext";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [LocalUsername, setLocalUsername] = useState("");
  const [LocalEmail, setLocalEmail] = useState("");

  const { setUsername, setEmail } = useContext(LoginContext);
  const navigate = useNavigate();
  const handleLogin = () => {
    setUsername(LocalUsername);
    setEmail(LocalEmail);
    navigate("/");
  };

  return (
    <div>
      <input
        id="username"
        type="name"
        placeholder="Digite o seu username"
        value={LocalUsername}
        onChange={(e) => setLocalUsername(e.target.value)}
      />
      <input
        id="email"
        type="email"
        placeholder="Digite o seu email"
        value={LocalEmail}
        onChange={(e) => setLocalEmail(e.target.value)}
      />
      <button onClick={handleLogin}>Entrar</button>
      <p>{LocalUsername}</p>
    </div>
  );
};

export default LoginPage;
