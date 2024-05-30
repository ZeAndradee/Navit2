import React, { useContext, useState, useEffect } from "react";
import style from "./Create.module.css";
import { assets } from "../../assets/assets";
import { icons } from "../../assets/Icons/icons";
import { UserContext } from "../../services/UserContext";
import { HandlePost } from "../../services/HandlePost";
import Match from "../Match/Match";

const Create = () => {
  const { user } = useContext(UserContext);
  const [content, setContent] = useState("");
  const userid = user.id;
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [errMessage, setErrMessage] = useState("");
  const [extraCard, setExtraCard] = useState(null);

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
    const file = e.target.files[0];
    const fileType = file.type;
    const allowedImageTypes = [
      "image/jpeg",
      "image/png",
      "image/jpg",
      "image/tiff",
      "image/webp",
    ];

    if (!allowedImageTypes.includes(fileType)) {
      setErrMessage("Formato de arquivo não suportado.");
      return;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await HandlePost(userid, text, image);
      setText("");
      setImage(null);
    } catch (error) {
      console.error("Erro ao criar o post:", error);
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
      {extraCard === "partida" && (
        <>
          <Match />
          <div className={style.cancelBtn}>
            <button
              onClick={() => {
                setExtraCard("");
              }}
            >
              Cancelar Partida
            </button>
          </div>
        </>
      )}
      <div className={style.errMessage}>
        <p style={{ color: "red", fontSize: "13px" }}>{errMessage}</p>
      </div>
      <div className={style.bottomBtn}>
        <div className={style.extraBtn}>
          <button
            onClick={() => {
              setExtraCard("partida");
            }}
          >
            <img src={icons.tennis_icon} alt="tennis_icon" />
          </button>
          <input
            style={{ display: "none" }}
            type="file"
            id="image"
            accept="image/jpeg,
            image/png,
            image/jpg,
            image/tiff,
            image/webp,"
            onChange={handleImageChange}
            onClick={() => {
              setErrMessage("");
            }}
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
