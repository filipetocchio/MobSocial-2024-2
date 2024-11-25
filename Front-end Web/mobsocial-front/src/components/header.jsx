import React from 'react';
import Icon from '../assets/Logo.jpg';
import { Link } from 'react-router-dom';

const Header = ({ userToken }) => {
  const clearLocalStorage = () => {
    window.localStorage.removeItem('user');
    window.localStorage.removeItem('token');
    window.location.href = '/login'; // Redireciona para a página de login
  };

  return (
    <div className='text-[#A3A3A3] border-2 h-72 bg-black flex flex-col h-auto w-auto md:flex-row items-center justify-around'>
      <img src={Icon} alt="logo" className='w-24 h-24 md:w-44 md:h-44 rounded-full' />
      <h1 className='text-2xl md:text-7xl text-center mt-4 md:mt-0'>Frase super motivacional</h1>

      <div className='flex flex-col justify-end md:flex-row gap-4 w-full w-[25%] mr-2 h-auto pb-8 mt-4 md:mt-0'>
        {!userToken ? (
          <Link to="/login" className='bg-[#1E1E1E] p-4 hover:scale-105 hover:brightness-200 rounded-lg border-[#F5FDFF] border-2 flex justify-center'>
            <h1 className='text-xl md:text-3xl'>Login</h1>
          </Link>
        ) : (
          <button onClick={clearLocalStorage} className='bg-[#1E1E1E] text-3xl hover:scale-105 hover:brightness-200 flex items-center px-2 rounded-lg border-[#F5FDFF] border-2 w-full md:w-[100%] flex justify-center'>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;