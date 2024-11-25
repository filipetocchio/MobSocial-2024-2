import { prisma } from '../../utils/prisma';
import { Request, Response } from "express";

async function putTbProjeto(req: Request, res: Response) {
    const { id } = req.params;
    const {
        nome,
        descricao,
        data,
        hora,
        local,
        numerVagas,
        hashimg,
    } = req.body;

    try {
        const ProjetosAtualizada = await prisma.tbProjeto.update({
            where: { id: Number(id) },
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

        res.json(ProjetosAtualizada);
    } catch (error) {
        if (error.code === 'P2025') {
            res.status(404).send({ error: "Projetos não encontrada" });
        } else {
            res.status(500).send({ error: "Erro ao atualizar a Projetos" });
        }
    }
}

export { putTbProjeto };