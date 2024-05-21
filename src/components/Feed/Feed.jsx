import React, { useState, useEffect } from "react";
import Create from "../Create/Create";
import Posts from "../Posts/Posts";
import style from "./Feed.module.css";
import { assets } from "../../assets/assets";
import UserPosts from "../../services/UserPosts";

const Feed = ({ user }) => {
  const [posts, setPosts] = useState(null);
  const [userimage, setUserImage] = useState("");
  const name = user?.name ?? "username";
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
  }, []);

  return (
    <div className={style.feed}>
      <div className={style.create}>
        <Create />
      </div>
      <div className={style.posts}>
        {posts &&
          [...posts]
            .reverse()
            .map((post, index) => (
              <Posts
                userImage={userimage}
                username={name}
                postImage={post.postimage}
                postContent={post.postcontent}
                likes={post.likes}
                comments={2}
              />
            ))}
      </div>
    </div>
  );
};

export default Feed;
