import { prisma } from '../../utils/prisma';
import { Request, Response } from "express";

async function putTbNewsletter(req: Request, res: Response) {
    const { id } = req.params;
    const {
        titulo,
        conteudo,
    } = req.body;

    try {
        const NewslettersAtualizada = await prisma.tbNewsletter.update({
            where: { id: Number(id) },
            data: {
                titulo,
                conteudo,
            },
        });

        res.json(NewslettersAtualizada);
    } catch (error) {
        if (error.code === 'P2025') {
            res.status(404).send({ error: "Newsletters não encontrada" });
        } else {
            res.status(500).send({ error: "Erro ao atualizar a newsletters" });
        }
    }
}

export { putTbNewsletter };