import React from 'react'
import CardVaga from './card-vaga'

const Vagas = () => {
  return (
    <div className='bg-black border-2 border-[#A3A3A3] p-8 h-auto w-auto rounded-lg flex flex-row gap-4'>
        <CardVaga />
        <CardVaga />
        <CardVaga />
    </div>
  )
}

export default Vagas