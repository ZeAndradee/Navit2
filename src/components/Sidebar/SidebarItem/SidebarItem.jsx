import React from "react";
import "./SidebarItem.css";
const SidebarItem = ({ Icon, MenuOption }) => {
  return (
    <div className="sidebaritem">
      <img src={Icon} alt="" />
      <p>{MenuOption}</p>
    </div>
  );
};

export default SidebarItem;
