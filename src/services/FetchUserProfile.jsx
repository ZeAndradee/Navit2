import axios from "axios";

const fetchUserProfile = async (username, id) => {
  const BASE_URL = "https://tennisly-api-1.onrender.com/users";
  const response = await axios.get(BASE_URL);
  const users = response.data;

  const user = users.find(
    (user) => user.username === username || user.id === id
  );
  if (!user) {
    return null;
  }
  return user;
};

export default fetchUserProfile;
