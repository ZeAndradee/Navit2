import axios from "axios";

const fetchUser = async (username, password) => {
  const BASE_URL = "https://tennisly-api-1.onrender.com/users";
  const response = await axios.get(BASE_URL);
  const users = response.data;

  const user = users.find(
    (user) =>
      (user.username === username && user.password === password) ||
      (user.email === username && user.password === password)
  );

  if (!user) {
    return null;
  }

  return user;
};

export default fetchUser;
