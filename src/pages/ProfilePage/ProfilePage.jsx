import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar/Sidebar";
import Posts from "../../components/Posts/Posts";
import "./ProfilePage.css";
import { assets } from "../../assets/assets";
import { icons } from "../../assets/Icons/icons";
import UserPosts from "../../services/UserPosts";
import { useParams } from "react-router-dom";
import fetchUserProfile from "../../services/FetchUserProfile";

const ProfilePage = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [userimage, setUserImage] = useState("");
  const name = user?.name ?? "username";
  const userBio = user?.userbio ?? "Carregando...";
  const [errMessage, setErrMessage] = useState(null);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const userProfile = await fetchUserProfile(username);
      if (userProfile) {
        setUser(userProfile);
      }
    };
    fetchData();
  }, [username]);

  useEffect(() => {
    if (user?.userimage) {
      setUserImage(user?.userimage);
    } else {
      setUserImage(assets.userDefault);
    }
  }, [user]);

  useEffect(() => {
    const fetchPosts = async () => {
      const userPosts = await UserPosts(user?.id?.toString());
      if (userPosts.result) {
        setPosts(userPosts.content);
      } else {
        setErrMessage(userPosts.message);
      }
    };

    fetchPosts();
  }, [user]);

  return (
    <div className="profile-page">
      <div className="sidebar-container2">
        <Sidebar />
      </div>
      <div className="profile-container">
        <div className="profile">
          <div className="profile-info">
            <div className="userimage">
              <img src={userimage} alt="" />
            </div>
            <div className="userdata">
              <div className="topheader">
                <div className="leftdata">
                  <div className="nameuser">
                    <p>{name}</p>
                    <span>@{username}</span>
                  </div>
                  <button>Editar Perfil</button>
                </div>
                <div className="userinfo">
                  <div className="data">
                    <span>
                      <b>37</b>
                    </span>
                    <span>posts</span>
                  </div>
                  <div className="data">
                    <span>
                      <b>18</b>
                    </span>
                    <span>torneios</span>
                  </div>
                  <div className="data">
                    <span>
                      <b>273</b>
                    </span>
                    <span>partidas</span>
                  </div>
                </div>
              </div>
              <div className="bottominfo">
                <div className="achievements">
                  <img src={icons.trophy_icon} alt="" />
                  <span>3 vitórias em torneios</span>
                </div>
                <div className="userbio">
                  <span>{userBio}</span>
                  <div className="btn">
                    <button className="btnestatisticas">
                      <img src={icons.chart_icon} alt="" />
                      <span>Estatísticas</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="posts">
            {posts &&
              [...posts]
                .reverse()
                .map((post, index) => (
                  <Posts
                    key={index}
                    userImage={userimage}
                    username={name}
                    postImage={post.postimage}
                    postContent={post.postcontent}
                    likes={post.likes}
                    comments={post.comments}
                  />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
