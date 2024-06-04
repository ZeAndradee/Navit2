import React from "react";
import style from "./Error404.module.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
const Error404 = () => {
  return (
    <div className={style.errorContainer}>
      <p className={style.oops}>Oops!</p>
      <p className={style.error}>Erro 404</p>
      <p className={style.text}>Parece que você está perdido...</p>
      <img src={assets.lostError} alt="" />
      <Link to={"/"}>
        <p className={style.back}>Voltar ao inicio</p>
      </Link>
    </div>
  );
};

export default Error404;
