import axios from "axios";

const fetchUser = async (username, password) => {
  const response = await axios.get(`https://tennisly-api-1.onrender.com/users`);
  const users = response.data;

  const user = users.find(
    (user) =>
      (user.username === username && user.password === password) ||
      (user.email === username && user.password === password)
  );

  if (!user) {
    console.log("O usuario não foi encontrado :(");
    return null;
  }

  return user;
};

export default fetchUser;
