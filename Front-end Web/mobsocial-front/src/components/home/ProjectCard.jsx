import React from 'react'
import Logo from '../../assets/Logo.jpg'

const ProjectCard = () => {
  return (
    <div className='flex flex-row rounded-lg border-2 border-gray-500 p-4 justify-between'>
      <div className='flex flex-col justify-center items-center text-center gap-2'>
        <img src={Logo} className='h-20 w-20 rounded-full border-2 border-blue-500'></img>
        <h1>a divindade que nos recebe será a mesma que nos condena</h1>
        <h1>teste</h1>
      </div>
        <img src = {Logo} alt='Logo' className='rounded-lg' />
    </div>
  )
}

export default ProjectCard