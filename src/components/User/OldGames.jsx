import React from "react";
import style from "./OldGames.module.css";
import { icons } from "../../assets/Icons/icons";
const OldGames = () => {
  return (
    <div className={style.oldGamesContainer}>
      <div className={style.header}>
        <span>Seus Últimos Jogos</span>
        <img src={icons.rewind_icon} alt="" srcset="" />
      </div>
      <div className={style.gameSessions}>
        <div className={style.matchSession}>
          <span className={style.matchCategory}>Encerrado</span>
          <div className={style.usersInfo}>
            <div className={style.userInfo}>
              <img src={icons.spain_icon} alt="" srcset="" />
              <span>Você</span>
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
          <span className={style.matchCategory}>Encerrado</span>
          <div className={style.usersInfo}>
            <div className={style.userInfo}>
              <img src={icons.italy_icon} alt="" srcset="" />
              <span>Você</span>
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
              <span>Você</span>
              <div className={style.score}>4</div>
            </div>
            <div className={style.userInfo}>
              <img src={icons.spain_icon} alt="" srcset="" />
              <span>Player 6</span>
              <div className={style.score}>1</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OldGames;
