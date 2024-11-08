import React, { useState } from "react";
import { FormControl, InputLabel } from "@mui/material";
import Input from "../components/cadastro/Input";
import UserLogo from "../assets/user.svg";

const editVoluntario = () => {
  const [focusedInput, setFocusedInput] = useState(null);
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cep, setCep] = useState("");
  const [complemento, setComplemento] = useState("");
  const [numero, setNumero] = useState("");
  const [errors, setErrors] = useState({});
  const [userPhoto, setUserPhoto] = useState(UserLogo);

  const handleSubmit = () => {
    const newErrors = {};
    if (!nome) newErrors.nome = "Nome é obrigatório";
    if (!email) newErrors.email = "E-mail é obrigatório";
    if (!telefone) newErrors.telefone = "Telefone é obrigatório";
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Submit the form
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUserPhoto(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChangePhotoClick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <div className="p-14 px-72 w-full flex-grow">
        <div className="border-2 border-[#A3A3A3] rounded-lg p-8 px-20 mb-8 flex flex-row justify-between items-center">
          <img src={userPhoto} alt="User" className="h-32 w-32 rounded-full border-2 border-[#A3A3A3]"></img>
          <button
            onClick={handleChangePhotoClick}
            className="hover:brightness-90 hover:scale-105 text-[#A3A3A3] text-xl border-2 border-[#A3A3A3] rounded-lg p-4 h-12 flex items-center"
          >
            ALTERAR FOTO
          </button>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </div>
        <div className="w-full">
          <FormControl className="flex flex-col gap-8 w-full items-center">
            <button
              onClick={handleSubmit}
              className="bg-[#1E1E1E] border-2 text-xl border-[#A3A3A3] text-[#A3A3A3] rounded-lg w-full h-14 mb-8"
            >
              ALTERAR DADOS
            </button>

            <Input
              id="edit-voluntario-nome"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Nome"
              error={!!errors.nome}
              errorMessage={errors.nome}
              focusedInput={focusedInput}
              setFocusedInput={setFocusedInput}
              style={{ width: '100%' }}
            />

            <Input
              id="edit-voluntario-sobrenome"
              type="text"
              value={sobrenome}
              onChange={(e) => setSobrenome(e.target.value)}
              placeholder="Sobrenome"
              focusedInput={focusedInput}
              setFocusedInput={setFocusedInput}
              style={{ width: '100%' }}
            />

            <Input
              id="edit-voluntario-telefone"
              type="number"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              placeholder="Telefone"
              error={!!errors.telefone}
              errorMessage={errors.telefone}
              focusedInput={focusedInput}
              setFocusedInput={setFocusedInput}
              style={{ width: '100%' }}
            />

            <Input
              id="edit-voluntario-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
              error={!!errors.email}
              errorMessage={errors.email}
              focusedInput={focusedInput}
              setFocusedInput={setFocusedInput}
              style={{ width: '100%' }}
            />

            <Input
              id="edit-voluntario-endereco"
              type="text"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
              placeholder="Endereço"
              focusedInput={focusedInput}
              setFocusedInput={setFocusedInput}
              style={{ width: '100%' }}
            />

            <Input
              id="edit-voluntario-CEP"
              type="number"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              placeholder="CEP"
              focusedInput={focusedInput}
              setFocusedInput={setFocusedInput}
              style={{ width: '100%' }}
            />

            <Input
              id="edit-voluntario-complemento"
              type="text"
              value={complemento}
              onChange={(e) => setComplemento(e.target.value)}
              placeholder="Complemento (Casa, Apt.)"
              focusedInput={focusedInput}
              setFocusedInput={setFocusedInput}
              style={{ width: '100%' }}
            />

            <Input
              id="edit-voluntario-numero"
              type="number"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              placeholder="Número"
              focusedInput={focusedInput}
              setFocusedInput={setFocusedInput}
              style={{ width: '100%' }}
            />
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default editVoluntario;
