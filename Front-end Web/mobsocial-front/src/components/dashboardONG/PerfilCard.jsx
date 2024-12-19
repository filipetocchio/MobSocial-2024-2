import React, { useState } from "react";
import LogoOng from "../../assets/logoONG.png";

const perfilCard = () => {
  const [buttonState, setButtonsState] = useState(false)

  const handleClick = () => {
    setButtonsState(!buttonState)
  }

  return (
    <div className="flex flex-row gap-4 w-full mb-4">
      <img src={LogoOng} alt="icon" className="h-32 rounded-full w-32" />
      <div className="flex flex-col gap-8 w-full">
        <div className="flex justify-between">
          <h1>ONG - Patas e Lares</h1>
          <button
            onClick={() => handleClick()}
            className={`rounded-lg w-auto px-4 py-2 border border-[#A3A3A3] ${
              buttonState 
                ? "bg-[#023666] text-white font-bold"
                : "bg-[#1E1E1E] text-white hover:scale-105 duration-75"
            }`}
          >
            {buttonState ? "Seguindo" : "Seguir"}
          </button>
        </div>

        <h2>
          ONG dedicada ao resgate e adoção de pets 🐾 |<br />
          Conscientização e eventos de adoção 💙 |<br />
          Participe e ajude a transformar vidas!
        </h2>
      </div>
    </div>
  );
};

export default perfilCard;
