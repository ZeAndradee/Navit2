import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import SidebarItem from "./SidebarItem/SidebarItem";
import "./Sidebar.css";
import { icons } from "../../assets/Icons/icons";
import { Link } from "react-router-dom";
import { UserContext } from "../../services/UserContext";
import { LoginContext } from "../../services/LoginContext";

const Sidebar = () => {
  const { user } = useContext(UserContext);
  const { setAlreadyLogged } = useContext(LoginContext);

  const name = user?.name ?? "Carregando...";
  const username = user?.username ?? "Carregando...";
  const userImage = user?.userimage ?? "Carregando...";
  const handleLogout = () => {
    setAlreadyLogged(false);
  };

  return (
    <div className="sidebar">
      <div className="header">
        <img src={userImage} alt="User Profile Pic" />
        <div className="namenick">
          <p className="name">
            <b>{name}</b>
          </p>
          <p className="username">@{username}</p>
        </div>
      </div>

      <div className="options">
        <div className="option">
          <Link to={"/"}>
            <SidebarItem Icon={icons.home_icon} MenuOption={"Menu Inicial"} />
          </Link>
          <Link to={"/profile"}>
            <SidebarItem Icon={icons.pfp_icon} MenuOption={"Meu Perfil"} />
          </Link>
          <SidebarItem
            Icon={icons.notification_icon}
            MenuOption={"Notificações"}
          />
          <SidebarItem Icon={icons.games_icon} MenuOption={"Painel de Jogos"} />
          <SidebarItem Icon={icons.wallet_icon} MenuOption={"Pagamentos"} />
        </div>

        <div className="option">
          <p className="title">COMPETIÇÕES</p>
          <SidebarItem Icon={icons.medal_icon} MenuOption={"Meus Rankings"} />
          <SidebarItem Icon={icons.trophy_icon} MenuOption={"Meus Torneios"} />
          <SidebarItem
            Icon={icons.whistle_icon}
            MenuOption={"Encontre Torneios"}
          />
        </div>

        <div className="option">
          <p className="title">JOGUE MAIS</p>
          <SidebarItem Icon={icons.book_icon} MenuOption={"Minhas Aulas"} />
          <SidebarItem Icon={icons.star_icon} MenuOption={"Agendar Aula"} />
          <SidebarItem
            Icon={icons.clock_icon}
            MenuOption={"Agendar Reposição"}
          />
          <SidebarItem Icon={icons.court_icon} MenuOption={"Alugar Quadra"} />
        </div>

        <div className="option">
          <p className="title">DESEMPENHO</p>
          <SidebarItem
            Icon={icons.history_icon}
            MenuOption={"Histórico de Jogos"}
          />
          <SidebarItem Icon={icons.chart_icon} MenuOption={"Estatísticas"} />
          <SidebarItem Icon={icons.head_icon} MenuOption={"Head to Head"} />
        </div>

        <div className="option">
          <SidebarItem Icon={icons.email_icon} MenuOption={"Convidar Amigos"} />
        </div>

        <div className="option">
          <SidebarItem
            onClick={handleLogout}
            Icon={icons.logout_icon}
            MenuOption={"Sair"}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
