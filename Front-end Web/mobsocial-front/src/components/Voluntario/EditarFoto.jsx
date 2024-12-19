import React, { useContext, useState } from "react";
import { UserPhotoContext } from "../../context/UserPhotoContext";
import EditarVoluntarioService from "../../services/editarVoluntario";

const EditarFoto = () => {
  const { userPhoto, setUserPhoto } = useContext(UserPhotoContext);

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
    <div className="w-full">
      <div className="border-2 border-[#A3A3A3] rounded-lg p-8 px-20 mb-8 flex flex-row justify-between items-center">
        <img
          src={userPhoto}
          alt="User"
          className="h-32 w-32 rounded-full border-2 border-[#A3A3A3]"
        ></img>
        <div className="flex flex-row gap-4">
          <button
            onClick={handleChangePhotoClick}
            className="hover:brightness-90 hover:scale-105 text-[#A3A3A3] text-xl border-2 border-[#A3A3A3] rounded-lg p-4 h-12 flex items-center"
          >
            ALTERAR FOTO
          </button>

          {window.location.href !== "/EditVoluntario" && (
          <button 
            onClick={() => window.location.href="/EditVoluntario"}
            className="hover:brightness-90 hover:scale-105 text-[#A3A3A3] text-xl border-2 border-[#A3A3A3] rounded-lg p-4 h-12 flex items-center">
            EDITAR PERFIL
          </button>
          )}
        </div>
        <input
          type="file"
          id="fileInput"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </div>

    </div>
  );
};

export default EditarFoto;
