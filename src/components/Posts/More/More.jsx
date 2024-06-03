import { icons } from "../../../assets/Icons/icons";
import style from "./More.module.css";

import React from "react";

const More = (postid) => {
  return (
    <div className={style.moreCard}>
      <div className={style.option}>
        <img src={icons.pencil_icon} alt="" />
        <span>Editar Post</span>
      </div>
      <div className={style.option}>
        <img src={icons.trash_icon} alt="" />
        <span style={{ color: "#F05151" }}>Deletar Post</span>
      </div>
    </div>
  );
};

export default More;
