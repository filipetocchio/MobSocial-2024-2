import { prisma } from '../../utils/prisma';
import { Request, Response } from "express";

async function getTbVoluntario(req: Request, res: Response) {
  try {
    const Voluntarios = await prisma.tbVoluntario.findMany({});
    res.status(200).json(Voluntarios);
  } catch (error) {
    res.status(500).send("Error retrieving voluntarios: " + error.message);
  }
}

async function getByIDTbVoluntario(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const Voluntarios = await prisma.tbVoluntario.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (Voluntarios) {
      res.status(200).json(Voluntarios);
    } else {
      res.status(404).send("Voluntarios not found");
    }
  } catch (error) {
    res.status(500).send("Error retrieving voluntarios: " + error.message);
  }
}

export { getTbVoluntario, getByIDTbVoluntario };