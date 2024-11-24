import React, { useContext, useEffect } from "react";
import { UserPhotoContext } from "../../context/UserPhotoContext";
import { UserContext } from "../../context/UserContext";
import UserIcon from "../../assets/user.svg";
import { Link } from "react-router-dom";

const User = ({ isProjeto, isPerfil, isDash, isPerfilOng, isHome }) => {
  const { userPhoto } = useContext(UserPhotoContext);
  const { isOng } = useContext(UserContext);

  useEffect(() => {
    console.log("User component, the isOng is:", isOng);
  }, [isOng]);

  const navigationsOng = {
    perfil: "/PerfilONG",
    dashboard: "/DashboardONG",
  };

  const navigations = {
    perfil: "/PerfilVoluntario",
    dashboard: "/Dashboard-Voluntario",
    projetos: "/Dashboard-Voluntario",
  };

  return (
    <div className="bg-black border-2 border-[#2F2E2E] rounded-lg flex flex-col p-6 items-center gap-8 h-auto">
      <img
        src={userPhoto || UserIcon}
        alt="User"
        className="h-32 w-32 rounded-full border-2 border-[#A3A3A3]"
      />
      {isOng ? (
        <div className="text-white w-full flex flex-col gap-4">
          <Link
            to="/"
            className={`${
              isHome && "bg-[#023666] border-0 font-extrabold"
            } border-2 border-[#2F2E2E] rounded lg p-4 text-center hover:scale-105 duration-75 `}
          >
            Página Inicial
          </Link>
          <Link
            to="/PerfilONG"
            className={`${
              isPerfilOng && "bg-[#023666] border-0 font-extrabold"
            } border-2 border-[#2F2E2E] rounded lg p-4 text-center hover:scale-105 duration-75 `}
          >
            Meu Perfil
          </Link>
          <Link
            to="/DashboardONG"
            className={`${
              isDash && "bg-[#023666] border-0 font-extrabold"
            } border-2 border-[#2F2E2E] rounded lg p-4 text-center hover:scale-105 duration-75 `}
          >
            Dashboard
          </Link>
        </div>
      ) : (
        <div className="text-white w-full flex flex-col gap-4">
          <Link
            to="/"
            className={`${
              isHome && "bg-[#023666] border-0 font-extrabold"
            } border-2 border-[#2F2E2E] rounded lg p-4 text-center hover:scale-105 duration-75 `}
          >
            Página Inicial
          </Link>
          <Link
            to="/PerfilVoluntario"
            className={`${
              isPerfil && "bg-[#023666] border-0 font-extrabold"
            } border-2 border-[#2F2E2E] rounded lg p-4 text-center hover:scale-105 duration-75 `}
          >
            Meu Perfil
          </Link>
          <Link
            to="/Dashboard-Voluntario"
            className={`${
              isDash && "bg-[#023666] border-0 font-extrabold"
            } border-2 border-[#2F2E2E] rounded lg p-4 text-center hover:scale-105 duration-75 `}
          >
            Dashboard
          </Link>
        </div>
      )}
    </div>
  );
};

export default User;
