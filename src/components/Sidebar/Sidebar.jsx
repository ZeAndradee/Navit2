import React from "react";
import { assets } from "../../assets/assets";
import SidebarItem from "./SidebarItem/SidebarItem";
import "./Sidebar.css";
import { icons } from "../../assets/Icons/icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="header">
        <img src={assets.userImage} alt="User Profile Pic" />
        <div className="namenick">
          <p className="username">
            <b>Felipe Duque</b>
          </p>
          <p className="username">@felipeduque</p>
        </div>
      </div>
      <div className="options">
        <div className="option">
          <SidebarItem Icon={icons.home_icon} MenuOption={"Menu Inicial"} />
          <SidebarItem Icon={icons.pfp_icon} MenuOption={"Meu Perfil"} />
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
          <SidebarItem Icon={icons.book_icon} MenuOption={"Meus Rankings"} />
          <SidebarItem Icon={icons.star_icon} MenuOption={"Meus Torneios"} />
          <SidebarItem Icon={icons.clock_icon} MenuOption={"Meus Torneios"} />
          <SidebarItem
            Icon={icons.court_icon}
            MenuOption={"Encontre Torneios"}
          />
        </div>

        <div className="option">
          <p className="title">DESEMPENHO</p>
          <SidebarItem Icon={icons.medal_icon} MenuOption={"Meus Rankings"} />
          <SidebarItem Icon={icons.trophy_icon} MenuOption={"Meus Torneios"} />
          <SidebarItem
            Icon={icons.whistle_icon}
            MenuOption={"Encontre Torneios"}
          />
        </div>

        <div className="option">
          <SidebarItem Icon={icons.home_icon} MenuOption={"Menu Inicial"} />
        </div>

        <div className="option">
          <SidebarItem Icon={icons.home_icon} MenuOption={"Menu Inicial"} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
