import { useContext } from "react";
import { LoginContext } from "./LoginContext";
import { UserContext } from "./UserContext";

const fetchUser = async (username, email) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/?username=${username}&email=${email}`
  );
  const users = await response.json();
  const user = users[0];
  return user;
};

export default fetchUser;
