import { prisma } from '../../utils/prisma';
import { Request, Response } from "express";

async function getTbEndereco(req: Request, res: Response) {
  try {
    const enderecos = await prisma.tbEndereco.findMany({});
    res.status(200).json(enderecos);
  } catch (error) {
    res.status(500).send("Error retrieving enderecos: " + error.message);
  }
}

async function getByIDTbEndereco(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const endereco = await prisma.tbEndereco.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (endereco) {
      res.status(200).json(endereco);
    } else {
      res.status(404).send("Endereco not found");
    }
  } catch (error) {
    res.status(500).send("Error retrieving endereco: " + error.message);
  }
}

export { getTbEndereco, getByIDTbEndereco };