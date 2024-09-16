import { prisma } from '../../utils/prisma';
import { Request, Response } from "express";

async function patchTbEndereco(req: Request, res: Response) {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const updatedEndereco = await prisma.tbEndereco.update({
      where: { id: Number(id) },
      data: updateData,
    });

    res.json(updatedEndereco);
  } catch (error) {
    console.error("Error updating endereco:", error);
    res.status(500).send({ message: "Error updating endereco." });
  }
}

export { patchTbEndereco };