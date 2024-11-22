import { prisma } from '../../utils/prisma';
import { Request, Response } from "express";

async function patchTbProjeto(req: Request, res: Response) {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const updatedProjetos = await prisma.tbProjeto.update({
      where: { id: Number(id) },
      data: updateData,
    });

    res.json(updatedProjetos);
  } catch (error) {
    console.error("Erro ao atualizar a Projetos:", error);
    res.status(500).send({ message: "Erro ao atualizar a Projetos." });
  }
}

export { patchTbProjeto };