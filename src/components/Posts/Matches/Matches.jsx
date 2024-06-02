import React, { useEffect, useState } from "react";
import style from "./Matches.module.css";
import { assets } from "../../../assets/assets";
import { icons } from "../../../assets/Icons/icons";
import fetchUserProfile from "../../../services/FetchUserProfile";

const Matches = ({
  idmatch,
  timestamp,
  idplayer1,
  idplayer2,
  sets,
  matchtime,
  matchplace,
  fscorep1,
  fscorep2,
  content,
  likes,
  comments,
}) => {
  const [p1image, setP1Image] = useState("");
  const [p2image, setP2Image] = useState("");

  const [p1username, setP1Username] = useState("");
  const [p2username, setP2Username] = useState("");

  const [p1name, setP1Name] = useState("");
  const [p2name, setP2Name] = useState("");

  useEffect(() => {
    if (idplayer2) {
      const handlePlayer2 = async () => {
        const player1 = await fetchUserProfile(null, idplayer1);
        const player2 = await fetchUserProfile(null, idplayer2);

        setP1Image(player1.userimage);
        setP2Image(player2.userimage);

        setP1Username(player1.username);
        setP2Username(player2.username);

        setP1Name(player1.name);
        setP2Name(player2.name);
      };
      handlePlayer2();
    }
  }, [idplayer2]);

  return (
    <div className={style.matchContainer}>
      <div className={style.headerInfo}>
        <div className={style.imgName}>
          <img src={p1image} alt="userImage" />
          <p>{p1name}</p>
        </div>
        <div className={style.more}>
          <img src={icons.more_icon} alt="more_icon" />
        </div>
      </div>
      <div className={style.matchResult}>
        <div className={style.headerMatch}>
          <span>Resultado da Partida</span>
        </div>
        <div className={style.matchData}>
          <div className={style.matchDataImgW}>
            <img src={p1image} alt="" />
            <span>{p1name}</span>
          </div>
          <div className={style.score}>
            <span className={style.scoreMatch}>
              {fscorep1} - {fscorep2}
            </span>
            <span className={style.matchStatus}>Finalizado</span>
          </div>
          <div className={style.matchDataImgL}>
            <img src={p2image} alt="" />
            <span>{p2name}</span>
          </div>
        </div>
      </div>
      <div className={style.content}>
        {/* <div className={style.postContent}>
          <span>{content}</span>
        </div> */}
      </div>
      <div className={style.postInfo}>
        <div className={style.likesComments}>
          <div className={style.info}>
            <button>
              <img src={icons.heart_icon} alt="heart_icon" />
            </button>
            <span>{likes}</span>
          </div>
          <div className={style.info}>
            <button>
              <img src={icons.comment_icon} alt="comment_icon" />
            </button>
            <span>{comments}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Matches;
