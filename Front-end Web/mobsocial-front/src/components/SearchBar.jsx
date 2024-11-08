import React from 'react'
import Search from '../assets/Search.svg'

const SearchBar = () => {
  return (
    <div className='h-auto w-[30%] bg-black border-2 border-[#2F2E2E] rounded-lg text-white flex justify-between p-2'>
        <h1>Barra de pesquisa</h1>
        <img src={Search} alt='Icone de pesquisa'  className='h-6'/>
    </div>
  )
}

export default SearchBar