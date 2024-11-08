import React from 'react'
import Header from '../components/header'
import Projetos from '../components/home/projetos';

const Home = () => {
  return (
    <>
    <Header />
    <div className='h-[100vh] font-bold text-[#A3A3A3] w-full bg-black grid grid-rows-3'>
      <Projetos />
    </div>
  </>
  )
};

export default Home