import React, { useState } from "react";
import Input from "../components/cadastro/Input";
import { FormControl } from "@mui/material";
import Vagas from "../components/novo-projeto/vagas";
import Plus from "../assets/plus.svg"

const NewProject = () => {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");
  const [vagas, setVagas] = useState("");

  return (
    <div className="bg-black min-h-screen">
      <div className="flex border-2 flex-col p-24 items-center gap-8">
      <div 
            className="relative w-full text-center font-bold h-14 gap-4 items-center p-2 px-12 rounded-lg bg-black border border-[#2F2E2E] flex justify-center text-white">
              <img src={Plus} alt="new project" className="h-8 absolute left-8" />
              Novo projeto
            </div>
        <FormControl style={{ width: "100%" }}>
          <div className="flex flex-col gap-8 ">
            <Input
              id="titulo"
              type="text"
              value={titulo}
              onChange={(e) => {
                setTitulo(e.target.value);
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

        <div className="w-auto flex flex-col items-center gap-2">
          <h1 className="text-[#A3A3A3] self-start">Vagas disponíveis</h1>
          <Vagas />
        </div>

        <button className="bg-black hover:scale-105 duration-75 border-2 text-xl border-[#A3A3A3] text-[#A3A3A3] rounded-lg w-[30%] h-20">
            Criar
        </button>
      </div>
    </div>
  );
};

export default NewProject;
