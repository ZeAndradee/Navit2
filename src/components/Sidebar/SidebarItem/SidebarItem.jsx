import "./SidebarItem.css";

const SidebarItem = ({ onClick, Icon, MenuOption }) => {
  return (
    <button onClick={onClick} className="sidebaritem">
      <img src={Icon} alt="menu icon" />
      <p>{MenuOption}</p>
    </button>
  );
};

export default SidebarItem;
