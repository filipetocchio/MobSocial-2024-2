import { prisma } from '../../utils/prisma';
import { Request, Response } from "express";

async function deleteTbEndereco(req: Request, res: Response) {
  try {
    await prisma.tbEndereco.deleteMany({});
    res.status(200).send("All enderecos have been successfully deleted.");
  } catch (error) {
    res.status(500).send("Error deleting enderecos: " + error.message);
  }
}

async function deleteByIDTbEndereco(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const deletedEndereco = await prisma.tbEndereco.delete({
      where: {
        id: Number(id),
      },
    });
    res.status(200).send(`Endereco with ID ${id} has been successfully deleted.`);
  } catch (error) {
    res.status(500).send("Error deleting endereco: " + error.message);
  }
}

export { deleteTbEndereco, deleteByIDTbEndereco };