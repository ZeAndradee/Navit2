import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Profile from "../../components/ProfilePage/Profile";
import "./ProfilePage.css";
const ProfilePage = () => {
  return (
    <div className="profile">
      <div>
        <Sidebar />
      </div>
      <div className="container">
        <Profile />
      </div>
    </div>
  );
};

export default ProfilePage;
