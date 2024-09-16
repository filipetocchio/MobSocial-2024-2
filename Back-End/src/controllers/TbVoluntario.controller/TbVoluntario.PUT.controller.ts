import { prisma } from '../../utils/prisma';
import { Request, Response } from "express";

async function putTbVoluntario(req: Request, res: Response) {
    const { id } = req.params;
    const {
        nome,
        cpf,
        disponibilidade,
        areasInteresse,
        experiencia,
    } = req.body;

    try {
        const VoluntariosAtualizada = await prisma.tbVoluntario.update({
            where: { id: Number(id) },
            data: {
                nome,
                cpf,
                disponibilidade,
                areasInteresse,
                experiencia,
            },
        });

        res.json(VoluntariosAtualizada);
    } catch (error) {
        if (error.code === 'P2025') {
            res.status(404).send({ error: "Voluntarios não encontrada" });
        } else {
            res.status(500).send({ error: "Erro ao atualizar a voluntarios" });
        }
    }
}

export { putTbVoluntario };