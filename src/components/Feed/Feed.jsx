import React, { useState, useEffect } from "react";
import Create from "../Create/Create";
import Posts from "../Posts/Posts";
import style from "./Feed.module.css";
import { assets } from "../../assets/assets";
import UserPosts from "../../services/UserPosts";
import Matches from "../Posts/Matches/Matches";

const Feed = ({ user }) => {
  const [posts, setPosts] = useState(null);
  const [matches, setMatches] = useState(null);
  const [userimage, setUserImage] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const name = user?.name ?? "username";
  const username = user?.username ?? "username";
  useEffect(() => {
    if (user?.userimage) {
      setUserImage(user?.userimage);
    } else {
      setUserImage(assets.userDefault);
    }
  }, [user]);

  useEffect(() => {
    const fetchPosts = async () => {
      if (user && user.id) {
        const userPosts = await UserPosts(user?.id?.toString());
        if (userPosts.result) {
          const { posts, matches } = userPosts.content;
          setPosts(posts);
          setMatches(matches);
        } else {
          setErrMessage(userPosts.message);
        }
      }
    };

    fetchPosts();
  }, [user]);

  const combinedItems = [
    ...(posts ? posts.map((post) => ({ ...post, type: "post" })) : []),
    ...(matches ? matches.map((match) => ({ ...match, type: "match" })) : []),
  ];

  const sortedItems = combinedItems.sort(
    (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
  );

  return (
    <div className={style.feed}>
      <div className={style.create}>
        <Create />
      </div>
      <div className={style.posts}>
        {sortedItems &&
          sortedItems.map((item, index) =>
            item.type === "post" ? (
              <Posts
                key={index}
                postid={item.postid}
                userid={item.userid}
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
  );
};

export default Feed;
