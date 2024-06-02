import axios from "axios";

const handleLikesComments = async (postid, likes, newLikes, liked) => {
  const BASE_URL = `https://tennisly-api-1.onrender.com/posts/${postid}`;
  let updatedLikes = null;
  if (liked) {
    !newLikes
      ? (updatedLikes = Number(likes) + 1)
      : (updatedLikes = Number(newLikes) + 1);
    axios.put(BASE_URL, {
      likes: updatedLikes,
    });
  } else {
    !newLikes
      ? (updatedLikes = Number(likes) - 1)
      : (updatedLikes = Number(newLikes) - 1);
    axios.put(BASE_URL, {
      likes: updatedLikes,
    });
  }
  return updatedLikes;
};

export default handleLikesComments;
