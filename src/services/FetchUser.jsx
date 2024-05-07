const fetchUser = async (username, password) => {
  const response = await fetch(
    `http://localhost:3000/users`
    // `https://jsonplaceholder.typicode.com/users/?username=${username}&email=${email}`
  );
  const users = await response.json();

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (!user) {
    console.log("O usuario não foi encontrado :(");
    return null;
  }

  return user;
};

export default fetchUser;
