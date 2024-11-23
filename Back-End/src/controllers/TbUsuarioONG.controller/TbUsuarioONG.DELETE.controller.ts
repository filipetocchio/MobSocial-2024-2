import { prisma } from '../../utils/prisma';
import { Request, Response } from "express";

async function deleteTbUsuarioONG(req: Request, res: Response) {
  try {
    await prisma.tbUsuarioONG.deleteMany({});
    res.status(200).send("All usuarios have been successfully deleted.");
  } catch (error) {
    res.status(500).send("Error deleting usuarios: " + error.message);
  }
}

async function deleteByIDTbUsuarioONG(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const deletedUsuario = await prisma.tbUsuarioONG.delete({
      where: {
        id: Number(id),
      },
    });
    res.status(200).send(`Usuario with ID ${id} has been successfully deleted.`);
  } catch (error) {
    res.status(500).send("Error deleting usuario: " + error.message);
  }
}

export { deleteTbUsuarioONG, deleteByIDTbUsuarioONG };