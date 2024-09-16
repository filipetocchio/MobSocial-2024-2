import { prisma } from '../../utils/prisma';
import { Request, Response } from "express";

async function postTbVoluntario(req: Request, res: Response) {
  const { nome, cpf, disponibilidade, areasInteresse, experiencia } = req.body;

  try {
    const TbVoluntario = await prisma.tbVoluntario.create({
      data: {
        nome,
        cpf,
        disponibilidade,
        areasInteresse,
        experiencia,
      },
    });
    res.status(201).json({ message: "Voluntario created successfully", TbVoluntario });
  } catch (error) {
    res.status(500).send("Error creating voluntario: " + error.message);
  }
}

export { postTbVoluntario };