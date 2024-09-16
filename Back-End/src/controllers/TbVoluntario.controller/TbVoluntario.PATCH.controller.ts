import { prisma } from '../../utils/prisma';
import { Request, Response } from "express";

async function patchTbVoluntario(req: Request, res: Response) {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const updatedVoluntarios = await prisma.tbVoluntario.update({
      where: { id: Number(id) },
      data: updateData,
    });

    res.json(updatedVoluntarios);
  } catch (error) {
    console.error("Erro ao atualizar a voluntarios:", error);
    res.status(500).send({ message: "Erro ao atualizar a voluntarios." });
  }
}

export { patchTbVoluntario };