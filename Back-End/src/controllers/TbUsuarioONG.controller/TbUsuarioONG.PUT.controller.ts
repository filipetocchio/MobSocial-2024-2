import { prisma } from '../../utils/prisma';
import { Request, Response } from "express";

async function putTbUsuarioONG(req: Request, res: Response) {
    const { id } = req.params;
    const {
        email,
        username,
    } = req.body;

    try {
        const usuarioAtualizada = await prisma.tbUsuarioONG.update({
            where: { id: Number(id) },
            data: {
              email,
              username,
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

export { putTbUsuarioONG };