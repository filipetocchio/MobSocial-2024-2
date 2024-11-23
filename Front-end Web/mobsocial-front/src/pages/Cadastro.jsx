import React, { useState, useContext } from "react";
import Logo from "../assets/Logo.jpg";
import Voluntario from "../components/cadastro/voluntario";
import Ong from "../components/cadastro/ong";

const Cadastro = () => {
  const [activateVoluntario, setVoluntario] = useState(false);
  const [activateOng, setOng] = useState(false);


  const handleChoice = (choice) => {
    if (choice === "voluntario") {
      setVoluntario(true);
      setOng(false);
    } else if (choice === "ong") {
      setOng(true);
      setVoluntario(false);
    }
  };

  return (
    <div className="h-screen overflow-hidden p-8 font-bold text-[#A3A3A3] w-full flex flex-col gap-8 items-center justify-center bg-black overflow-hidden">
      <div className="border-[1px] border-[#A3A3A3] flex justify-center rounded-lg h-auto overflow-y-scroll">
        <div className="flex flex-col w-[75%] items-center mt-12">
          <img
            onClick={() => {
              window.location.href = "/";
            }}
            src={Logo}
            className="rounded-full h-auto w-44 mb-12 cursor-pointer"
            alt="logo"
          />
          <div className="w-full">
            <div className="flex flex-row gap-4 justify-center mb-8">
              <button
                onClick={() => handleChoice("voluntario")}
                className={`${
                  activateVoluntario ? "bg-[#023666]" : "bg-[#1E1E1E]"
                } hover:opacity-70 border-2 h-auto w-auto rounded-lg p-[5px] hover:scale-105 duration-75`}
              >
                Registro como voluntário
              </button>

              <button
                onClick={() => handleChoice("ong")}
                className={`${
                  activateOng ? "bg-[#023666]" : "bg-[#1E1E1E]"
                } hover:opacity-70 border-2 h-auto w-auto rounded-lg p-[5px] hover:scale-105 duration-75`}
              >
                Registro como ONG
              </button>
            </div>

            {activateVoluntario && (
              <Voluntario
              />
            )}

            {activateOng && (
              <Ong
              />
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-center border-[1px] border-[#A3A3A3] rounded-lg p-4">
        <h1 className="">Tem uma conta? </h1>
        <a href="/login" className="text-[#034D92] indent-2">
          Conecte-se
        </a>
      </div>
    </div>
  );
};

export default Cadastro;