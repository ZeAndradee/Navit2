import axios from "axios";

const handleDeletePost = async (userid, type) => {
  try {
    if (type == 0) {
      axios.delete(`https://tennisly-api-1.onrender.com/posts/${userid}`);
      return { result: true, response: "Post Excluido com sucesso" };
    } else {
      axios.delete(`https://tennisly-api-1.onrender.com/matches/${userid}`);
      return { result: true, response: "Post Excluido com sucesso" };
    }
  } catch (error) {
    return { result: false, response: "Ocorreu um erro ao excluir seu post" };
  }
};

export default handleDeletePost;
