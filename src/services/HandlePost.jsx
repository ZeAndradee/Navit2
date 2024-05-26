import axios from "axios";

export const HandlePost = async (userid, postcontent, postimage) => {
  const BASE_URL = "https://tennisly-api-1.onrender.com/posts";
  const likes = 0;

  if (postcontent || postimage) {
    try {
      const formData = new FormData();
      formData.append("userid", userid);
      formData.append("postcontent", postcontent);
      formData.append("likes", likes);
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
