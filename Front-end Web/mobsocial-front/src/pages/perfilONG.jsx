import React, { useState, useEffect, useContext } from "react";
import EditarFoto from "../components/Voluntario/EditarFoto";
import Logo from "../assets/LogoAnimal.svg";
import ProjetosRecomendados from "../components/dashboardVoluntario/ProjetosRecomendados";
import Cachorrinho from "../assets/Cachorrinho.png";
import User from "../components/dashboardVoluntario/User";
import { UserContext } from "../context/UserContext";
import PerfilCard from "../components/dashboardONG/PerfilCard";

const PerfilONG = () => {
  const [isPerfilOng, setIsPerfilOng] = useState(false);
  const {isOng} = useContext(UserContext);
  const [buttonsState, setButtonsState] = useState({
    projetos: false,
    newsletter: false,
    sobre: false,
  });

  const handleButtonClick = (button) => {
    setButtonsState({
      projetos: button === "projetos",
      newsletter: button === "newsletter",
      sobre: button === "sobre",
    });
  };

  useEffect(() => {
    if (window.location.pathname === "/PerfilONG") {
      setIsPerfilOng(true);
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
      descricao: `A "Feira de Adoção de Animais" é um projeto dedicado 
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
      imagem: Cachorrinho,
    },
  ];
  return (
    <div className="bg-black text-white min-h-screen grid grid-cols-[3fr_1fr] pl-32 py-12 px-8">
      <div className="w-[95%]">
        <PerfilCard />
        <div className="h-[1px] mb-8 bg-white" />
        <div className="text-[#F5FDFF] w-full text-center gap-4 flex flex-row justify-center mb-8">
          <button
            className={`rounded-lg w-auto p-4 border border-[#A3A3A3] ${
              buttonsState.projetos
                ? "bg-[#023666] text-white font-bold"
                : "bg-[#1E1E1E] text-white hover:scale-105 duration075"
            }`}
            onClick={() => handleButtonClick("projetos")}
          >
            Projetos
          </button>
          <button
            className={`rounded-lg w-auto p-4 border border-[#A3A3A3] ${
              buttonsState.newsletter
                ? "bg-[#023666] text-white font-bold"
                : "bg-[#1E1E1E] text-white hover:scale-105 duration075"
            }`}
            onClick={() => handleButtonClick("newsletter")}
          >
            feed / Newsletter
          </button>
          <button
            className={`rounded-lg w-auto p-4 border border-[#A3A3A3] ${
              buttonsState.sobre
                ? "bg-[#023666] text-white font-bold"
                : "bg-[#1E1E1E] text-white hover:scale-105 duration075"
            }`}
            onClick={() => handleButtonClick("sobre")}
          >
            Sobre
          </button>
        </div>
        {buttonsState.newsletter && (
          <ProjetosRecomendados projetos={projetosInscritos} />
        )}
        {buttonsState.projetos && (
          <ProjetosRecomendados projetos={projetosInscritos} />
        )}
        {buttonsState.sobre && (
          <div className="flex flex-row gap-12 justify-center w-full">
            <div className="rounded-lg border border-[#2F2E2E] text-white items-center justify-around flex flex-col gap-4 p-4">
              <h1>Missão e Objetivos</h1>
              <h1>
                Nossa missão é proporcionar lares seguros e amorosos para
                animais resgatados, promovendo a adoção responsável e a
                conscientização sobre o abandono de pets. Lutamos para que cada
                animal tenha uma nova chance e seja valorizado como merece.
                Nossos objetivos incluem:
              </h1>
              <h1>
                Organizar feiras de adoção periódicas, onde os animais
                resgatados possam encontrar novas famílias.
              </h1>
              <h1>
                Promover a conscientização pública sobre a importância do
                cuidado e da responsabilidade na posse de animais.
              </h1>
              <h1>
                Desenvolver parcerias com clínicas e voluntários para garantir
                cuidados adequados aos pets enquanto aguardam adoção.
              </h1>
              <h1>
                Oferecer suporte e informações pós-adoção para ajudar as novas
                famílias no processo de acolhimento dos pets.
              </h1>
            </div>

            <div className="rounded-lg border border-[#2F2E2E] text-white text-center justify-around flex flex-col gap-4 p-4">
              <h1>História e Fundadores</h1>
              <h1>
                Fundada em 2015 por Mariana Lopes e Ricardo Alves, a ONG surgiu
                da vontade de transformar a vida de animais abandonados e de
                conscientizar a sociedade sobre a importância da adoção
                responsável. Mariana, veterinária, e Ricardo, ativista de
                proteção animal, começaram resgatando e cuidando de animais de
                rua em sua comunidade, sempre com o sonho de encontrar lares
                para eles.
              </h1>
              <h1>
                O projeto cresceu rapidamente com o apoio de voluntários e
                parceiros locais, o que possibilitou a organização de eventos de
                adoção e campanhas educativas. Hoje, a ONG é referência em
                adoção de animais resgatados, trazendo conscientização e amor
                para cada pet adotado e sua nova família.
              </h1>
            </div>
          </div>
        )}
      </div>

      <div className="h-auto">
        <User isPerfilOng={isPerfilOng} />
      </div>
    </div>
  );
};

export default PerfilONG;
