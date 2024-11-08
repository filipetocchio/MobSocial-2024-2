import React from 'react'
import Icon from '../assets/Logo.jpg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='text-[#A3A3A3] border-2 h-72 bg-black flex flex-row items-center justify-around'>
        <img src={Icon} alt="logo" className='w-44 h-44 rounded-full'/>
        <h1 className='text-7xl'>Frase super motivacional</h1>
        <div className='flex flex-row gap-4 w-[20%] h-auto]'>
            <Link to="/login" className='bg-[#1E1E1E] p-4 hover:scale-105 hover:brightness-200 rounded-lg border-[#F5FDFF] border-2 w-[100%] flex justify-center'>
                <h1 className='text-3xl'>Login</h1>
            </Link>

            <Link to="/cadastro" className='bg-[#1E1E1E] hover:scale-105 hover:brightness-200 p-4 rounded-lg border-[#F5FDFF] border-2 w-[100%] flex justify-center'>
                <h1 className='text-3xl'>Cadastrar</h1>
            </Link>
        </div>
    </div>
  )
}

export default Header