import React, { useState, useEffect } from "react";
import EditarFoto from "../components/Voluntario/EditarFoto";
import Logo from "../assets/LogoAnimal.svg"
import ProjetosRecomendados from "../components/dashboardVoluntario/ProjetosRecomendados";
import Cachorrinho from "../assets/Cachorrinho.png"
import User from "../components/dashboardVoluntario/User";

const PerfilVoluntario = () => {
  const [isProjeto, setIsProjeto] = useState(false);
  const [isVoluntario, setIsVoluntario] = useState(false);
  const [projetosInscritos, setProjetosInscritos] = useState([]);

  useEffect(() => {
    const inscritos = JSON.parse(localStorage.getItem("projetosInscritos")) || [];
    setProjetosInscritos(inscritos);
  }, []);

  const randomDate1 = new Date(
    +new Date() - Math.floor(Math.random() * 10000000000) // Converte a data atual para timestamp, subtrai um valor aleatório e converte de volta para data
  );
  const randomDate2 = new Date(
    +new Date() - Math.floor(Math.random() * 10000000000) // Converte a data atual para timestamp, subtrai um valor aleatório e converte de volta para data
  );

  const formatDate = (date) => {
    const month = date.getMonth() + 1; // meses são indexados em 0
    const year = date.getFullYear();
    return `${month}/${year}`;
  };

  return (
    <div className="bg-black text-white min-h-screen grid grid-cols-[3fr_1fr] pl-32 py-12 px-8 gap-8">
      <div className="w-full">
        <EditarFoto />

        <div className="text-[#F5FDFF] bg-[#1E1E1E] border-2 border-[#F5FDFF] w-full text-center rounded-lg mb-8">
          <h1 className="text-xl p-4">Projetos Inscritos</h1>
        </div>
        <ProjetosRecomendados projetos={projetosInscritos} isPerfil={true} />
      </div>
      <div className="h-auto">
        <User />
      </div>
    </div>
  );
};

export default PerfilVoluntario;
