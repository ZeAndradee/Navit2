import React from "react";
import style from "./FriendsMatch.module.css";
import { icons } from "../../../assets/Icons/icons";
const FriendsMatch = () => {
  return (
    <div className={style.friendsContainer}>
      <div className={style.header}>
        <span>Jogos Amigos</span>
        <img src={icons.live_icon} alt="" srcset="" />
      </div>
      <div className={style.gameSessions}>
        <div className={style.matchSession}>
          <span className={style.matchCategory}>Amistoso</span>
          <div className={style.usersInfo}>
            <div className={style.userInfo}>
              <img src={icons.spain_icon} alt="" srcset="" />
              <span>Player 1</span>
              <div className={style.score}>3</div>
            </div>
            <div className={style.userInfo}>
              <img src={icons.italy_icon} alt="" srcset="" />
              <span>Player 2</span>
              <div className={style.score}>2</div>
            </div>
          </div>
        </div>

        <div className={style.matchSession}>
          <span className={style.matchCategory}>Torneio</span>
          <div className={style.usersInfo}>
            <div className={style.userInfo}>
              <img src={icons.italy_icon} alt="" srcset="" />
              <span>Player 4</span>
              <div className={style.score}>4</div>
            </div>
            <div className={style.userInfo}>
              <img src={icons.spain_icon} alt="" srcset="" />
              <span>Player 3</span>
              <div className={style.score}>0</div>
            </div>
          </div>
        </div>

        <div className={style.matchSession}>
          <span className={style.matchCategory}>Encerrado</span>
          <div className={style.usersInfo}>
            <div className={style.userInfo}>
              <img src={icons.italy_icon} alt="" srcset="" />
              <span>Player 4</span>
              <div className={style.score}>4</div>
            </div>
            <div className={style.userInfo}>
              <img src={icons.spain_icon} alt="" srcset="" />
              <span>Player 3</span>
              <div className={style.score}>0</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsMatch;
