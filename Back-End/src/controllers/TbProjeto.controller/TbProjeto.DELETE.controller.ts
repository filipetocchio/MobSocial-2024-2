import { prisma } from '../../utils/prisma';
import { Request, Response } from "express";

async function deleteTbProjeto(req: Request, res: Response) {
  try {
    await prisma.tbProjeto.deleteMany({});
    res.status(200).send("All projeto have been successfully deleted.");
  } catch (error) {
    res.status(500).send("Error deleting projeto: " + error.message);
  }
}

async function deleteByIDTbProjeto(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const deletedProjeto = await prisma.tbProjeto.delete({
      where: {
        id: Number(id),
      },
    });
    res.status(200).send(`Projeto with ID ${id} has been successfully deleted.`);
  } catch (error) {
    res.status(500).send("Error deleting projeto: " + error.message);
  }
}

export { deleteTbProjeto, deleteByIDTbProjeto };