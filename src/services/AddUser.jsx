import axios from "axios";

const AddUser = async (username, email, password, name, userimage, userbio) => {
  const BASE_URL = "https://tennisly-api-1.onrender.com/users";
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const response = await axios.get(BASE_URL);
  const users = response.data;
  const user = users.find(
    (user) => user.email === email || user.username === username
  );
  if (!user) {
    if (user?.username === username) {
      return {
        result: false,
        message: "Esse nome de usuario não está disponível.",
        code: -1,
      };
    } else if (emailRegex.test(email) === false) {
      return {
        result: false,
        message: "O email digitado não é válido",
        code: -2,
      };
    } else if (user?.email === email) {
      return {
        result: false,
        message: "Outra conta está usando o mesmo email.",
        code: -2,
      };
    } else if (!user) {
      await axios.post(BASE_URL, {
        username,
        email,
        password,
        name,
        userimage,
        userbio,
      });
      return { result: true, message: "Usuario adicionado", code: 1 };
    }
  }
};

export default AddUser;
