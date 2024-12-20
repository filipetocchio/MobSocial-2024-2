import { prisma } from '../../utils/prisma';
import { Request, Response } from "express";

async function patchTbUsuarioONG(req: Request, res: Response) {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const updatedUsuario = await prisma.tbUsuarioONG.update({
      where: { id: Number(id) },
      data: updateData,
    });

    res.json(updatedUsuario);
  } catch (error) {
    console.error("Error updating usuario:", error);
    res.status(500).send({ message: "Error updating usuario." });
  }
}

export { patchTbUsuarioONG };