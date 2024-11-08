import React from 'react'
import iconPlus from '../../assets/plus.svg'

const CardVaga = () => {
  return (
    <div className='border-2 h-auto w-[50%] border-[#A3A3A3] p-8 rounded-lg'>
        <img src={iconPlus} alt='Adicionar vaga' className='h-32 w-32'></img>
    </div>
  )
}

export default CardVaga