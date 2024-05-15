import React, { useContext } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Posts from "../../components/Posts/Posts";
import "./ProfilePage.css";
import { assets } from "../../assets/assets";
import { UserContext } from "../../services/UserContext";
import { icons } from "../../assets/Icons/icons";

const ProfilePage = () => {
  const { user } = useContext(UserContext);
  const name = user?.name ?? "username";
  const username = user?.username ?? "username";
  const userImage = user?.userimage ?? "Carregando...";
  const userBio = user?.userbio ?? "Carregando...";

  return (
    <div className="profile-page">
      <div className="sidebar-container2">
        <Sidebar />
      </div>
      <div className="profile-container">
        <div className="profile">
          <div className="profile-info">
            <div className="userimage">
              <img src={userImage} alt="" />
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
              userImage={userImage}
              username={name}
              postImage={assets.image1}
              postContent={"Mais uma partida com o gigante!"}
              likes={14}
              comments={2}
            />
            <Posts
              userImage={userImage}
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
