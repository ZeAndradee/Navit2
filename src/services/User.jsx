import React, { useEffect, useState } from "react";

const BASE_URL = "https://jsonplaceholder.typicode.com/";

const User = ({ userId }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(BASE_URL + "users/" + userId)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [userId]);
  return (
    <div>
      {data ? (
        <>
          <h1>{data.name}</h1>
          <h1>{data.email}</h1>
          <h1>{data.address.city}</h1>
        </>
      ) : (
        "Carregando..."
      )}
    </div>
  );
};

export default User;
