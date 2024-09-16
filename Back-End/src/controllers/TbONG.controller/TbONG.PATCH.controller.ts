import { prisma } from '../../utils/prisma';
import { Request, Response } from "express";

async function patchTbONG(req: Request, res: Response) {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const updatedONG = await prisma.tbONG.update({
      where: { id: Number(id) },
      data: updateData,
    });

    res.json(updatedONG);
  } catch (error) {
    console.error("Error updating ONG:", error);
    res.status(500).send({ message: "Error updating ONG." });
  }
}

export { patchTbONG };