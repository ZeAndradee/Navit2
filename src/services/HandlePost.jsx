import axios from "axios";

const handlePost = async (userid, postcontent, postimage) => {
  const BASE_URL = "https://tennisly-api-1.onrender.com/posts";
  const likes = 0;
  const comments = 0;
  const date = Date.now();
  const timestamp = new Date(Date.now()).toISOString(); // Convertendo para string

  if (postcontent || postimage) {
    try {
      const formData = new FormData();
      formData.append("timestamp", timestamp);
      formData.append("userid", userid);
      formData.append("postcontent", postcontent);
      formData.append("likes", likes);
      formData.append("comments", comments);

      if (postimage) {
        formData.append("postimage", postimage);
      }

      await axios.post(BASE_URL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.error("Erro ao fazer o post: ", error);
    }
  }
};

export default handlePost;
