import React, { useEffect, useState, useRef } from "react";
import style from "./Matches.module.css";
import { assets } from "../../../assets/assets";
import { icons } from "../../../assets/Icons/icons";
import fetchUserProfile from "../../../services/FetchUserProfile";
import handleLikesComments from "../../../services/HandleLikesComments";
import More from "../More/More";
import { Link } from "react-router-dom";

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

  const [liked, setLiked] = useState(true);
  const [newlikes, setNewLikes] = useState(null);
  const [moreOption, setMoreOption] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setMoreOption(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const handleMoreOption = () => {
    moreOption ? setMoreOption(false) : setMoreOption(true);
  };

  const handleLike = () => {
    liked ? setLiked(false) : setLiked(true);

    const HandlePostLikesComments = async () => {
      const Likes = await handleLikesComments(idmatch, liked, "match");
      setNewLikes(Likes);
    };
    HandlePostLikesComments();
  };

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
        <Link to={`/${p1username}`}>
          <div className={style.imgName}>
            <img
              src={!p1image ? assets.userDefault : p1image}
              alt="userImage"
            />
            <p>{p1name}</p>
          </div>
        </Link>
        <button
          className={style.more}
          onClick={() => {
            handleMoreOption();
          }}
          ref={menuRef}
        >
          <img src={icons.more_icon} alt="more_icon" />
        </button>
      </div>
      <div className={style.matchResult}>
        {moreOption && (
          <div className={style.dropdown} ref={menuRef}>
            <More postid={idmatch} userid={idplayer1} type={1} />
          </div>
        )}
        <div className={style.headerMatch}>
          <span>Resultado da Partida</span>
        </div>
        <div className={style.matchData}>
          <div className={style.matchDataImgW}>
            <img src={!p1image ? assets.userDefault : p1image} alt="" />
            <span>{p1name}</span>
          </div>
          <div className={style.score}>
            <span className={style.scoreMatch}>
              {fscorep1} - {fscorep2}
            </span>
            <span className={style.matchStatus}>Finalizado</span>
          </div>
          <div className={style.matchDataImgL}>
            <img src={!p2image ? assets.userDefault : p2image} alt="" />
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
            <button
              onClick={() => {
                handleLike();
              }}
            >
              {liked ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.8201 5.58L12.0001 6.402L11.1761 5.578C10.168 4.57004 8.80076 4.00383 7.37521 4.00393C5.94965 4.00402 4.58252 4.57041 3.57456 5.5785C2.56661 6.58659 2.00039 7.9538 2.00049 9.37935C2.00058 10.8049 2.56697 12.172 3.57506 13.18L11.4701 21.075C11.6107 21.2155 11.8013 21.2943 12.0001 21.2943C12.1988 21.2943 12.3894 21.2155 12.5301 21.075L20.4321 13.178C21.439 12.1698 22.0044 10.8032 22.0042 9.37829C22.0041 7.95342 21.4382 6.58691 20.4311 5.579C19.9314 5.07904 19.3382 4.68243 18.6852 4.41184C18.0323 4.14124 17.3324 4.00197 16.6256 4.00197C15.9187 4.00197 15.2189 4.14124 14.5659 4.41184C13.9129 4.68243 13.3197 5.07904 12.8201 5.579V5.58ZM19.3681 12.12L12.0001 19.485L4.63506 12.12C4.27209 11.7609 3.98368 11.3335 3.7864 10.8626C3.58911 10.3916 3.48686 9.88634 3.4855 9.37573C3.48414 8.86513 3.58371 8.35929 3.77848 7.88729C3.97325 7.41529 4.25939 6.98644 4.62044 6.62538C4.9815 6.26433 5.41035 5.97819 5.88235 5.78342C6.35435 5.58865 6.86019 5.48908 7.37079 5.49044C7.8814 5.49179 8.3867 5.59405 8.85765 5.79133C9.32861 5.98862 9.75593 6.27703 10.1151 6.64L11.4731 7.997C11.5437 8.06774 11.6278 8.12363 11.7204 8.1614C11.8129 8.19917 11.9121 8.21805 12.0121 8.21693C12.1121 8.21581 12.2108 8.19472 12.3025 8.15489C12.3942 8.11506 12.477 8.0573 12.5461 7.985L13.8801 6.64C14.6154 5.95557 15.5875 5.58301 16.5919 5.60068C17.5963 5.61836 18.5547 6.02489 19.2654 6.73476C19.9762 7.44463 20.384 8.4025 20.4029 9.40687C20.4219 10.4112 20.0505 11.3838 19.3671 12.12H19.3681Z"
                    fill="#526581"
                  />
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.8196 5.57803L11.9996 6.40003L11.1756 5.57603C10.1675 4.56808 8.80028 4.00187 7.37472 4.00196C5.94916 4.00205 4.58203 4.56844 3.57407 5.57653C2.56612 6.58462 1.99991 7.95183 2 9.37739C2.00009 10.8029 2.56648 12.1701 3.57457 13.178L11.4696 21.073C11.6102 21.2135 11.8008 21.2924 11.9996 21.2924C12.1983 21.2924 12.3889 21.2135 12.5296 21.073L20.4316 13.176C21.4385 12.1679 22.0039 10.8012 22.0038 9.37632C22.0036 7.95145 21.4377 6.58494 20.4306 5.57703C19.9309 5.07707 19.3377 4.68046 18.6847 4.40987C18.0318 4.13928 17.3319 4 16.6251 4C15.9183 4 15.2184 4.13928 14.5654 4.40987C13.9124 4.68046 13.3192 5.07807 12.8196 5.57803ZM16.6251 4.40984C15.9416 5.14602 12.0116 8.21496 12.0116 8.21496L9.71944 5.59872C9.35647 5.23959 9.97053 5.709 9.49957 5.51172C9.30229 5.04076 6.00093 6.00865 5.99957 5.49805C5.99821 4.98744 4.49957 5.01172 4.49957 6.01172C4.69435 5.53972 4.2589 6.98447 4.61996 6.62342C4.98101 6.26236 5.52757 6.8328 5.99957 6.63803C6.47157 6.44326 6.86411 5.76138 7.37472 5.76274C7.88532 5.7641 9.02862 5.31444 9.49957 5.51172C9.97053 5.709 9.36031 5.23575 9.71944 5.59872L11.4726 7.99503C11.5432 8.06577 11.6273 8.12166 11.7199 8.15943C11.8124 8.1972 11.9116 8.21608 12.0116 8.21496C12.1116 8.21385 12.2103 8.19275 12.302 8.15292C12.3937 8.11309 12.4765 8.05533 12.5456 7.98303L14.5654 6.73279C15.3007 6.04836 15.587 5.58104 16.5914 5.59872C17.5958 5.61639 18.5542 6.02292 19.2649 6.73279C19.9757 7.44266 19.481 4.99564 19.5 6.00001C19.519 7.00438 17.3086 3.67366 16.6251 4.40984Z"
                    fill="#F05151"
                  />
                </svg>
              )}
            </button>
            <span>{newlikes ? newlikes : likes}</span>
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
