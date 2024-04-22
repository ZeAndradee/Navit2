import "./SidebarItem.css";

const SidebarItem = ({ Icon, MenuOption }) => {
  return (
    <button className="sidebaritem">
      <img src={Icon} alt="menu icon" />
      <p>{MenuOption}</p>
    </button>
  );
};

export default SidebarItem;
