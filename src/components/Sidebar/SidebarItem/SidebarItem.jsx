import "./SidebarItem.css";
import { Link } from "react-router-dom";

const SidebarItem = ({ Icon, MenuOption }) => {
  return (
    <Link to="/outra">
      <button className="sidebaritem">
        <img src={Icon} alt="menu icon" />
        <p>{MenuOption}</p>
      </button>
    </Link>
  );
};

export default SidebarItem;
