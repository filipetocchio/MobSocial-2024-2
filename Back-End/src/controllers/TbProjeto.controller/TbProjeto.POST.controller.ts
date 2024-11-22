import { prisma } from '../../utils/prisma';
import { Request, Response } from "express";

async function postTbProjeto(req: Request, res: Response) {
  const { nome, descricao, data, hora, local, numerVagas, hashimg } = req.body;

  try {
    const TbProjeto = await prisma.tbProjeto.create({
      data: {
        nome,
        descricao,
        data,
        hora,
        local,
        numerVagas,
        hashimg,
      },
    });
    res.status(201).json({ message: "Projeto created successfully", TbProjeto });
  } catch (error) {
    res.status(500).send("Error creating projeto: " + error.message);
  }
}

export { postTbProjeto };