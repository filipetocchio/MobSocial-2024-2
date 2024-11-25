import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const uploadUserPhoto = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // ID do usuário vindo da rota
    console.log("ID recebido:", id); // Log para validar o ID
    const file = req.file; // Arquivo enviado pelo multer

    if (!file) {
      return res.status(400).json({ message: "Nenhuma imagem foi enviada." });
    }

    const filePath = `/uploads/${file.filename}`; // Caminho relativo do arquivo

    // Atualiza o registro do usuário com o caminho da imagem
    const updatedUser = await prisma.tbUsuarioVoluntario.update({
      where: { id: Number(id) },
      data: { fotoPerfil: filePath },
    });

    return res.status(200).json({
      message: "Foto de perfil atualizada com sucesso!",
      data: updatedUser,
    });
  } catch (error) {
    console.error("Erro ao atualizar a foto de perfil:", error);
    return res.status(500).json({
      message: "Erro ao atualizar a foto de perfil. Tente novamente mais tarde.",
    });
  }
};
