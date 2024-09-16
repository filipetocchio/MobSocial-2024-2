import { prisma } from '../../utils/prisma';
import { Request, Response } from "express";

async function putTbContato(req: Request, res: Response) {
    const { id } = req.params;
    const {
      telefone,
      email,
      FkIdTbVoluntario,
    } = req.body;

    try {
        const contatoAtualizada = await prisma.tbContato.update({
            where: { id: Number(id) },
            data: {
              telefone,
              email,
              FkIdTbVoluntario,
            },  
        });

        res.json(contatoAtualizada);
    } catch (error) {
        if (error.code === 'P2025') {
            res.status(404).send({ error: "Contato not found" });
        } else {
            res.status(500).send({ error: "Error updating contato" });
        }
    }
}

export { putTbContato };