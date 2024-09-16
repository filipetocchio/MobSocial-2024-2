import { prisma } from '../../utils/prisma';
import { Request, Response } from "express";

async function postTbONG(req: Request, res: Response) {
  const { cnpj, razaoSocial, nomeFantasia, site, descricao, areasAtuacao, responsavel } = req.body;

  try {
    const newONG = await prisma.tbONG.create({
      data: {
        cnpj,
        razaoSocial,
        nomeFantasia,
        site,
        descricao,
        areasAtuacao,
        responsavel,
      },
    });
    res.status(201).json({ message: "ONG created successfully", newONG });
  } catch (error) {
    res.status(500).send("Error creating ONG: " + error.message);
  }
}

export { postTbONG };