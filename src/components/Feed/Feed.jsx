import React, { useState, useEffect } from "react";
import Create from "../Create/Create";
import Posts from "../Posts/Posts";
import style from "./Feed.module.css";
import { assets } from "../../assets/assets";
const Feed = ({ user }) => {
  const username = user?.name ?? "username";

  const [userimage, setUserImage] = useState("");
  useEffect(() => {
    if (user?.userimage) {
      setUserImage(user?.userimage);
    } else {
      setUserImage(assets.userDefault);
    }
  }, [user]);
  return (
    <div className={style.feed}>
      <div className={style.create}>
        <Create />
      </div>
      <div className={style.posts}>
        <Posts
          userImage={userimage}
          username={username}
          postImage={assets.image1}
          postContent={"Que jogada!"}
          likes={12}
          comments={2}
        />
        <Posts
          userImage={userimage}
          username={username}
          postImage={assets.image1}
          postContent={"Mais uma sortida 🏆"}
          likes={34}
          comments={5}
        />
        <Posts
          userImage={userimage}
          username={username}
          postImage={assets.image1}
          postContent={"Mais uma vitória 🏆"}
          likes={34}
          comments={5}
        />
        <Posts
          userImage={userimage}
          username={username}
          postImage={assets.image1}
          postContent={"Mais uma vitória 🏆"}
          likes={34}
          comments={5}
        />
      </div>
    </div>
  );
};

export default Feed;
