import axios from "axios";
import fetchUser from "./FetchUser";

const handleEdit = async (
  id,
  username,
  newemail,
  newpassword,
  newname,
  userimage,
  newuserbio
) => {
  try {
    await axios.put(`https://tennisly-api-1.onrender.com/users/${id}`, {
      id: id,
      username: username,
      email: newemail,
      password: newpassword,
      name: newname,
      userimage: userimage,
      userbio: newuserbio,
    });
    const handleLogin = async () => {
      const resnewUser = await fetchUser(username, newpassword);
      if (resnewUser) {
        return resnewUser;
      }
    };
    const user = await handleLogin();

    return {
      response: true,
      result: "Alterações concluida com sucesso",
      user: user,
    };
  } catch (error) {
    return {
      response: false,
      result: "Ocorreu um erro ao fazer as alterações",
    };
  }
};

export default handleEdit;
