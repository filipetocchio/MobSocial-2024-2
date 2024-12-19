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
import UserLogo from "../assets/user.svg"

const DashboardONG = () => {
  const [isDash, setIsDash] = useState(false);
  const [storedProject, setStoredProject] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getProject((projects) => {
      const mappedProjects = projects.map((proj) => ({
        ...proj,
        nome: proj.nome,
      }));
      setStoredProject(mappedProjects);
    });
  }, []);


  const fetchProjects = async () => {
    return storedProjects.map((proj) => ({
      id: proj.id,
      nome: proj.nome,
      imagem: proj.hashimg,
      logo: UserLogo,
      descricao: proj.descricao,
      data: proj.data,
    }));
  };

  const updateStoredProjects = (updatedProject) => {
    setStoredProject((prevProjects) =>
      prevProjects.map((proj) =>
        proj.id === updatedProject.id ? { ...proj, ...updatedProject } : proj
      )
    );
  };

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
          <ProjetosCriados storedProject={storedProject} />
        </div>
        <div className="h-auto mt-8 lg:mt-0">
          <User isDash={isDash} />
        </div>
      </div>
    </div>
  );
};

export default DashboardONG;
