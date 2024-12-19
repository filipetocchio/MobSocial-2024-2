import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Projetos from "../components/home/Projetos";
import User from "../components/dashboardVoluntario/User";
import { getUserById, getUserByIdVoluntario } from "../services/userService";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Logo1 from "../assets/reflorestamentologo.svg";
import Logo2 from "../assets/mutiraologo.svg";
import Logo3 from "../assets/Project2.svg";
import Logo4 from "../assets/tecnologialogo.svg";
import Logo5 from "../assets/LogoAnimal.svg";
import Logo6 from "../assets/horalogo.svg";
import F2 from "../assets/mutirao.png";
import F1 from "../assets/FT.png";
import F3 from "../assets/FT-2.png";
import F4 from "../assets/tecnologia.png";
import F5 from "../assets/Cachorrinho.png";
import F6 from "../assets/horta.png";

const Home = () => {
  const [userId, setUserId] = useState(window.localStorage.getItem("userId"));
  const [userToken, setUserToken] = useState(
    window.localStorage.getItem("token") || null
  );
  const {isOng, setIsOng} = useContext(UserContext);
  const [isHome, setIsHome] = useState(true);
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  // Lista de projetos para exibição
  const [projetos, setProjetos] = useState([
    {
      title: "Reflorestamento Urbano",
      category: "Meio Ambiente",
      image: F1,
      logo: Logo1,
    },
    {
      title: "Mutirão de Limpeza de Praias",
      category: "Meio Ambiente",
      image: F2,
      logo: Logo2
    },
    {
      title: "Apoio Escolar para Crianças",
      category: "Educação",
      image: F3,
      logo: Logo3
    },
    {
      title: "Capacitação em Tecnologias Digitais",
      category: "Tecnologia",
      image: F4,
      logo: Logo4,
    },
    {
      title: "Feira de Adoção de Animais",
      category: "Animais",
      image: F5,
      logo: Logo5,
    },
    {
      title: "Horta Comunitária",
      category: "Sustentabilidade",
      image: F6,
      logo: Logo6,
    },
  ]);

  useEffect(() => {
    if (userId) {
      if (isOng) {
        getUserById(userId, setData);
      } else {
        getUserByIdVoluntario(userId, setData);
      }
    }
  }, [userId, isOng]);

  return (
    <div className="h-screen bg-black">
      <Header userToken={userToken} />
      <div className="font-bold text-[#A3A3A3] w-full bg-black grid grid-cols-[3fr_1fr] gap-4">
        <div className="h-auto mt-8 px-4">
         
          <Projetos projetos={projetos} />
        </div>
        <div className="h-auto mt-16">
        <User isOng={isOng} isHome={isHome} />
        </div>
      </div>
    </div>
  );
};

export default Home;
