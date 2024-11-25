import React, { useState } from "react";
import { FormControl } from "@mui/material";
import Input from "./Input";
import { CadastrarServiceONG } from "../../services/cadastro";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Ong = () => {
  const [focusedInput, setFocusedInput] = useState(null);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [numeroIdentificacao, setNumeroIdentificacao] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!nome) newErrors.nome = "Nome é obrigatório";
    if (!email) newErrors.email = "E-mail é obrigatório";
    if (!cnpj) newErrors.cnpj = "CNPJ é obrigatório";
    if (!numeroIdentificacao) newErrors.numeroIdentificacao = "Número de identificação é obrigatório";
    if (!senha) newErrors.senha = "Senha é obrigatória";
    if (senha !== confirmarSenha) newErrors.confirmarSenha = "As senhas não coincidem";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const formData = {
        username: nome,
        password: senha,
        email: email,
        cnpj: cnpj,
        numeroDeIndentificacaoDaOng: numeroIdentificacao,
        razaoSocial: "",
        nomeFantasia: "",
        site: "", 
        descricao: "", 
        areasAtuacao: "", 
        responsavel: "", 
        endereco: "", 
        complemento: "", 
        cidade: "", 
        estado: "", 
        cep: "", 
        telefone: ""
      };

      try {
        const result = await CadastrarServiceONG(formData);
        if (result) {
          localStorage.setItem("token", result.accessToken);
          toast.success("Voluntário cadastrado com sucesso!");
          result.data.isOng = true;
          console.log(result);
        }
      } catch (error) {
        console.error("Error during registration:", error);
      }
    }
  };

  return (
    <div>
      <ToastContainer />
      <FormControl className="gap-4 w-full items-center h-auto">
        <Input
          id="ong-nome"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome completo da ONG"
          error={!!errors.nome}
          errorMessage={errors.nome}
          focusedInput={focusedInput}
          setFocusedInput={setFocusedInput}
        />
        <Input
          id="ong-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
          error={!!errors.email}
          errorMessage={errors.email}
          focusedInput={focusedInput}
          setFocusedInput={setFocusedInput}
        />
        <Input
          id="ong-cnpj"
          type="number"
          value={cnpj}
          onChange={(e) => setCnpj(e.target.value)}
          placeholder="CNPJ"
          error={!!errors.cnpj}
          errorMessage={errors.cnpj}
          focusedInput={focusedInput}
          setFocusedInput={setFocusedInput}
        />
        <Input
          id="ong-numero-identificacao"
          type="number"
          value={numeroIdentificacao}
          onChange={(e) => setNumeroIdentificacao(e.target.value)}
          placeholder="Numero de identificação"
          error={!!errors.numeroIdentificacao}
          errorMessage={errors.numeroIdentificacao}
          focusedInput={focusedInput}
          setFocusedInput={setFocusedInput}
        />
        <Input
          id="ong-senha"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Senha"
          error={!!errors.senha}
          errorMessage={errors.senha}
          focusedInput={focusedInput}
          setFocusedInput={setFocusedInput}
        />
        <Input
          id="ong-confirmar-senha"
          type="password"
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
          placeholder="Confirmar senha"
          error={!!errors.confirmarSenha}
          errorMessage={errors.confirmarSenha}
          focusedInput={focusedInput}
          setFocusedInput={setFocusedInput}
        />
        <button
          className="bg-[#023666] border-2 text-xl border-[#A3A3A3] rounded-lg w-[75%] h-14 mb-8"
          onClick={handleSubmit}
        >
          Cadastrar
        </button>
      </FormControl>
    </div>
  );
};

export default Ong;