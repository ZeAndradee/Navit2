import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Posts from "../../components/Posts/Posts";
import "./ProfilePage.css";
import { assets } from "../../assets/assets";
import { UserContext } from "../../services/UserContext";
import { icons } from "../../assets/Icons/icons";
import Feed from "../../components/Feed/Feed";

const ProfilePage = () => {
  const { user } = useContext(UserContext);
  const [userimage, setUserImage] = useState("");
  const name = user?.name ?? "username";
  const username = user?.username ?? "username";
  const userBio = user?.userbio ?? "Carregando...";

  useEffect(() => {
    if (user?.userimage) {
      setUserImage(user?.userimage);
    } else {
      setUserImage(assets.userDefault);
    }
  }, [user]);

  return (
    <div className="profile-page">
      <div className="sidebar-container2">
        <Sidebar />
      </div>
      {/* <div className="feed">
        <Feed user={user} />
      </div> */}
      <div className="profile-container">
        <div className="profile">
          <div className="profile-info">
            <div className="userimage">
              <img src={userimage} alt="" />
            </div>
            <div className="userdata">
              <div className="topheader">
                <div className="leftdata">
                  <div className="nameuser">
                    <p>{name}</p>
                    <span>@{username}</span>
                  </div>
                  <button>Editar Perfil</button>
                </div>
                <div className="userinfo">
                  <div className="data">
                    <span>
                      <b>37</b>
                    </span>
                    <span>posts</span>
                  </div>
                  <div className="data">
                    <span>
                      <b>18</b>
                    </span>
                    <span>torneios</span>
                  </div>
                  <div className="data">
                    <span>
                      <b>273</b>
                    </span>
                    <span>partidas</span>
                  </div>
                </div>
              </div>
              <div className="bottominfo">
                <div className="achievements">
                  <img src={icons.trophy_icon} alt="" />
                  <span>3 vitórias em torneios</span>
                </div>
                <div className="userbio">
                  <span>{userBio}</span>
                  <div className="btn">
                    <button className="btnestatisticas">
                      <img src={icons.chart_icon} alt="" />
                      <span>Estatísticas</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="posts">
            <Posts
              userImage={userimage}
              username={name}
              postImage={assets.image1}
              postContent={"Mais uma partida com o gigante!"}
              likes={14}
              comments={2}
            />
            <Posts
              userImage={userimage}
              username={name}
              postImage={assets.image1}
              postContent={"Mais uma partida com o gigante!"}
              likes={14}
              comments={2}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
