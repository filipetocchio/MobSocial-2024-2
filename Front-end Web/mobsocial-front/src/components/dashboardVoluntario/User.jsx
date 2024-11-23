import React, { useContext } from 'react';
import { UserTypeContext } from '../../context/UserTypeContext';
import { UserPhotoContext } from '../../context/UserPhotoContext';
import UserIcon from '../../assets/user.svg';
import { Link } from 'react-router-dom';

const User = ({ isProjeto, isPerfil, isDash, isVoluntario }) => {
  const { userPhoto } = useContext(UserPhotoContext);
  const { userType } = useContext(UserTypeContext);

  console.log(userType);

  const getProfileLink = () => {
    if (userType?.isOng) {
      return "/EditOng";
    } else {
      return "/EditVoluntario";
    }
  };

  return (
    <div className='bg-black border-2 border-[#2F2E2E] rounded-lg flex flex-col p-6 items-center gap-8 h-auto'>
      <img src={userPhoto || UserIcon} alt="User" className="h-32 w-32 rounded-full border-2 border-[#A3A3A3]" />
      <div className='text-white w-full flex flex-col gap-4'>
      <Link to={getProfileLink()} className={`${isPerfil && "bg-[#023666] border-0 font-extrabold" } border-2 border-[#2F2E2E] rounded lg p-4 text-center hover:scale-105 duration-75 `}>Meu Perfil</Link>
      {isVoluntario && (
        <Link to="/PerfilVoluntario" className={`${isProjeto && "bg-[#023666] border-0 font-extrabold" } border-2 border-[#2F2E2E] rounded lg p-4 text-center hover:scale-105 duration-75 `}>Projetos Inscritos</Link>
)}
        <Link to="/Dashboard-Voluntario" className={`${isDash && "bg-[#023666] border-0 font-extrabold" } border-2 border-[#2F2E2E] rounded lg p-4 text-center hover:scale-105 duration-75 `}>Dashboard</Link>
        <Link to="" className='border-2 border-[#2F2E2E] rounded lg p-4 text-center hover:scale-105 duration-75'>Suporte</Link>
        <Link to="" className='border-2 border-[#2F2E2E] rounded lg p-4 text-center hover:scale-105 duration-75'>Sobre nós</Link>
      </div>
    </div>
  );
};

export default User;