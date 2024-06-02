import axios from "axios";

const getUserPosts = async (userid) => {
  const BASE_URL = "https://tennisly-api-1.onrender.com/posts";
  const BASE_URL2 = "https://tennisly-api-1.onrender.com/matches";

  try {
    const [response1, response2] = await Promise.all([
      axios.get(BASE_URL),
      axios.get(BASE_URL2),
    ]);
    const userPosts = response1.data;
    const userMatches = response2.data;

    console.log("Posts,matches", posts, matches);
    const posts = userPosts.filter((post) => {
      return post.userid.toString() === userid;
    });

    const matches = userMatches.filter((match) => {
      return (
        match.idplayer1.toString() === userid ||
        match.idplayer2.toString() === userid
      );
    });

    const userPostsData = posts.length;
    const userMatchesData = matches.length;

    const userAllPosts = userPostsData + userMatchesData;

    if (posts || matches) {
      return {
        result: true,
        content: { posts, matches, userAllPosts, userMatchesData },
        message: "Postagens e partidas obtidas com sucesso",
      };
    } else {
      throw new Error("Nenhuma postagem encontrada na conta.");
    }
  } catch (error) {
    return { result: false, message: "Ocorreu um erro ao fazer a postagem" };
  }
};

export default getUserPosts;
