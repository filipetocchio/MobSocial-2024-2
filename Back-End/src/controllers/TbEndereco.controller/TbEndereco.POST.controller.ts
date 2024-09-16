import { prisma } from '../../utils/prisma';
import { Request, Response } from "express";

async function postTbEndereco(req: Request, res: Response) {
  const { endereco, cidade, estado, cep, FkIdTbVoluntario } = req.body;

  try {
    const newEndereco = await prisma.tbEndereco.create({
      data: {
        endereco,
        cidade,
        estado,
        cep,
        FkIdTbVoluntario,
      },
    });
    res.status(201).json({ message: "Endereco created successfully", newEndereco });
  } catch (error) {
    res.status(500).send("Error creating endereco: " + error.message);
  }
}

export { postTbEndereco };