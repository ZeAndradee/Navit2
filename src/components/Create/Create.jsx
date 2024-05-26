import React, { useContext, useState, useEffect } from "react";
import style from "./Create.module.css";
import { assets } from "../../assets/assets";
import { icons } from "../../assets/Icons/icons";
import { UserContext } from "../../services/UserContext";
import { HandlePost } from "../../services/HandlePost";
const Create = () => {
  const { user } = useContext(UserContext);
  const [content, setContent] = useState("");
  const userid = user.id;
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    const textarea = document.querySelector("textarea");
    textarea.addEventListener("keydown", (e) => {
      textarea.style.height = "auto";
      let taHeight = e.target.scrollHeight;
      textarea.style.height = `${taHeight}px`;
    });
  }, []);

  const [userimage, setUserImage] = useState("");
  useEffect(() => {
    if (user?.userimage) {
      setUserImage(user?.userimage);
    } else {
      setUserImage(assets.userDefault);
    }
  }, [user]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await HandlePost(userid, text, image);
      alert("Post criado com sucesso");
      setText("");
      setImage(null);
    } catch (error) {
      console.error("Erro ao criar o post:", error);
      alert("Falha ao criar o post");
    }
  };

  return (
    <div className={style.createPost}>
      <div className={style.imgContent}>
        <div className={style.userImage}>
          <img src={userimage} alt="userImage" />
        </div>
        <div className={style.postContent}>
          <textarea
            id="text"
            value={text}
            onChange={handleTextChange}
            placeholder="O que está acontecendo?"
          />
        </div>
      </div>
      <div className={style.bottomBtn}>
        <div className={style.extraBtn}>
          <button>
            <img src={icons.tennis_icon} alt="tennis_icon" />
          </button>
          <input
            style={{ display: "none" }}
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
          />
          <label className={style.labelImg} htmlFor="image">
            <img
              src={icons.image_icon}
              alt="image_icon"
              style={{ cursor: "pointer" }}
            />
          </label>
          <button>
            <img src={icons.emoji_icon} alt="emoji_icon" />
          </button>
          <button>
            <img src={icons.gif_icon} alt="gif_icon" />
          </button>
        </div>
        <button className={style.sendBtn} type="submit" onClick={handleSubmit}>
          Postar
        </button>
      </div>
    </div>
  );
};

export default Create;
