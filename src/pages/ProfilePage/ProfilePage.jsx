import React, { useContext, useEffect, useRef, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Posts from "../../components/Posts/Posts";
import "./ProfilePage.css";
import { assets } from "../../assets/assets";
import { icons } from "../../assets/Icons/icons";
import { useNavigate, useParams } from "react-router-dom";
import fetchUserProfile from "../../services/FetchUserProfile";
import Matches from "../../components/Posts/Matches/Matches";
import getUserPosts from "../../services/UserPosts";
import { PostsContext } from "../../services/PostsContext";
import { UserContext } from "../../services/UserContext";
import EditProfile from "../../components/EditProfile/EditProfile";

const ProfilePage = () => {
  const { username } = useParams();
  const [userProfile, setUserProfile] = useState(null);
  const [userimage, setUserImage] = useState("");
  const name = userProfile?.name ?? "username";
  const userBio = userProfile?.userbio ?? "Carregando...";
  const [errMessage, setErrMessage] = useState(null);
  const [posts, setPosts] = useState(null);
  const [matches, setMatches] = useState(null);
  const [userPostsData, setUserPostsData] = useState(0);
  const [userTorneiosData, setUserTorneiosData] = useState(0);
  const [userMatchesData, setUserMatchesData] = useState(0);
  const { refresh, setRefresh } = useContext(PostsContext);
  const { user, setUser } = useContext(UserContext);
  const [editProfile, setEditProfile] = useState(false);
  const navigate = useNavigate();
  let menuRef = useRef();

  useEffect(() => {
    if (!user) {
      const savedUser = localStorage.getItem("user");
      setUser(savedUser);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setEditProfile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const userProfile = await fetchUserProfile(username);
      if (userProfile) {
        setUserProfile(userProfile);
      }
    };

    fetchData();
  }, [username]);

  useEffect(() => {
    if (userProfile?.userimage) {
      setUserImage(userProfile?.userimage);
    } else {
      setUserImage(assets.userDefault);
    }
  }, [userProfile]);

  useEffect(() => {
    const fetchPosts = async () => {
      const userPosts = await getUserPosts(userProfile?.id?.toString());
      if (userPosts.result) {
        const { posts, matches, userAllPosts, userMatchesData } =
          userPosts.content;
        setPosts(posts);
        setMatches(matches);
        setUserPostsData(userAllPosts);
        setUserMatchesData(userMatchesData);
      } else {
        setErrMessage(userPosts.message);
      }
    };
    setRefresh(false);
    fetchPosts();
  }, [userProfile, refresh]);

  const combinedItems = [
    ...(posts ? posts.map((post) => ({ ...post, type: "post" })) : []),
    ...(matches ? matches.map((match) => ({ ...match, type: "match" })) : []),
  ];

  const sortedItems = combinedItems.sort(
    (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
  );

  const HandlePerfil = () => {
    editProfile ? setEditProfile(false) : setEditProfile(true);
  };

  return (
    <div className="profile-page">
      {editProfile && (
        <div className="editContainer">
          <div ref={menuRef}>
            <EditProfile />
          </div>
        </div>
      )}
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
                  {user?.username == username && (
                    <button onClick={HandlePerfil}>Editar Perfil</button>
                  )}
                </div>
                <div className="userinfo">
                  <div className="data">
                    <span>
                      <b>{userPostsData}</b>
                    </span>
                    <span>posts</span>
                  </div>
                  <div className="data">
                    <span>
                      <b>{userTorneiosData}</b>
                    </span>
                    <span>torneios</span>
                  </div>
                  <div className="data">
                    <span>
                      <b>{userMatchesData}</b>
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
            {sortedItems &&
              sortedItems.map((item, index) =>
                item.type === "post" ? (
                  <Posts
                    key={index}
                    userImage={userimage}
                    name={name}
                    username={username}
                    postImage={item.postimage}
                    postContent={item.postcontent}
                    likes={item.likes}
                    comments={item.comments}
                  />
                ) : (
                  <Matches
                    key={index}
                    idmatch={item.idmatch}
                    timestamp={item.timestamp}
                    idplayer1={item.idplayer1}
                    idplayer2={item.idplayer2}
                    sets={item.sets}
                    matchtime={item.matchtime}
                    matchplace={item.matchplace}
                    fscorep1={item.fscorep1}
                    fscorep2={item.fscorep2}
                    content={item.content}
                    likes={item.likes}
                    comments={item.comments}
                  />
                )
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
