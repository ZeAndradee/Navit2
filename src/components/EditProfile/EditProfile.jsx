import { useNavigate } from "react-router-dom";
import handleEdit from "../../services/HandleEdit";
import { UserContext } from "../../services/UserContext";
import style from "./EditProfile.module.css";

import React, { useContext, useState } from "react";

const EditProfile = () => {
  const { user, setUser } = useContext(UserContext);
  const [name, setName] = useState(user?.name);
  const [bio, setBio] = useState(user?.userbio);
  const [email, setEmail] = useState(user?.email);
  const [password, setPassword] = useState(user?.password);
  const navigate = useNavigate();

  const HandleEdit = async () => {
    if (user?.id && name && bio && email && password) {
      const res = await handleEdit(
        user?.id,
        user?.username,
        email,
        password,
        name,
        user?.userimage,
        bio
      );
      if (res.response) {
        setUser(res.user);
        navigate("/");
      }
    }
  };
  return (
    <div className={style.editCard}>
      <div className={style.header}>
        <span>Editar Perfil</span>
        <button
          onClick={() => {
            HandleEdit();
          }}
        >
          Salvar
        </button>
      </div>
      <div className={style.editInfo}>
        <img src={user?.userimage} alt="" />
        <div className={style.changeInput}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            value={name}
            placeholder={user?.name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={style.changeInput}>
          <label htmlFor="bio">Bio</label>
          <input
            type="text"
            id="bio"
            value={bio}
            placeholder={user?.userbio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
        <div className={style.changeInput}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={style.changeInput}>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            value={password}
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
