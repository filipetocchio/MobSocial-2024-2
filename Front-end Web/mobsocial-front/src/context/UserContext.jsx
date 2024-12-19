import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isOng, setIsOng] = useState(() => {
    const storedIsOng = localStorage.getItem('isOng');
    return storedIsOng === 'true'; // Converte a string para booleano
  });

  const [projectData, setProjectData] = useState([]);
 
  useEffect(() => {
    localStorage.setItem('isOng', isOng);
  }, [isOng]);

  return (
    <UserContext.Provider value={{ isOng, setIsOng, projectData, setProjectData }}>
      {children}
    </UserContext.Provider>
  );
};