import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import Input from "../components/cadastro/Input";
import { FormControl } from "@mui/material";
import Vagas from "../components/novo-projeto/vagas";
import Plus from "../assets/plus.svg";
import { createProject } from "../services/createProject";
import { editONG, getProject } from "../services/editProject";
import User from "../assets/user.svg";
import { UserContext } from "../context/UserContext";

const NewProject = ({ project }) => {
  const { projectData } = useContext(UserContext);
  console.log(projectData);
  const location = useLocation();
  const buttonNameFromState = location.state?.buttonName || "Criar";
  const [nome, setNome] = useState(projectData.nome);
  const [descricao, setDescricao] = useState(projectData.descricao);
  const [categoria, setCategoria] = useState(projectData.categoria);
  const [vagas, setVagas] = useState(projectData.vagas);

  useEffect(() => {
    const proj = projectData ;
    if (proj) {
      setNome(proj.nome);
      setDescricao(proj.descricao);
      setCategoria(proj.categoria);
      setVagas(proj.vagas);
    }
  }, [project, projectData]);

  const handleUpdate = async () => {
    if (projectData) {
      const updatedProject = {
        id: projectData.id,
        nome: nome,
        descricao,
        categoria,
        vagas,
      };

      try {
        const result = await editONG(projectData.id, updatedProject);
        alert('Projeto atualizado com sucesso!');
      } catch (error) {
        alert('Erro ao atualizar o projeto.');
      }
    }
  };

  const handleCreate = async () => {
    const formatDate = (date) => {
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${month}/${year}`;
    };

    const newProject = {
      id: Date.now(),
      nome: nome,
      descricao: descricao,
      categoria: categoria,
      data: `${formatDate(new Date())} a ${formatDate(new Date())}`,
      hora: "",
      local: "",
      hashimg: User, // Ensure User logo is set
      numerVagas: 0,
    };

    try {
      await createProject(newProject);
      alert('Projeto criado com sucesso!');
    } catch (error) {
      console.log('Erro ao criar o projeto', error);
    }
  };

  return (
    <div className="bg-black min-h-screen">
      <div className="flex border-2 flex-col p-24 items-center gap-8">
        <div
          className="relative w-full text-center font-bold h-14 gap-4 items-center p-2 px-12 rounded-lg bg-black border border-[#2F2E2E] flex justify-center text-white"
        >
          <img src={Plus} alt="new project" className="h-8 absolute left-8" />
          Novo projeto
        </div>
        <FormControl style={{ width: "100%" }}>
          <div className="flex flex-col gap-8">
            <Input
              id="titulo"
              type="text"
              value={nome}
              onChange={(e) => {
                setNome(e.target.value);
              }}
              focusedInput
              setFocusedInput
              style={{ width: "100%", height: "30px" }}
              label={"Título"}
            />

            <Input
              multiline
              id="descricao"
              type="text"
              value={descricao}
              onChange={(e) => {
                setDescricao(e.target.value);
              }}
              focusedInput
              setFocusedInput
              style={{ width: "100%" }}
              label={"Descrição"}
            />

            <Input
              id="categoria"
              type="text"
              value={categoria}
              onChange={(e) => {
                setCategoria(e.target.value);
              }}
              focusedInput
              setFocusedInput
              style={{ width: "100%", height: "30px" }}
              label={"Categoria"}
            />

            <Input
              multiline
              id="vagas"
              type="text"
              value={vagas}
              onChange={(e) => {
                setVagas(e.target.value);
              }}
              focusedInput
              setFocusedInput
              style={{ width: "100%" }}
              label={"Vagas"}
            />
          </div>
        </FormControl>

        <div className="w-auto flex flex-col items-center gap-2"></div>
          <h1 className="text-[#A3A3A3] self-start">Vagas disponíveis</h1>
          <Vagas />
          
          <div className="w-[30%]">
          <button
            className="bg-black hover:scale-105 duration-75 border-2 text-xl border-[#A3A3A3] text-[#A3A3A3] w-full rounded-lg h-20"
            onClick={projectData ? handleUpdate : handleCreate}
          >
            {buttonNameFromState}
          </button>
        </div>
        </div>

        
      </div>
  );
};

export default NewProject;