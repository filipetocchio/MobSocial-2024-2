import { prisma } from '../../utils/prisma';
import { Request, Response } from "express";

async function getTbContato(req: Request, res: Response) {
  try {
    const contatos = await prisma.tbContato.findMany({});
    res.status(200).json(contatos);
  } catch (error) {
    res.status(500).send("Error retrieving contatos: " + error.message);
  }
}

async function getByIDTbContato(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const contato = await prisma.tbContato.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (contato) {
      res.status(200).json(contato);
    } else {
      res.status(404).send("Contato not found");
    }
  } catch (error) {
    res.status(500).send("Error retrieving contato: " + error.message);
  }
}

export { getTbContato, getByIDTbContato };