import { prisma } from '../../utils/prisma';
import { Request, Response } from "express";

async function getTbProjeto(req: Request, res: Response) {
  try {
    const Projetos = await prisma.tbProjeto.findMany({});
    res.status(200).json(Projetos);
  } catch (error) {
    res.status(500).send("Error retrieving projetos: " + error.message);
  }
}

async function getByIDTbProjeto(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const Projetos = await prisma.tbProjeto.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (Projetos) {
      res.status(200).json(Projetos);
    } else {
      res.status(404).send("Projetos not found");
    }
  } catch (error) {
    res.status(500).send("Error retrieving projetos: " + error.message);
  }
}

export { getTbProjeto, getByIDTbProjeto };