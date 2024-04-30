import React from "react";
import "./Profile.css";
import { assets } from "../../assets/assets";
const Profile = () => {
  return (
    <>
      <div className="profile">
        <div className="header">
          <div className="profileimg">
            <img src={assets.userImage} alt="" srcset="" />
          </div>
          <div className="info">
            <div className="userinfo"></div>
            <div className="achievements"></div>
            <div className="userbio"></div>
            <div className="statistics-btn"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
