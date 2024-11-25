import React, { createContext, useState } from 'react';
import UserLogo from "../assets/user.svg";
import ProjectLogo from "../assets/LogoAnimal.svg";

export const UserPhotoContext = createContext();
export const ProjectLogoContext = createContext(); 

export const UserPhotoProvider = ({ children }) => {
  const [userPhoto, setUserPhoto] = useState(UserLogo);
  const [projectLogo, setProjectLogo] = useState(ProjectLogo); 

  return (
    <UserPhotoContext.Provider value={{ userPhoto, setUserPhoto }}>
      <ProjectLogoContext.Provider value={{ projectLogo, setProjectLogo }}>
        {children}
      </ProjectLogoContext.Provider>
    </UserPhotoContext.Provider>
  );
};