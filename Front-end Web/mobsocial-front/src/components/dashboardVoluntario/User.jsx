import React, { useContext } from 'react';
import { UserPhotoContext } from '../../context/UserPhotoContext';
import UserIcon from '../../assets/user.svg'
import { Link } from 'react-router-dom';

const User = () => {
//   const { userPhoto } = useContext(UserPhotoContext);
const userPhoto = (UserIcon)

  return (
    <div className='bg-black border-2 border-[#2F2E2E] rounded-lg flex flex-col p-6 items-center gap-8'>
      <img src={userPhoto} alt="User" className="h-32 w-32 rounded-full border-2 border-[#A3A3A3]" />
      <div className='text-white h-auto w-full flex flex-col gap-4'>
        <Link to="" className='border-2 border-[#2F2E2E] rounded lg p-4 text-center h-auto'>Meu Perfil</Link>
        <Link to="" className='border-2 border-[#2F2E2E] rounded lg p-4 w-auto text-center'>Tema</Link>
        <Link to="" className='border-2 border-[#2F2E2E] rounded lg p-4 w-auto text-center'>Ajustes</Link>
        <Link to="" className='border-2 border-[#2F2E2E] rounded lg p-4 w-auto text-center'>Suporte</Link>
        <Link to="" className='border-2 border-[#2F2E2E] rounded lg p-4 w-auto text-center'>Sobre nós</Link>
      </div>
    </div>
  );
};

export default User;