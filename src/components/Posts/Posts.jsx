import React from "react";
import "./Posts.css";
import { assets } from "../../assets/assets";
import { icons } from "../../assets/Icons/icons";

const posts = ({
  userImage,
  username,
  postImage,
  postContent,
  likes,
  comments,
}) => {
  return (
    <div className="post-card">
      <div className="header-info">
        <div className="img-name">
          <img src={userImage} alt="userImage" srcset="" />
          <p>{username}</p>
        </div>
        <div className="more">
          <img src={icons.more_icon} alt="more_icon" srcset="" />
        </div>
      </div>
      <div className="content">
        <div className="imageContent">
          <img src={postImage} alt="postImage" />
        </div>
        <div className="postInfo">
          <div className="likesComments">
            <div className="info">
              <button>
                <img src={icons.heart_icon} alt="heart_icon" />
              </button>
              <span>{likes}</span>
            </div>
            <div className="info">
              <button>
                <img src={icons.comment_icon} alt="comment_icon" />
              </button>
              <span>{comments}</span>
            </div>
          </div>
        </div>
        <div className="postContent">
          <p>{username}</p>
          <span>{postContent}</span>
        </div>
      </div>
    </div>
  );
};

export default posts;
