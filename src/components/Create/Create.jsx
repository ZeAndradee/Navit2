import React, { useContext } from "react";
import style from "./Create.module.css";
import { assets } from "../../assets/assets";
import { icons } from "../../assets/Icons/icons";
import { useEffect } from "react";
import { UserContext } from "../../services/UserContext";
const Create = () => {
  const { user } = useContext(UserContext);
  const userImage = user?.userimage ?? "Carregando...";
  useEffect(() => {
    const textarea = document.querySelector("textarea");
    textarea.addEventListener("keyup", (e) => {
      textarea.style.height = "auto";
      let taHeight = e.target.scrollHeight;
      textarea.style.height = `${taHeight}px`;
    });
  }, []);
  return (
    <div className={style.createPost}>
      <div className={style.imgContent}>
        <div className={style.userImage}>
          <img src={userImage} alt="userImage" />
        </div>
        <div className={style.postContent}>
          <textarea type="text" placeholder="O que está acontecendo?" />
        </div>
      </div>
      <div className={style.bottomBtn}>
        <div className={style.extraBtn}>
          <button>
            <img src={icons.tennis_icon} alt="tennis_icon" />
          </button>
          <button>
            <img src={icons.image_icon} alt="image_icon" />
          </button>
          <button>
            <img src={icons.emoji_icon} alt="emoji_icon" />
          </button>
          <button>
            <img src={icons.gif_icon} alt="gif_icon" />
          </button>
        </div>
        <div className={style.sendBtn}>
          <button>Postar</button>
        </div>
      </div>
    </div>
  );
};

export default Create;
