import axios from "axios";

const getUserPosts = async (userid) => {
  const BASE_URL = "https://tennisly-api-1.onrender.com/posts";
  try {
    const response = await axios.get(BASE_URL);
    const userPosts = response.data;

    const posts = userPosts.filter((post) => {
      return post.userid.toString() === userid;
    });

    if (posts) {
      return {
        result: true,
        content: posts,
        message: "Ocorreu um erro ao fazer a postagem",
      };
    } else {
      throw new Error("Nenhuma postagem encontrada na conta.");
    }
  } catch (error) {
    return { result: false, message: "Ocorreu um erro ao fazer a postagem" };
  }
};

export default getUserPosts;
