import React, { useState } from "react";
import Logo from "../assets/Logo.jpg";
import { FormControl, Input } from "@mui/material";

const Cadastro = () => {
    const {isActivated, setActivated} = useState();

  return (
    <div className="h-[100vh] font-bold text-[#A3A3A3] w-full flex flex-col gap-12 items-center justify-center bg-black">
      <div className="border-[1px] border-[#A3A3A3] rounded-lg h-auto w-[30%]">
        <div className="flex flex-col w-full items-center mt-12">
          <img
            src={Logo}
            className="rounded-full h-auto w-44 mb-12"
            alt="logo"
          />
          <div className="w-full">
            <FormControl className="flex gap-8 w-full items-center">
                <div className="flex flex-row">
                <button className="bg-[#1E1E1E] border-2 h-auto w-auto rounded-lg p-[5px]">Registro como voluntário</button>
                <button className="bg-[#1E1E1E] border-2 h-auto w-auto rounded-lg p-[5px]">Registro como ONG</button>
                </div>
                
                <Input
                inputProps={{
                  style: {
                    color: "#A3A3A3",
                    fontWeight: "bold",
                    textIndent: "12px",
                  },
                }}
                type="text"
                className="bg-[#1E1E1E] border-2 border-[#A3A3A3] rounded-lg w-[75%] h-12"
                required
                placeholder="Nome completo"
              />
              <Input
                inputProps={{
                  style: {
                    color: "#A3A3A3",
                    fontWeight: "bold",
                    textIndent: "12px",
                  },
                }}
                className="bg-[#1E1E1E] border-2 border-[#A3A3A3] rounded-lg w-[75%] h-12"
                type="email"
                required
                placeholder="E-mail"
              />
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
                className="bg-[#1E1E1E] border-2 border-[#A3A3A3] rounded-lg w-[75%] h-12"
                placeholder="Confirmar senha"
              />
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
                className="bg-[#1E1E1E] border-2 border-[#A3A3A3] rounded-lg w-[75%] h-12"
                placeholder="Senha"
              />

              <button className="bg-[#023666] border-2 text-xl border-[#A3A3A3] rounded-lg w-[75%] h-14">
                ENTRAR
              </button>
            </FormControl>

            <div className="flex flex-row items-center justify-center mt-4 gap-2">
              <span className="border-[1px] border-[#A3A3A3] h-0 w-32" />
              <h1 className="text-lg">OU</h1>
              <span className="border-[1px] border-[#A3A3A3] h-0 w-32" />
            </div>

            <div className="flex justify-center ">
              <a href="" className="font-bold text-[#A3A3A3] text-xl mb-6">
                Esqueceu a senha?
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center border-[1px] border-[#A3A3A3] rounded-lg p-4">
        <h1 className="">tem uma conta? </h1>
        <a href="" className="text-[#034D92] indent-2">
          Conecte-se
        </a>
      </div>
    </div>
  );
};

export default Cadastro;
