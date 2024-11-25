import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import ProjectCard from "./ProjectCard";

const Projetos = () => {
  return (
    <div className=" border-[#2F2E2E] h-auto w-auto mt-8 flex flex-col">
      <Box sx={{ flexGrow: 1 }}>
          <div className="grid gap-8 border-2 p-8 border-gray-500 rounded-lg w-auto">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>

      </Box>
    </div>
  );
};

export default Projetos;
