import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import User from "../components/dashboardVoluntario/User";
import ProjetosCriados from "../components/dashboardONG/ProjetosCriados";
import FT from "../assets/FT.png"
import FT2 from "../assets/FT-2.png";
import Project1 from "../assets/Project1.svg";
import Project2 from "../assets/Project2.svg";
import Plus from "../assets/plus.svg"
import {getProject} from "../services/editProject"
import { Navigate, useNavigate } from "react-router-dom";

const DashboardONG = () => {
  const [isDash, setIsDash] = useState(false);
  const [storedProject, setStoredProject] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    getProject(setStoredProject)
  }, []);
  console.log(storedProject)

 
  const randomDate1 = new Date(
    +new Date() - Math.floor(Math.random() * 10000000000)
  );
  const randomDate2 = new Date(
    +new Date() - Math.floor(Math.random() * 10000000000)
  );

  const formatDate = (date) => {
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${month}/${year}`;
  };

  const projetos = [
    {
      id: 1,
      titulo: "Reflorestamento Urbano",
      data: `${formatDate(randomDate1)} a ${formatDate(randomDate2)}`,
      imagem: FT,
      logo: Project1,
      descricao: `O projeto Reflorestamento Urbano é uma iniciativa dedicada à
        revitalização de áreas verdes urbanas, focada no plantio de árvores
        nativas em áreas com escassez de vegetação. A ação busca não apenas
        o fortalecimento do ecossistema local, mas também o engajamento da
        comunidade para a preservação do meio ambiente, promovendo a
        conscientização sobre a importância do reflorestamento em regiões
        urbanas.`,
    },
    {
      id: 2,
      titulo: "Limpeza de Praias",
      data: `${formatDate(randomDate1)} a ${formatDate(randomDate2)}`,
      logo: Project2,
      imagem: FT2,
      descricao: `O projeto "Apoio Escolar para Crianças" tem como 
objetivo oferecer reforço escolar gratuito a crianças 
em situação de vulnerabilidade social. Acreditamos 
que a educação é uma das ferramentas mais poderosas 
para transformar vidas, e, por isso, nos dedicamos a 
apoiar essas crianças no desenvolvimento de 
habilidades essenciais e na melhoria do seu 
desempenho escolar. Nossos voluntários, em 
uma sala de aula acolhedora, oferecem um 
acompanhamento próximo e personalizado, 
reforçando o conteúdo escolar e ajudando no 
desenvolvimento da confiança e do interesse 
pelo aprendizado.`,
    },
  ];

  return (
    <div className="bg-black min-h-screen p-8">
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-8">
        <div className="flex items-center flex-col gap-12">
          <div className="flex flex-col lg:flex-row justify-around w-full items-center">
            <h1 className="font-bold text-5xl text-white mb-4 lg:mb-0">Meus Projetos</h1>
            <button 
            onClick={() => navigate("/NewProject")}
            className="relative w-full lg:w-[30%] text-center font-bold h-14 gap-4 items-center p-2 px-12 rounded-lg bg-black border border-[#2F2E2E] flex justify-center text-white">
              <img src={Plus} alt="new project" className="h-8 absolute left-8" />
              Novo projeto
            </button>
          </div>
          <ProjetosCriados storedProject={storedProject} projetos={projetos} />
        </div>
        <div className="h-auto mt-8 lg:mt-0">
          <User isDash={isDash} />
        </div>
      </div>
    </div>
  );
};

export default DashboardONG;
