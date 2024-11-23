import React, { useState, useContext } from 'react';
import { FormControl, Button } from '@mui/material';
import Input from './Input';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CadastrarService from '../../services/cadastro';
import { UserTypeContext } from '../../context/UserTypeContext';

const Voluntario = () => {
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [passwordConfirmError, setPasswordConfirmError] = useState(false);
  const { userType } = useContext(UserTypeContext);

  console.log(userType)

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleCadastro = async (e) => {
    e.preventDefault();
    let hasError = false;

    if (!formData.email) {
      setEmailError(true);
      hasError = true;
    } else {
      setEmailError(false);
    }

    if (!formData.password) {
      setPasswordError(true);
      hasError = true;
    } else {
      setPasswordError(false);
    }

    if (!formData.username) {
      setNameError(true);
      hasError = true;
    } else {
      setNameError(false);
    }

    // if (formData.password !== formData.password_confirmation || !formData.password_confirmation) {
    //   setPasswordConfirmError(true);
    //   hasError = true;
    // } else {
    //   setPasswordConfirmError(false);
    // }

    if (!hasError) {
      try {
        const result = await CadastrarService(formData);
        if (result) {
          localStorage.setItem("token", result.accessToken);
          if (userType === "voluntario") {
            return result.isOng = false;
          }
          return true
        }
        toast.success("Voluntário cadastrado com sucesso!");
      } catch (error) {
        // Error handling is already done in CadastrarService
      }
    }
  };

  return (
    <div>
      <ToastContainer />
      <form onSubmit={handleCadastro}>
        <FormControl className="flex gap-8 w-full items-center">
          <Input
            id="voluntario-nome"
            type="text"
            name="username"
            value={formData.username}
            onChange={() => {
              setFormData({ ...formData, username: event.target.value });
            }}
            placeholder="Nome completo"
            error={nameError}
            aria-describedby="voluntario-nome-error"
            sx={{ color: 'white' }}
          />
          {nameError && <span id="voluntario-nome-error">Por favor, insira um nome.</span>}

          <Input
            id="voluntario-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={() => setFormData({ ...formData, email: event.target.value })}
            placeholder="E-mail"
            error={emailError}
            aria-describedby="voluntario-email-error"
          />
          {emailError && <span id="voluntario-email-error">Por favor, insira um email.</span>}

          <Input
            id="voluntario-senha"
            type="password"
            name="password"
            value={formData.password}
            onChange={() => setFormData({ ...formData, password: event.target.value })}
            placeholder="Senha"
            error={passwordError}
            aria-describedby="voluntario-senha-error"
          />
          {passwordError && <span id="voluntario-senha-error">Por favor, insira uma senha.</span>}

          {/* <Input
            id="voluntario-confirmar-senha"
            type="password"
            name="password_confirmation"
            value={formData.password_confirmation}
            onChange={() => setFormData({ ...formData, password_confirmation: event.target.value })}
            placeholder="Confirmar senha"
            error={passwordConfirmError}
            aria-describedby="voluntario-confirmar-senha-error"
          />
          {passwordConfirmError && <span id="voluntario-confirmar-senha-error">As senhas não coincidem.</span>} */}

          <button className="bg-[#023666] border-2 text-xl border-[#A3A3A3] rounded-lg w-[75%] h-14 mb-8" type="submit">
            Cadastrar
          </button>
        </FormControl>
      </form>
    </div>
  );
};

export default Voluntario;