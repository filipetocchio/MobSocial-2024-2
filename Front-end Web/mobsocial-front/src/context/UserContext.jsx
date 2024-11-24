
import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isOng, setIsOng] = useState(window.localStorage.getItem("isOng"));

  return (
    <UserContext.Provider value={{ isOng, setIsOng }}>
      {children}
    </UserContext.Provider>
  );
};