import React, { useState } from "react";
import { FormControl } from "@mui/material";
import Input from "./Input";

const Voluntario = () => {
  const [focusedInput, setFocusedInput] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordConfirmError, setPasswordConfirmError] = useState(false);

  const handleLogin = () => {
    let hasError = false;
    if (!email) {
      setEmailError(true);
      hasError = true;
    } else {
      setEmailError(false);
    }

    if (!password) {
      setPasswordError(true);
      hasError = true;
    } else {
      setPasswordError(false);
    }

    if (!name) {
      setNameError(true);
      hasError = true;
    } else {
      setNameError(false);
    }

    if (password !== passwordConfirm || !passwordConfirm) {
      setPasswordConfirmError(true);
      hasError = true;
    } else {
      setPasswordConfirmError(false);
    }

    if (!hasError) {
      // ...existing code...
    }
  };

  return (
    <div>
      <FormControl className="flex gap-8 w-full items-center">
        <Input
          id="voluntario-nome"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome completo"
          error={nameError}
          errorMessage="Por favor, insira um nome."
          focusedInput={focusedInput}
          setFocusedInput={setFocusedInput}
        />
        <Input
          id="voluntario-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
          error={emailError}
          errorMessage="Por favor, insira um email."
          focusedInput={focusedInput}
          setFocusedInput={setFocusedInput}
        />
        <Input
          id="voluntario-senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
          error={passwordError}
          errorMessage="Por favor, insira uma senha."
          focusedInput={focusedInput}
          setFocusedInput={setFocusedInput}
        />
        <Input
          id="voluntario-confirmar-senha"
          type="password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          placeholder="Confirmar senha"
          error={passwordConfirmError}
          errorMessage="As senhas não são iguais."
          focusedInput={focusedInput}
          setFocusedInput={setFocusedInput}
        />
        <button
          onClick={handleLogin}
          className="bg-[#023666] border-2 text-xl border-[#A3A3A3] rounded-lg w-[75%] h-14 mb-8"
        >
          CADASTRAR
        </button>
      </FormControl>
    </div>
  );
};

export default Voluntario;
