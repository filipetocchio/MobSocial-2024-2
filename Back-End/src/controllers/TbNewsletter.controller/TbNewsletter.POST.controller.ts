import { prisma } from '../../utils/prisma';
import { Request, Response } from "express";

async function postTbNewsletter(req: Request, res: Response) {
  const { titulo, conteudo } = req.body;

  try {
    const TbNewsletter = await prisma.tbNewsletter.create({
      data: {
        titulo,
        conteudo,
      },
    });
    res.status(201).json({ message: "Newsletter created successfully", TbNewsletter });
  } catch (error) {
    res.status(500).send("Error creating newsletter: " + error.message);
  }
}

export { postTbNewsletter };