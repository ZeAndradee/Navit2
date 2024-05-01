import React, { useContext } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Profile from "../../components/ProfilePage/Profile";
import "./ProfilePage.css";
import { assets } from "../../assets/assets";
import { UserContext, UserProvider } from "../../services/UserContext";
import { icons } from "../../assets/Icons/icons";
const ProfilePage = () => {
  const { user } = useContext(UserContext);
  const name = user?.name ?? "username";
  const username = user?.username ?? "username";

  return (
    <div className="profile-page">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="profile">
        <div className="profile-header">
          <div className="userimage">
            <img src={assets.userImage} alt="" />
          </div>
          <div className="userdata">
            <div className="topheader">
              <div className="leftdata">
                <p>{name}</p>
                <button>Editar Perfil</button>
              </div>
              <div className="userinfo">
                <div className="data">
                  <span>37</span>
                  <span>posts</span>
                </div>
                <div className="data">
                  <span>18</span>
                  <span>torneios</span>
                </div>
                <div className="data">
                  <span>273</span>
                  <span>partidas</span>
                </div>
              </div>
            </div>
            <div className="bottominfo">
              <div className="username">
                <span>@{username}</span>
              </div>
              <div className="achievements">
                <img src={icons.trophy_icon} alt="" />
                <span>3 vitórias em torneios</span>
              </div>
              <div className="userbio">
                <span>
                  Apaixonado pelo tênis <br /> Tricampeão estadual pernambucano
                  🏆
                </span>
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
      </div>
    </div>
  );
};

export default ProfilePage;
