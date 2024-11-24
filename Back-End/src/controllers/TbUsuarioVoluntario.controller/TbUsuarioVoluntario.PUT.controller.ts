import { prisma } from '../../utils/prisma';
import { Request, Response } from "express";

async function putTbUsuarioVoluntario(req: Request, res: Response) {
    const { id } = req.params;
    const {
        email,
        username,
        password,
        refreshToken,
        nome,
        cpf,
        disponibilidade,
        areasInteresse,
        experiencia,
    } = req.body;

    try {
        const usuarioAtualizada = await prisma.tbUsuarioVoluntario.update({
            where: { id: Number(id) },
            data: {
                email,
                username,
                password,
                refreshToken,
                nome,
                cpf,
                disponibilidade,
                areasInteresse,
                experiencia,
            },  
        });

        res.json(usuarioAtualizada);
    } catch (error) {
        if (error.code === 'P2025') {
            res.status(404).send({ error: "Usuario not found" });
        } else {
            res.status(500).send({ error: "Error updating usuario" });
        }
    }
}

export { putTbUsuarioVoluntario };