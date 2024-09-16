import { prisma } from '../../utils/prisma';
import { Request, Response } from "express";

async function postTbContato(req: Request, res: Response) {
  const { telefone, email, FkIdTbVoluntario } = req.body;

  try {
    const newContato = await prisma.tbContato.create({
      data: {
        telefone,
        email,
        FkIdTbVoluntario,
      },
    });
    res.status(201).json({ message: "Contato created successfully", newContato });
  } catch (error) {
    res.status(500).send("Error creating contato: " + error.message);
  }
}

export { postTbContato };