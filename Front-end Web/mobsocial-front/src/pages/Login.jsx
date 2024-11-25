import React, { useState, useEffect, useContext } from "react";
import Logo from "../assets/Logo.jpg";
import { FormControl, Input } from "@mui/material";
import { LoginService, LoginService2 } from "../services/login";
import { ToastContainer } from "react-toastify";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [refreshToken, setRefreshToken] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setRefreshToken(storedToken);
    }
  }, []);

  const handleLogin = async () => {
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

    if (!hasError) {
      const login = { email: email, password: password };
      try {
        const response = await LoginService(login, refreshToken);
        if (response.status !== 200) {
          // Perform second request if the first one fails
          const secondResponse = await LoginService2(login, refreshToken);
          if (secondResponse.status === 200) {
            console.log("Second request successful", secondResponse.data);
            localStorage.setItem("user", JSON.stringify(secondResponse.data));
          } else {
            console.error("Second request failed", secondResponse.status);
          }
        }

        if (response.status == 200) {
        window.location.href = "/";
        }

      } catch (e) {
        console.error("Login failed", e);
      }
    }
  };

  console.log(localStorage.getItem("token"));

  return (
    <div className="h-[100vh] font-bold text-[#A3A3A3] w-full flex flex-col gap-12 items-center justify-center bg-black">
            <ToastContainer />
      <div className="border-[1px] border-[#A3A3A3] rounded-lg h-auto w-[30%]">
        <div className="flex flex-col w-full items-center mt-12">
          <img
            src={Logo}
            onClick={() =>  {window.location.href="/" }}
            className="rounded-full h-auto w-44 mb-12 cursor-pointer"
            alt="logo"
          />
          <div className="w-full mb-6">
            <FormControl className="flex gap-8 w-full items-center">

              <div className="flex flex-col items-center w-full">
                {emailError && (
                  <span className="text-red-500 h-8">
                    Por favor, insira um e-mail válido.
                  </span>
                )}
                <Input
                  inputProps={{
                    style: {
                      color: "#A3A3A3",
                      fontWeight: "bold",
                      textIndent: "12px",
                    },
                  }}
                  className={`bg-[#1E1E1E] border-2 ${
                    emailError ? "border-red-500" : "border-[#A3A3A3]"
                  } rounded-lg w-[75%] h-12`}
                  error={emailError}
                  type="text"
                  required
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="flex flex-col items-center w-full">
                {passwordError && (
                  <span className="text-red-500 h-8">
                    Por favor, insira uma senha válida.
                  </span>
                )}
                <Input
                  inputProps={{
                    style: {
                      color: "#A3A3A3",
                      fontWeight: "bold",
                      textIndent: "12px",
                    },
                  }}
                  type="password"
                  required
                  className={`bg-[#1E1E1E] border-2 ${
                    passwordError ? "border-red-500" : "border-[#A3A3A3]"
                  } rounded-lg w-[75%] h-12`}
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                className="bg-[#023666] hover:scale-110 duration-75 border-2 text-xl border-[#A3A3A3] rounded-lg w-[75%] h-14"
                onClick={handleLogin}
              >
                ENTRAR
              </button>
            </FormControl>

            {/* <div className="flex flex-row items-center justify-center mt-4 gap-2">
              <span className="border-[1px] border-[#A3A3A3] h-0 w-32" />
              <h1 className="text-lg">OU</h1>
              <span className="border-[1px] border-[#A3A3A3] h-0 w-32" />
            </div> */}

            {/* <div className="flex justify-center ">
              <a href="" className="font-bold text-[#A3A3A3] text-xl mb-6">
                Esqueceu a senha?
              </a>
            </div> */}
          </div>
        </div>
      </div>

      <div className="flex justify-center border-[1px] border-[#A3A3A3] rounded-lg p-4">
        <h1 className="">Não tem uma conta? </h1>
        <a href="/cadastro" className="text-[#034D92] indent-2">
          Cadastre-se!
        </a>
      </div>
    </div>
  );
};

export default Login;
