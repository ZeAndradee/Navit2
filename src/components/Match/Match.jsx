import React, { useContext, useEffect, useState } from "react";
import style from "./Match.module.css";
import { UserContext } from "../../services/UserContext";
import { assets } from "../../assets/assets";
import { icons } from "../../assets/Icons/icons";
import { HandleMatch } from "../../services/HandleMatch";
import { ExtraCardContext } from "../../services/ExtraCardContext";
const Match = () => {
  const { user } = useContext(UserContext);
  const username = user?.username;
  const userimage = user?.userimage;
  const [sets, setSets] = useState(5);
  const [err, setErr] = useState(false);
  const [player2, setPlayer2] = useState("");
  const { setExtraCard } = useContext(ExtraCardContext);

  useEffect(() => {
    if (sets > 7 || sets < 1) {
      setErr(true);
      setSets(5);
    } else {
      setErr(false);
    }
  }, [sets]);

  const handleMatch = async () => {
    setExtraCard("");
    const res = await HandleMatch();
  };

  return (
    <div className={style.matchContainer}>
      <div className={style.inputs}>
        <div className={style.inputPlus}>
          <div className={style.inputPlayer}>
            <span>Jogador 1: </span>
            <span>Você ({username})</span>
          </div>
          <img style={{ opacity: "0" }} src={icons.plus_icon} alt="" />
        </div>
        <div className={style.inputPlus}>
          <div className={style.inputPlayer}>
            <span>Jogador 2:</span>
            <input
              type="text"
              placeholder=""
              onChange={(e) => setPlayer2(e.target.value)}
            />
          </div>
          <img src={icons.plus_icon} alt="" />
        </div>
      </div>
      <div className={style.matchInfo}>
        <div className={style.matchData}>
          <span>Número de sets:</span>
          <select
            name="sets"
            id="sets"
            value={sets}
            onChange={(e) => setSets(e.target.value)}
          >
            <option value={3}>3</option>
            <option value={5}>5</option>
          </select>
        </div>
        <div className={style.matchData}>
          <span>Tempo de Partida:</span>
          <input type="text" placeholder="2:36" />
        </div>
        <div className={style.matchData}>
          <span>Local da Partida:</span>
          <input
            type="text"
            placeholder="Tenis Club"
            style={{ width: "160px" }}
          />
        </div>
      </div>
      <div className={style.matchScores}>
        <div className={style.matchResults}>
          <span>Resultado Final:</span>
          <div className={style.matchResult}>
            <img src={userimage} alt="" />
            <input type="text" placeholder="6" />
          </div>
          <div className={style.matchResult}>
            <img src={assets.userDefault} alt="" />
            <input type="text" placeholder="2" />
          </div>
        </div>
        {!err &&
          Array.from({ length: sets }, (_, sets) => (
            <div key={sets} className={style.matchResults}>
              <span>Sets {sets + 1}:</span>
              <div className={style.matchResult}>
                <input type="text" placeholder="6" />
              </div>
              <div className={style.matchResult}>
                <input type="text" placeholder="2" />
              </div>
            </div>
          ))}
      </div>
      <div className={style.cancelBtn}>
        <button
          onClick={() => {
            setExtraCard("");
          }}
        >
          Cancelar Partida
        </button>
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
          />
          <label className={style.labelImg} htmlFor="image">
            <img
              src={icons.image_icon}
              alt="image_icon"
              style={{ opacity: "50%" }}
            />
          </label>
          <button>
            <img
              src={icons.emoji_icon}
              alt="emoji_icon"
              style={{ opacity: "50%" }}
            />
          </button>
          <button>
            <img
              src={icons.gif_icon}
              alt="gif_icon"
              style={{ opacity: "50%" }}
            />
          </button>
        </div>
        <button className={style.sendBtn} type="submit" onClick={handleMatch}>
          Postar
        </button>
      </div>
    </div>
  );
};

export default Match;
