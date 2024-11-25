import React from "react";
import Box from "@mui/material/Box";
import ProjectCard from "./ProjectCard";

const Projetos = ({ projetos }) => {
  return (
    <div className="border-2 border-[#2F2E2E] h-auto w-auto mt-8 flex flex-col">
      <Box sx={{ flexGrow: 1 }}>
        <div className="grid gap-8 grid-cols-3 p-8 border-2 border-gray-500 rounded-lg w-auto">
          {projetos.map((projeto, index) => (
            <ProjectCard key={index} projeto={projeto} />
          ))}
        </div>
      </Box>
    </div>
  );
};

export default Projetos;
