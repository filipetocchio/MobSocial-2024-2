import React, { useEffect, useState } from "react";

const ProjetosRecomendados = ({ projetos, isPerfil }) => {
  const [selectedProjects, setSelectedProjects] = useState([]); // Estado para rastrear os projetos selecionados

  // Recupera os projetos inscritos do localStorage na inicialização
  useEffect(() => {
    const storedInscritos = JSON.parse(localStorage.getItem("projetosInscritos")) || [];
    setSelectedProjects(storedInscritos);
  }, []);

  // Adiciona um projeto ao estado selecionado e ao localStorage
  const handleParticipate = (projeto) => {
    if (!isSelected(projeto)) {
      const updatedSelectedProjects = [...selectedProjects, projeto];
      setSelectedProjects(updatedSelectedProjects);
      localStorage.setItem("projetosInscritos", JSON.stringify(updatedSelectedProjects));
      alert("Você está participando deste projeto!");
    }
  };

  // Remove um projeto do estado selecionado e do localStorage
  const handleRemove = (projeto) => {
    const updatedSelectedProjects = selectedProjects.filter(
      (selected) => selected.id !== projeto.id
    );
    setSelectedProjects(updatedSelectedProjects);
    localStorage.setItem("projetosInscritos", JSON.stringify(updatedSelectedProjects));
    alert("Você não está mais participando deste projeto!");
  };

  // Verifica se o projeto está selecionado
  const isSelected = (projeto) => {
    return selectedProjects.some((selected) => selected.id === projeto.id);
  };

  return (
    <>
      {projetos.map((projeto, index) => (
        <div
          className={`border-2 border-[#2F2E2E] h-auto ${
            isPerfil ? "w-full" : "w-[80%]"
          } text-white rounded-lg`}
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
                <button
                  className="rounded-lg bg-[#1E1E1E] w-auto border-2 border-[#A3A3A3] p-4 self-end place-content-end"
                  onClick={() =>
                    isPerfil ? handleRemove(projeto) : handleParticipate(projeto)
                  }
                  disabled={!isPerfil && isSelected(projeto)} // Desativa o botão se já estiver selecionado
                >
                  {isPerfil ? "Remover Participação" : isSelected(projeto) ? "Participando" : "Participe"}
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
