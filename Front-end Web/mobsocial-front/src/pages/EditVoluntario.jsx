import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams
import { FormControl, InputLabel } from "@mui/material";
import Input from "../components/cadastro/Input";
import { UserPhotoContext, UserPhotoProvider } from "../context/UserPhotoContext"; // Updated import path
import User from "../components/dashboardVoluntario/User";
import EditarFoto from "../components/Voluntario/EditarFoto"; // Import EditarFoto component
import editVoluntario from '../services/editVoluntario'; // Import the service function

const EditVoluntario = () => {
  const [isPerfil, setIsPerfil] = useState(false);
  const { voluntarioId } = useParams(); // Get voluntarioId from URL params
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
  const { userPhoto, setUserPhoto } = useContext(UserPhotoContext);

  useEffect(() => {
    if (window.location.pathname === "/EditVoluntario") {
      setIsPerfil(true);
    }
  }, []);


  const handleSubmit = async () => {
    const newErrors = {};
    if (!nome) newErrors.nome = "Nome é obrigatório";
    if (!email) newErrors.email = "E-mail é obrigatório";
    if (!telefone) newErrors.telefone = "Telefone é obrigatório";
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const formData = {
        nome,
        sobrenome,
        telefone,
        email,
        endereco,
        cep,
        complemento,
        numero,
        userPhoto,
      };
      try {
        const updatedData = await editVoluntario(voluntarioId, formData); // Use the service function
        console.log("Updated volunteer data:", updatedData);
      } catch (error) {
        console.error("Failed to update volunteer data:", error);
      }
    }
  };

  

  return (
    <div className="min-h-screen bg-black grid grid-cols-[3fr_1fr] p-8 pl-[10%] pb-32">
      <div className="w-full flex-grow">
        <div className="max-w-[80%]">
          <FormControl className="flex flex-col gap-8 w-full items-center">
            <EditarFoto /> {/* Use EditarFoto component */}
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
              label="Nome"
              error={!!errors.nome}
              errorMessage={errors.nome}
              focusedInput={focusedInput}
              setFocusedInput={setFocusedInput}
              style={{ width: '100%', height: '40px', backgroundColor: '#000000', color: "white", fontWeight: "bold" }} // Set background color
            />

            <Input
              id="edit-voluntario-sobrenome"
              type="text"
              value={sobrenome}
              onChange={(e) => setSobrenome(e.target.value)}
              label="Sobrenome"
              focusedInput={focusedInput}
              setFocusedInput={setFocusedInput}
              style={{ width: '100%', height: '40px', backgroundColor: '#000000', color: "white", fontWeight: "bold" }} // Set background color
            />

            <Input
              id="edit-voluntario-telefone"
              type="number"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              label="Telefone"
              error={!!errors.telefone}
              errorMessage={errors.telefone}
              focusedInput={focusedInput}
              setFocusedInput={setFocusedInput}
              style={{ width: '100%', height: '40px', backgroundColor: '#000000', color: "white", fontWeight: "bold" }} // Set background color
            />

            <Input
              id="edit-voluntario-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              error={!!errors.email}
              errorMessage={errors.email}
              focusedInput={focusedInput}
              setFocusedInput={setFocusedInput}
              style={{ width: '100%', height: '40px', backgroundColor: '#000000', color: "white", fontWeight: "bold" }} // Set background color
            />

            <Input
              id="edit-voluntario-endereco"
              type="text"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
              label="Endereço"
              focusedInput={focusedInput}
              setFocusedInput={setFocusedInput}
              style={{ width: '100%', height: '40px', backgroundColor: '#000000', color: "white", fontWeight: "bold" }} // Set background color
            />

            <Input
              id="edit-voluntario-CEP"
              type="number"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              label="CEP"
              focusedInput={focusedInput}
              setFocusedInput={setFocusedInput}
              style={{ width: '100%', height: '40px', backgroundColor: '#000000', color: "white", fontWeight: "bold" }} // Set background color
            />

            <Input
              id="edit-voluntario-complemento"
              type="text"
              value={complemento}
              label="Complemento (Casa, apt)"
              onChange={(e) => setComplemento(e.target.value)}
              focusedInput={focusedInput}
              setFocusedInput={setFocusedInput}
              style={{ width: '100%', height: '40px', backgroundColor: '#000000', color: "white", fontWeight: "bold" }} // Set background color
            />

            <Input
              id="edit-voluntario-numero"
              type="number"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              label="Número"
              focusedInput={focusedInput}
              setFocusedInput={setFocusedInput}
              style={{ width: '100%', height: '40px', backgroundColor: '#000000', color: "white", fontWeight: "bold" }} // Set background color
            />
          </FormControl>
        </div>
      </div>
      <div className="h-auto">
      <User 
      isPerfil={isPerfil} />
      </div>
      
    </div>
  );
};


export default EditVoluntario;
