import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./HomePage.css";
import { assets } from "../../assets/assets";
import { UserContext } from "../../services/UserContext";
import { icons } from "../../assets/Icons/icons";
import Feed from "../../components/Feed/Feed";

const ProfilePage = () => {
  const { user } = useContext(UserContext);
  const [userimage, setUserImage] = useState("");

  useEffect(() => {
    if (user?.userimage) {
      setUserImage(user?.userimage);
    } else {
      setUserImage(assets.userDefault);
    }
  }, [user]);

  return (
    <div className="profile-page">
      <div className="sidebar-container2">
        <Sidebar />
      </div>
      <div className="feed-container">
        <div className="feed">
          <Feed user={user} />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
