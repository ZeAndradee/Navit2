import React, { useState } from "react";

export const PostsContext = React.createContext();

export const PostsProvider = ({ children }) => {
  const [refresh, setRefresh] = useState(false);

  return (
    <PostsContext.Provider value={{ refresh, setRefresh }}>
      {children}
    </PostsContext.Provider>
  );
};
