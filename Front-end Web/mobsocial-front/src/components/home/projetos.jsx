import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import ProjectCard from "./ProjectCard";

const Projetos = () => {
  return (
    <div className=" border-[#2F2E2E] h-auto w-auto mt-8">
      <Box sx={{ flexGrow: 1 }}>
        <div className="grid grid-cols-3 grid-rows-1 gap-4 p-4">
          <div className="grid grid-cols-1 grid-rows-3 bg-2 gap-8 p-8 border-2 border-gray-500 rounded-lg">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>

          <div className="grid grid-cols-1 grid-rows-3 bg-2 gap-8 p-8 border-2 border-gray-500 rounded-lg">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>

          <div className="grid grid-cols-1 grid-rows-3 bg-2 gap-8 p-8 border-2 border-gray-500 rounded-lg">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>

        </div>
      </Box>
    </div>
  );
};

export default Projetos;
