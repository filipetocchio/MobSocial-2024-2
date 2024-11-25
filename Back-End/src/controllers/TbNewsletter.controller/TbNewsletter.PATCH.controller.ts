import { prisma } from '../../utils/prisma';
import { Request, Response } from "express";

async function patchTbNewsletter(req: Request, res: Response) {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const updatedNewsletters = await prisma.tbNewsletter.update({
      where: { id: Number(id) },
      data: updateData,
    });

    res.json(updatedNewsletters);
  } catch (error) {
    console.error("Erro ao atualizar a newsletters:", error);
    res.status(500).send({ message: "Erro ao atualizar a newsletters." });
  }
}

export { patchTbNewsletter };