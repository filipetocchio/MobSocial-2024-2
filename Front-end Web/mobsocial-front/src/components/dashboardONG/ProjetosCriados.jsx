import React, { useState } from "react";
import Logo from "../../assets/Logo.jpg";
import FT from "../../assets/FT.png";
import FT2 from "../../assets/FT-2.png";
import Project1 from "../../assets/Project1.svg";
import Project2 from "../../assets/Project2.svg";

const ProjetosRecomendados = ({ projetos, isPerfil }) => {
    const [projetosState, setProjetosState] = useState(projetos);

    const deleteProjeto = (id) => {
        const updatedProjetos = projetosState.filter(projeto => projeto.id !== id);
        setProjetosState(updatedProjetos);
        console.log(updatedProjetos)
    };

  return (
    <>
      {projetosState.map((projeto, index) => (
        <div
          className={`border-2 border-[#2F2E2E] h-auto ${isPerfil ? 'w-full' : 'w-[80%]'} text-white rounded-lg`}
          key={index}
        >
          <div>
            <div className="flex flex-row justify-around w-full px-6 my-4">
              <img
                src={projeto.logo}
                alt="Logo do projeto"
                className="h-12 w-auto rounded-full"
              />
              <h1>{projeto.titulo}</h1>
              <h1>{projeto.data}</h1>
            </div>
            <div className="flex flex-row gap-4 px-6 pb-8">
              <img
                src={projeto.imagem}
                alt="Photo from project"
                className="rounded-lg"
              />

              <div className="flex flex-col gap-8 h-full w-full">
                <h1 className="text-white">{projeto.descricao}</h1>
                <div className="buttons-group flex flex-row gap-4">
                <button className="rounded-lg bg-[#1E1E1E] w-[30%] border-2 border-[#A3A3A3] p-4 self-end place-content-end">
                  Exportar
                </button>
                <button className="rounded-lg bg-[#1E1E1E] w-[30%] border-2 border-[#A3A3A3] p-4 self-end place-content-end">
                  Editar
                </button>
                <button
                  className="rounded-lg bg-[#1E1E1E] w-[30%] border-2 border-[#A3A3A3] p-4 self-end place-content-end"
                  onClick={() => deleteProjeto(projeto.id)}
                >
                  Desativar
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjetosRecomendados;
