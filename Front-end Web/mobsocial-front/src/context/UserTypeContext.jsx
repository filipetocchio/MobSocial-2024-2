import React, { createContext, useState, useEffect } from 'react';

export const UserTypeContext = createContext();

export const UserTypeProvider = ({ children }) => {
  const [userType, setUserType] = useState(() => {
    const storedUser = localStorage.getItem('userType');
    return storedUser ? storedUser : null;
  });

  useEffect(() => {
    if (userType) {
      localStorage.setItem('userType', JSON.stringify(userType));
    } else {
      localStorage.removeItem('userType');
    }
  }, [userType]);

  return (
    <UserTypeContext.Provider value={{ userType, setUserType }}>
      {children}
    </UserTypeContext.Provider>
  );
};