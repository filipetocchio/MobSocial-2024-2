import { prisma } from '../../utils/prisma';
import { Request, Response } from "express";

async function deleteTbVoluntario(req: Request, res: Response) {
  try {
    await prisma.tbVoluntario.deleteMany({});
    res.status(200).send("All voluntario have been successfully deleted.");
  } catch (error) {
    res.status(500).send("Error deleting voluntario: " + error.message);
  }
}

async function deleteByIDTbVoluntario(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const deletedVoluntario = await prisma.tbVoluntario.delete({
      where: {
        id: Number(id),
      },
    });
    res.status(200).send(`Voluntario with ID ${id} has been successfully deleted.`);
  } catch (error) {
    res.status(500).send("Error deleting voluntario: " + error.message);
  }
}

export { deleteTbVoluntario, deleteByIDTbVoluntario };