import React from "react";

const ProjectCard = ({ projeto }) => {
  return (
    <div className="flex p-4 flex-col rounded-lg border-2 w-full border-gray-500 justify-between">
      <div className="flex flex-col justify-center items-center text-center gap-2">
        <img
          src={projeto.logo}
          className="h-20 w-20 rounded-full border-2 border-blue-500"
          alt="Logo"
        />
        <h1 className="text-lg font-bold">{projeto.title}</h1>
        <h2 className="text-sm text-gray-300">{projeto.category}</h2>
      </div>
      <div className="flex items-center w-auto justify-center mt-4">
        <img
          src={projeto.image}
          alt={projeto.title}
          className="rounded-lg h-36 w-36 object-cover"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
