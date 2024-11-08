import React from "react";
import SearchBar from "../components/SearchBar";
import User from "../components/dashboardVoluntario/user";
import ProjetosRecomendados from "../components/dashboardVoluntario/projetosRecomendados";
import FT from "../assets/FT.png"
import FT2 from "../assets/FT-2.png";
import Project1 from "../assets/Project1.svg";
import Project2 from "../assets/Project2.svg";

const DashboardVoluntario = () => {
  const randomDate1 = new Date(
    +new Date() - Math.floor(Math.random() * 10000000000)
  );
  const randomDate2 = new Date(
    +new Date() - Math.floor(Math.random() * 10000000000)
  );

  const formatDate = (date) => {
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${month}/${year}`;
  };

  const projetos = [
    {
      titulo: "Reflorestamento Urbano",
      data: `${formatDate(randomDate1)} a ${formatDate(randomDate2)}`,
      imagem: FT,
      logo: Project1,
      descricao: `O projeto Reflorestamento Urbano é uma iniciativa dedicada à
        revitalização de áreas verdes urbanas, focada no plantio de árvores
        nativas em áreas com escassez de vegetação. A ação busca não apenas
        o fortalecimento do ecossistema local, mas também o engajamento da
        comunidade para a preservação do meio ambiente, promovendo a
        conscientização sobre a importância do reflorestamento em regiões
        urbanas.`,
    },
    {
      titulo: "Limpeza de Praias",
      data: `${formatDate(randomDate1)} a ${formatDate(randomDate2)}`,
      logo: Project2,
      imagem: FT2,
      descricao: `O projeto "Apoio Escolar para Crianças" tem como 
objetivo oferecer reforço escolar gratuito a crianças 
em situação de vulnerabilidade social. Acreditamos 
que a educação é uma das ferramentas mais poderosas 
para transformar vidas, e, por isso, nos dedicamos a 
apoiar essas crianças no desenvolvimento de 
habilidades essenciais e na melhoria do seu 
desempenho escolar. Nossos voluntários, em 
uma sala de aula acolhedora, oferecem um 
acompanhamento próximo e personalizado, 
reforçando o conteúdo escolar e ajudando no 
desenvolvimento da confiança e do interesse 
pelo aprendizado.`,
    },
  ];

  return (
    <div className="bg-black min-h-screen p-8">
      <div className="grid grid-cols-[6fr_1fr]">
        <div className="flex items-center flex-col gap-12">
          <SearchBar />
          <ProjetosRecomendados projetos={projetos} />
        </div>
        <div className="h-auto">
          <User />
        </div>
      </div>
    </div>
  );
};

export default DashboardVoluntario;
