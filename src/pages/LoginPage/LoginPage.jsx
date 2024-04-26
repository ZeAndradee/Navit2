import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../services/LoginContext";
import { UserContext } from "../../services/UserContext";
import fetchUser from "../../services/FetchUser";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [LocalUsername, setLocalUsername] = useState("");
  const [LocalEmail, setLocalEmail] = useState("");
  const [LoginError, setLoginError] = useState("");
  const { setAlreadyLogged } = useContext(LoginContext);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    const localUser = await fetchUser(LocalUsername, LocalEmail);

    setUser(localUser);

    if (localUser) {
      setAlreadyLogged(true);
      navigate("/");
    } else {
      setAlreadyLogged(false);
      setLoginError("Email ou senha invalidos!");
    }
  };

  useEffect(() => {
    if (user) {
      console.log(user.name);
    }
  }, [user]);

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
      <p>{LoginError}</p>
    </div>
  );
};

export default LoginPage;
