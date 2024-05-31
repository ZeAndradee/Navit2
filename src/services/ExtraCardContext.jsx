import React, { useState } from "react";

export const ExtraCardContext = React.createContext();

export const ExtraCardProvider = ({ children }) => {
  const [extraCard, setExtraCard] = useState(null);

  return (
    <ExtraCardContext.Provider value={{ extraCard, setExtraCard }}>
      {children}
    </ExtraCardContext.Provider>
  );
};
