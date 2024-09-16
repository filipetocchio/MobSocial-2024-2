import { prisma } from '../../utils/prisma';
import { Request, Response } from "express";

async function deleteTbUsuario(req: Request, res: Response) {
  try {
    await prisma.tbUsuario.deleteMany({});
    res.status(200).send("All usuarios have been successfully deleted.");
  } catch (error) {
    res.status(500).send("Error deleting usuarios: " + error.message);
  }
}

async function deleteByIDTbUsuario(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const deletedUsuario = await prisma.tbUsuario.delete({
      where: {
        id: Number(id),
      },
    });
    res.status(200).send(`Usuario with ID ${id} has been successfully deleted.`);
  } catch (error) {
    res.status(500).send("Error deleting usuario: " + error.message);
  }
}

export { deleteTbUsuario, deleteByIDTbUsuario };