import { prisma } from '../../utils/prisma';
import { Request, Response } from "express";

async function deleteTbONG(req: Request, res: Response) {
  try {
    await prisma.tbONG.deleteMany({});
    res.status(200).send("All ONGs have been successfully deleted.");
  } catch (error) {
    res.status(500).send("Error deleting ONGs: " + error.message);
  }
}

async function deleteByIDTbONG(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const deletedONG = await prisma.tbONG.delete({
      where: {
        id: Number(id),
      },
    });
    res.status(200).send(`ONG with ID ${id} has been successfully deleted.`);
  } catch (error) {
    res.status(500).send("Error deleting ONG: " + error.message);
  }
}

export { deleteTbONG, deleteByIDTbONG };