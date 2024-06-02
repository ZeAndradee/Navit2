import axios from "axios";

const handleLikesComments = async (postid, liked, type) => {
  let updatedLikes = null;

  const response = await axios.get(
    "https://tennisly-api-1.onrender.com/posts/"
  );
  const posts = response.data;

  const response2 = await axios.get(
    "https://tennisly-api-1.onrender.com/matches/"
  );
  const matches = response2.data;

  const post = posts.find((post) => post.postid && post.postid == postid);
  const match = matches.find(
    (match) => match.idmatch && match.idmatch == postid
  );

  if (liked) {
    if (type === "post") {
      updatedLikes = Number(post.likes) + 1;
      axios.put(`https://tennisly-api-1.onrender.com/posts/${postid}`, {
        postid: post.id,
        timestamp: post.timestamp,
        userid: post.userid,
        postimage: post.postimage,
        postcontent: post.postcontent,
        likes: updatedLikes,
        comments: post.comments,
      });
    } else {
      updatedLikes = Number(match.likes) + 1;
      axios.put(`https://tennisly-api-1.onrender.com/matches/${postid}`, {
        idmatch: match.idmatch,
        timestamp: match.timestamp,
        idplayer1: match.idplayer1,
        idplayer2: match.idplayer2,
        sets: match.sets,
        matchtime: match.matchtime,
        matchplace: match.matchplace,
        fscorep1: match.fscorep1,
        fscorep2: match.fscorep2,
        set1p1: match.set1p1,
        set1p2: match.set1p2,
        set2p1: match.set2p1,
        set2p2: match.set2p2,
        set3p1: match.set3p1,
        set3p2: match.set3p2,
        set4p1: match.set4p1,
        set4p2: match.set4p2,
        set5p1: match.set5p1,
        set5p2: match.set5p2,
        content: match.content,
        likes: updatedLikes,
        comments: match.comments,
      });
    }
  } else {
    if (type === "post") {
      updatedLikes = Number(post.likes) - 1;

      axios.put(`https://tennisly-api-1.onrender.com/posts/${postid}`, {
        postid: post.id,
        timestamp: post.timestamp,
        userid: post.userid,
        postimage: post.postimage,
        postcontent: post.postcontent,
        likes: updatedLikes,
        comments: post.comments,
      });
    } else {
      updatedLikes = Number(match.likes) - 1;
      axios.put(`https://tennisly-api-1.onrender.com/matches/${postid}`, {
        idmatch: match.idmatch,
        timestamp: match.timestamp,
        idplayer1: match.idplayer1,
        idplayer2: match.idplayer2,
        sets: match.sets,
        matchtime: match.matchtime,
        matchplace: match.matchplace,
        fscorep1: match.fscorep1,
        fscorep2: match.fscorep2,
        set1p1: match.set1p1,
        set1p2: match.set1p2,
        set2p1: match.set2p1,
        set2p2: match.set2p2,
        set3p1: match.set3p1,
        set3p2: match.set3p2,
        set4p1: match.set4p1,
        set4p2: match.set4p2,
        set5p1: match.set5p1,
        set5p2: match.set5p2,
        content: match.content,
        likes: updatedLikes,
        comments: match.comments,
      });
    }
  }
  return updatedLikes;
};

export default handleLikesComments;
