import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserPhotoContext, ProjectLogoContext } from '../../context/UserPhotoContext';
import { UserContext } from '../../context/UserContext';
import UserIcon from '../../assets/user.svg';

const User = ({ isHome, isVoluntario, isPerfilONG }) => {
  const { userPhoto } = useContext(UserPhotoContext);
  const { projectLogo } = useContext(ProjectLogoContext);
  const { isOng } = useContext(UserContext);

  useEffect(() => {
    console.log("User component, the isOng is:", isOng);
  }, [isOng]);

  const navigationsOng = {
    perfil: "/PerfilONG",
    dashboard: "/DashboardONG",
  };

  const navigations = {
    perfil: "/PerfilVoluntario",
    dashboard: "/Dashboard-Voluntario",
    projetos: "/Dashboard-Voluntario",
  };

  return (
    <div className="bg-black border-2 border-[#2F2E2E] rounded-lg flex flex-col p-6 items-center gap-8 h-auto">
      <img
        src={isOng ? projectLogo : userPhoto || UserIcon}
        alt="User"
        className="h-32 w-32 rounded-full border-2 border-[#A3A3A3]"
      />
      {isOng ? (
        <div className="text-white w-full flex flex-col gap-4">
          <Link
            to="/"
            className='
               border-2 border-[#2F2E2E] rounded lg p-4 text-center hover:scale-105 duration-75 '
          >
            Página Inicial
          </Link>
          <Link
            to={navigationsOng.perfil}
            className={`border-2 border-[#2F2E2E] rounded lg p-4 text-center hover:scale-105 duration-75 `}
          >
            Perfil ONG
          </Link>
          <Link
            to={navigationsOng.dashboard}
            className='
               border-2 border-[#2F2E2E] rounded lg p-4 text-center hover:scale-105 duration-75 '
          >
            Dashboard ONG
          </Link>
        </div>
      ) : (
        <div className="text-white w-full flex flex-col gap-4">
          <Link
            to="/"
            className='
               border-2 border-[#2F2E2E] rounded lg p-4 text-center hover:scale-105 duration-75 '
          >
            Página Inicial
          </Link>
          <Link
            to={navigations.perfil}
            className={`border-2 border-[#2F2E2E] rounded lg p-4 text-center hover:scale-105 duration-75 `}
          >
            Perfil Voluntário
          </Link>
          <Link
            to={navigations.dashboard}
            className='
               border-2 border-[#2F2E2E] rounded lg p-4 text-center hover:scale-105 duration-75 '
          >
            Dashboard Voluntário
          </Link>
        </div>
      )}
    </div>
  );
};

export default User;