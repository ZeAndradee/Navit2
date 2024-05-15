import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./HomePage.css";
import Feed from "../../components/Feed/Feed";
import { useContext } from "react";
import { UserContext } from "../../services/UserContext";
import { assets } from "../../assets/assets";

const HomePage = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="home-container">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="feed">
        <Feed user={user} />
      </div>
    </div>
  );
};

export default HomePage;
