import { prisma } from '../../utils/prisma';
import { Request, Response } from "express";

async function patchTbContato(req: Request, res: Response) {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const updatedContato = await prisma.tbContato.update({
      where: { id: Number(id) },
      data: updateData,
    });

    res.json(updatedContato);
  } catch (error) {
    console.error("Error updating contato:", error);
    res.status(500).send({ message: "Error updating contato." });
  }
}

export { patchTbContato };