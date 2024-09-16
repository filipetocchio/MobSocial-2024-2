import { prisma } from '../../utils/prisma';
import { Request, Response } from "express";

async function putTbEndereco(req: Request, res: Response) {
    const { id } = req.params;
    const {
      endereco,
      cidade,
      estado,
      cep,
      FkIdTbVoluntario,
    } = req.body;

    try {
        const enderecoAtualizada = await prisma.tbEndereco.update({
            where: { id: Number(id) },
            data: {
              endereco,
              cidade,
              estado,
              cep,
              FkIdTbVoluntario,
            },  
        });

        res.json(enderecoAtualizada);
    } catch (error) {
        if (error.code === 'P2025') {
            res.status(404).send({ error: "Endereco not found" });
        } else {
            res.status(500).send({ error: "Error updating endereco" });
        }
    }
}

export { putTbEndereco };