import React, { useContext, useEffect, useState } from "react";
import Header from "../components/header";
import Projetos from "../components/home/projetos";
import User from "../components/dashboardVoluntario/User";
import { useNavigate } from "react-router-dom";
import { getUserById, getUserByIdVoluntario } from "../services/userService";
import { UserContext } from "../context/UserContext";

const Home = () => {
  const [userId, setUserId] = useState(window.localStorage.getItem("userId"));
  const {isOng, setIsOng} = useContext(UserContext);
  const [isHome, setIsHome] = useState(true);
  const [userToken, setUserToken] = useState(
    window.localStorage.getItem("token")
      ? window.localStorage.getItem("token")
      : null
  );
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (userId) {
      if (isOng === "true") {
        getUserById(userId, setData);
      } else {
        getUserByIdVoluntario(userId, setData);
      }
    }
  }, [userId, isOng]);

  console.log(isOng);

  return (
    <>
      <Header userToken={userToken} />
      <div className="font-bold text-[#A3A3A3] w-full bg-black grid grid-cols-[3fr_1fr] gap-4">
        <Projetos />
        <div className="h-auto mt-8 px-4">
        <User isOng={isOng} isHome={isHome} />
        </div>
      </div>
    </> 
  );
};

export default Home;
