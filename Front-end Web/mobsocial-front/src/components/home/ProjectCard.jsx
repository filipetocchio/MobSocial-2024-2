import React from 'react';
import Logo from '../../assets/Logo.jpg';

const ProjectCard = () => {
  return (
    <div className='flex p-4 flex-col md:flex-row rounded-lg border-2 w-full border-gray-500 justify-between'>
      <div className='flex flex-col justify-center items-center text-center gap-2'>
        <img src={Logo} className='h-20 w-20 rounded-full border-2 border-blue-500' alt='Logo' />
        <h1>a divindade que nos recebe será a mesma que nos condena</h1>
        <h1>teste</h1>
      </div>
      <div className='flex items-center w-auto'>
      <img src={Logo} alt='Logo' className='rounded-lg h-36 w-36 object-cover' />
      </div>
    </div>
  );
};

export default ProjectCard;