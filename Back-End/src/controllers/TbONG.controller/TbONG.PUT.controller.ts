import { prisma } from '../../utils/prisma';
import { Request, Response } from "express";

async function putTbONG(req: Request, res: Response) {
    const { id } = req.params;
    const {
      cnpj,
      razaoSocial,
      nomeFantasia,
      site,
      descricao,
      areasAtuacao,
      responsavel,
    } = req.body;

    try {
        const ONGAtualizada = await prisma.tbONG.update({
            where: { id: Number(id) },
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

        res.json(ONGAtualizada);
    } catch (error) {
        if (error.code === 'P2025') {
            res.status(404).send({ error: "ONG not found" });
        } else {
            res.status(500).send({ error: "Error updating ONG" });
        }
    }
}

export { putTbONG };