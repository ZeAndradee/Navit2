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
        <p className="username">Felipe ddDuque</p>
      </div>
      <div className="option">
        <SidebarItem Icon={icons.pfp_icon} MenuOption={"Menu Inicial"} />
      </div>
    </div>
  );
};

export default Sidebar;
