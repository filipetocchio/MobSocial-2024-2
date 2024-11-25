import React from "react";
import Logo from "../../assets/Logo.jpg";
import FT from "../../assets/FT.png";
import FT2 from "../../assets/FT-2.png";
import Project1 from "../../assets/Project1.svg";
import Project2 from "../../assets/Project2.svg";

const ProjetosRecomendados = ({ projetos, isPerfil }) => {
  return (
    <>
      {projetos.map((projeto, index) => (
        <div
          className={`border-2 border-[#2F2E2E] h-auto ${isPerfil ? 'w-full' : 'w-[80%]'} text-white rounded-lg`}
          key={index}
        >
          <div>
            <div className="flex flex-row justify-between w-full px-6 my-4">
              <img
                src={projeto.logo}
                alt="Logo do projeto"
                className="h-12 w-auto rounded-full"
              />
              <h1>{projeto.title}</h1>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 px-6 pb-8 h-full">
              <img
                src={projeto.imagem}
                alt="Photo from project"
                className="rounded-lg"
              />

              <div className="flex flex-col gap-8 h-full w-full">
                <h1 className="text-white">{projeto.descricao}</h1>
                <button className="rounded-lg bg-[#1E1E1E] w-auto border-2 border-[#A3A3A3] p-4 self-end place-content-end">
                  Participe
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjetosRecomendados;
