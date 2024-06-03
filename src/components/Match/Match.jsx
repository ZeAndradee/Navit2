import React, { useContext, useEffect, useState } from "react";
import style from "./Match.module.css";
import { UserContext } from "../../services/UserContext";
import { assets } from "../../assets/assets";
import { icons } from "../../assets/Icons/icons";
import { ExtraCardContext } from "../../services/ExtraCardContext";
import handlePartidas from "../../services/HandlePartidas";
import { PostsContext } from "../../services/PostsContext";

const Match = () => {
  const { user } = useContext(UserContext);
  const username = user?.username;
  const userimage = user?.userimage;
  const { setExtraCard } = useContext(ExtraCardContext);
  const [err, setErr] = useState(false);
  const [content, setContent] = useState("");

  const [sets, setSets] = useState(3);
  const [player2, setPlayer2] = useState("");
  const [matchTime, setMatchTime] = useState("");
  const [matchPlace, setMatchPlace] = useState("");
  const { setRefresh } = useContext(PostsContext);

  const [p1set0, setP1Set0] = useState("");
  const [p1set1, setP1Set1] = useState("");
  const [p1set2, setP1Set2] = useState("");
  const [p1set3, setP1Set3] = useState("");
  const [p1set4, setP1Set4] = useState("");
  const [p1set5, setP1Set5] = useState("");

  const [p2set0, setP2Set0] = useState("");
  const [p2set1, setP2Set1] = useState("");
  const [p2set2, setP2Set2] = useState("");
  const [p2set3, setP2Set3] = useState("");
  const [p2set4, setP2Set4] = useState("");
  const [p2set5, setP2Set5] = useState("");

  useEffect(() => {
    const textarea = document.querySelector("textarea");
    textarea.addEventListener("keydown", (e) => {
      textarea.style.height = "auto";
      let taHeight = e.target.scrollHeight;
      textarea.style.height = `${taHeight}px`;
    });
  }, []);

  const handleTextChange = (e) => {
    setContent(e.target.value);
  };

  const handleMatches = async () => {
    const result = await handlePartidas(
      username,
      player2,
      sets,
      matchTime,
      matchPlace,
      p1set0,
      p2set0,
      p1set1,
      p2set1,
      p1set2,
      p2set2,
      p1set3,
      p2set3,
      p1set4,
      p2set4,
      p1set5,
      p2set5,
      content
    );
    if (result.result) {
      setExtraCard("");
    }
    setRefresh(true);
  };

  return (
    <div className={style.matchContainer}>
      <div className={style.imgContent}>
        <div className={style.userImage}>
          <img src={userimage} alt="userImage" />
        </div>
        <div className={style.postContent}>
          <textarea
            id="text"
            value={content}
            onChange={handleTextChange}
            placeholder="O que está acontecendo?"
          />
        </div>
      </div>
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
          <input
            type="text"
            placeholder="2:36"
            onChange={(e) => setMatchTime(e.target.value)}
          />
        </div>
        <div className={style.matchData}>
          <span>Local da Partida:</span>
          <input
            type="text"
            placeholder="Tenis Club"
            style={{ width: "160px" }}
            onChange={(e) => setMatchPlace(e.target.value)}
          />
        </div>
      </div>
      <div className={style.matchScores}>
        <div className={style.matchResults}>
          <span>Resultado Final:</span>
          <div className={style.matchResult}>
            <img src={userimage} alt="" />
            <input
              type="text"
              placeholder="0"
              onChange={(e) => setP1Set0(e.target.value)}
            />
          </div>
          <div className={style.matchResult}>
            <img src={assets.userDefault} alt="" />
            <input
              type="text"
              placeholder="0"
              onChange={(e) => setP2Set0(e.target.value)}
            />
          </div>
        </div>

        {sets == 3 && (
          <>
            <div className={style.matchResults}>
              <span>Sets 1:</span>
              <div className={style.matchResult}>
                <input
                  type="text"
                  placeholder="0"
                  onChange={(e) => setP1Set1(e.target.value)}
                />
              </div>
              <div className={style.matchResult}>
                <input
                  type="text"
                  placeholder="0"
                  onChange={(e) => setP2Set1(e.target.value)}
                />
              </div>
            </div>
            <div className={style.matchResults}>
              <span>Sets 2:</span>
              <div className={style.matchResult}>
                <input
                  type="text"
                  placeholder="0"
                  onChange={(e) => setP1Set2(e.target.value)}
                />
              </div>
              <div className={style.matchResult}>
                <input
                  type="text"
                  placeholder="0"
                  onChange={(e) => setP2Set2(e.target.value)}
                />
              </div>
            </div>
            <div className={style.matchResults}>
              <span>Sets 3:</span>
              <div className={style.matchResult}>
                <input
                  type="text"
                  placeholder="0"
                  onChange={(e) => setP1Set3(e.target.value)}
                />
              </div>
              <div className={style.matchResult}>
                <input
                  type="text"
                  placeholder="0"
                  onChange={(e) => setP2Set3(e.target.value)}
                />
              </div>
            </div>
          </>
        )}
        {sets == 5 && (
          <>
            <div className={style.matchResults}>
              <span>Sets 1:</span>
              <div className={style.matchResult}>
                <input
                  type="text"
                  placeholder="0"
                  onChange={(e) => setP1Set1(e.target.value)}
                />
              </div>
              <div className={style.matchResult}>
                <input
                  type="text"
                  placeholder="0"
                  onChange={(e) => setP2Set1(e.target.value)}
                />
              </div>
            </div>
            <div className={style.matchResults}>
              <span>Sets 2:</span>
              <div className={style.matchResult}>
                <input
                  type="text"
                  placeholder="0"
                  onChange={(e) => setP1Set2(e.target.value)}
                />
              </div>
              <div className={style.matchResult}>
                <input
                  type="text"
                  placeholder="0"
                  onChange={(e) => setP2Set2(e.target.value)}
                />
              </div>
            </div>
            <div className={style.matchResults}>
              <span>Sets 3:</span>
              <div className={style.matchResult}>
                <input
                  type="text"
                  placeholder="0"
                  onChange={(e) => setP1Set3(e.target.value)}
                />
              </div>
              <div className={style.matchResult}>
                <input
                  type="text"
                  placeholder="0"
                  onChange={(e) => setP2Set3(e.target.value)}
                />
              </div>
            </div>
            <div className={style.matchResults}>
              <span>Sets 4:</span>
              <div className={style.matchResult}>
                <input
                  type="text"
                  placeholder="0"
                  onChange={(e) => setP1Set4(e.target.value)}
                />
              </div>
              <div className={style.matchResult}>
                <input
                  type="text"
                  placeholder="0"
                  onChange={(e) => setP2Set4(e.target.value)}
                />
              </div>
            </div>
            <div className={style.matchResults}>
              <span>Sets 5:</span>
              <div className={style.matchResult}>
                <input
                  type="text"
                  placeholder="0"
                  onChange={(e) => setP1Set5(e.target.value)}
                />
              </div>
              <div className={style.matchResult}>
                <input
                  type="text"
                  placeholder="0"
                  onChange={(e) => setP2Set5(e.target.value)}
                />
              </div>
            </div>
          </>
        )}
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
        <button className={style.sendBtn} type="submit" onClick={handleMatches}>
          Postar
        </button>
      </div>
    </div>
  );
};

export default Match;
