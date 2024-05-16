import axios from "axios";

const AddUser = async (username, email, password, name, userimage, userbio) => {
  try {
    const response = await axios.post(
      "https://tennisly-api-1.onrender.com/users",
      {
        username,
        email,
        password,
        name,
        userimage,
        userbio,
      }
    );
  } catch (error) {
    console.error("O usuario não pode ser cadastrado :(");
  }
};

export default AddUser;
