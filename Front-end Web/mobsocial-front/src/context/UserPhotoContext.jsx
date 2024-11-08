
import React, { createContext, useState } from 'react';
import UserLogo from "../assets/user.svg";

export const UserPhotoContext = createContext();

export const UserPhotoProvider = ({ children }) => {
  const [userPhoto, setUserPhoto] = useState(UserLogo);

  return (
    <UserPhotoContext.Provider value={{ userPhoto, setUserPhoto }}>
      {children}
    </UserPhotoContext.Provider>
  );
};