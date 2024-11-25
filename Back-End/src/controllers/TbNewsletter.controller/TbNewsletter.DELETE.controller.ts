import { prisma } from '../../utils/prisma';
import { Request, Response } from "express";

async function deleteTbNewsletter(req: Request, res: Response) {
  try {
    await prisma.tbNewsletter.deleteMany({});
    res.status(200).send("All Newsletter have been successfully deleted.");
  } catch (error) {
    res.status(500).send("Error deleting Newsletter: " + error.message);
  }
}

async function deleteByIDTbNewsletter(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const deletedNewsletter = await prisma.tbNewsletter.delete({
      where: {
        id: Number(id),
      },
    });
    res.status(200).send(`Newsletter with ID ${id} has been successfully deleted.`);
  } catch (error) {
    res.status(500).send("Error deleting Newsletter: " + error.message);
  }
}

export { deleteTbNewsletter, deleteByIDTbNewsletter };