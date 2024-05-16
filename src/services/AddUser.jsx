import axios from "axios";
import { useState } from "react";

const AddUser = async (username, email, password, name, userimage, userbio) => {
  try {
    await axios.post("https://tennisly-api-1.onrender.com/users", {
      username,
      email,
      password,
      name,
      userimage,
      userbio,
    });
    return true;
  } catch (error) {
    console.error("O usuario não pode ser cadastrado :(");
    return false;
  }
};

export default AddUser;
