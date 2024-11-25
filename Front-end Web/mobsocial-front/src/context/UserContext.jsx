import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isOng, setIsOng] = useState(() => {
    const storedIsOng = localStorage.getItem('isOng');
    return storedIsOng === 'true'; // Converte a string para booleano
  });

  useEffect(() => {
    localStorage.setItem('isOng', isOng);
  }, [isOng]);

  return (
    <UserContext.Provider value={{ isOng, setIsOng }}>
      {children}
    </UserContext.Provider>
  );
};