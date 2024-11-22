import { prisma } from '../../utils/prisma';
import { Request, Response } from "express";

async function getTbNewsletter(req: Request, res: Response) {
  try {
    const Newsletters = await prisma.tbNewsletter.findMany({});
    res.status(200).json(Newsletters);
  } catch (error) {
    res.status(500).send("Error retrieving newsletters: " + error.message);
  }
}

async function getByIDTbNewsletter(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const Newsletters = await prisma.tbNewsletter.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (Newsletters) {
      res.status(200).json(Newsletters);
    } else {
      res.status(404).send("Newsletters not found");
    }
  } catch (error) {
    res.status(500).send("Error retrieving newsletters: " + error.message);
  }
}

export { getTbNewsletter, getByIDTbNewsletter };