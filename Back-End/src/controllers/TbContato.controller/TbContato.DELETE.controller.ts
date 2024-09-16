import { prisma } from '../../utils/prisma';
import { Request, Response } from "express";

async function deleteTbContato(req: Request, res: Response) {
  try {
    await prisma.tbContato.deleteMany({});
    res.status(200).send("All contatos have been successfully deleted.");
  } catch (error) {
    res.status(500).send("Error deleting contatos: " + error.message);
  }
}

async function deleteByIDTbContato(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const deletedContato = await prisma.tbContato.delete({
      where: {
        id: Number(id),
      },
    });
    res.status(200).send(`Contato with ID ${id} has been successfully deleted.`);
  } catch (error) {
    res.status(500).send("Error deleting contato: " + error.message);
  }
}

export { deleteTbContato, deleteByIDTbContato };