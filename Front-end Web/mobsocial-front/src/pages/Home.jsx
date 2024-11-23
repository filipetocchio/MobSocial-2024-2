import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import Projetos from '../components/home/projetos';
import User from '../components/dashboardVoluntario/User';
import { useNavigate } from 'react-router-dom';
import getUserById from '../services/userService';

const Home = () => {
  const [userData, setUserData] = useState(window.localStorage.getItem('user') ? JSON.parse(window.localStorage.getItem('user')) : null);
  const navigate = useNavigate();
  const [data, setData] = useState(null);


  useEffect(() => {
    if (userData) {
        getUserById(userData.data.id, setData);
        console.log("Useefect", data)
    }
}, [userData, navigate]);

  return (
    <>
      <Header />
      {userData && 
      <div className=' font-bold text-[#A3A3A3] w-full bg-black flex flex-row'>

        <Projetos />
        <User isVoluntario={data} isOng={userData.isOng} />
      </div>}
    </>
  );
};

export default Home;