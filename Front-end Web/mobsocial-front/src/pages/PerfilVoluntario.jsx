import React, { useState, useEffect } from "react";
import EditarFoto from "../components/Voluntario/EditarFoto";
import Logo from "../assets/LogoAnimal.svg"
import ProjetosRecomendados from "../components/dashboardVoluntario/projetosRecomendados";
import Cachorrinho from "../assets/Cachorrinho.png"
import User from "../components/dashboardVoluntario/user";

const PerfilVoluntario = () => {
  const [isProjeto, setIsProjeto] = useState(false);
  const [isVoluntario, setIsVoluntario] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/PerfilVoluntario") {
      setIsProjeto(true);
      setIsVoluntario(true);
    }
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

  const projetosInscritos = [
    {
      title: "Feira de Adoção de Animais",
      descricao:`A "Feira de Adoção de Animais" é um projeto dedicado 
a promover a adoção responsável de cães e gatos 
resgatados, organizando eventos periódicos onde 
as pessoas podem conhecer e adotar seus futuros 
companheiros. Além disso, buscamos conscientizar a 
comunidade sobre a importância do cuidado com os 
animais e a prevenção do abandono. Nosso objetivo é 
oferecer uma nova chance para esses pets, 
proporcionando lares amorosos e responsáveis.`,
      logo: Logo,
      data: `${formatDate(randomDate1)} a ${formatDate(randomDate2)}`,
      imagem: Cachorrinho
    }
]
  return (
    <div className="bg-black text-white min-h-screen grid grid-cols-[6fr_1fr] pl-32 py-12 px-8">
      <div className="w-[75%]">
        <EditarFoto />

        <div className="text-[#F5FDFF] bg-[#1E1E1E] border-2 border-[#F5FDFF] w-full text-center rounded-lg mb-8">
          <h1 className="text-xl p-4">Projetos Inscritos</h1>
        </div>
        <ProjetosRecomendados projetos={projetosInscritos} isPerfil={true} />
      </div>
      <div className="h-auto">
        <User isProjeto={isProjeto}
        isVoluntario={isVoluntario} />
      </div>
    </div>
  );
};

export default PerfilVoluntario;
