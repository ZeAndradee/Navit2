import { icons } from "../../../assets/Icons/icons";
import handleDeletePost from "../../../services/HandleDeletePost";
import { PostsContext } from "../../../services/PostsContext";
import { UserContext } from "../../../services/UserContext";
import style from "./More.module.css";

import React, { useContext, useEffect, useState } from "react";

const More = ({ postid, userid, type }) => {
  const { setRefresh } = useContext(PostsContext);
  const { user } = useContext(UserContext);
  const [postOwner, setPostOwner] = useState(false);

  const HandleDelete = async () => {
    const res = await handleDeletePost(postid, type);
    setRefresh(true);
    console.log();
  };

  useEffect(() => {
    const verifyOwner = () => {
      userid == user?.id ? setPostOwner(true) : setPostOwner(false);
    };
    verifyOwner();
  }, [user]);

  return (
    <div className={style.moreCard}>
      <button className={style.option}>
        <img src={icons.share_icon} alt="" />
        <span>Compartilhar Post</span>
      </button>
      {postOwner && (
        <button className={style.option}>
          <img src={icons.pencil_icon} alt="" />
          <span>Editar Post</span>
        </button>
      )}
      <button className={style.option}>
        <img src={icons.danger_icon} alt="" />
        <span>Denunciar Post</span>
      </button>

      {postOwner && (
        <button
          className={style.option}
          onClick={() => {
            HandleDelete();
          }}
        >
          <img src={icons.trash_icon} alt="" />
          <span style={{ color: "#F05151" }}>Deletar Post</span>
        </button>
      )}
    </div>
  );
};

export default More;
