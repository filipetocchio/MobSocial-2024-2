import { prisma } from '../../utils/prisma';
import { Request, Response } from "express";

async function getTbONG(req: Request, res: Response) {
  try {
    const ONGs = await prisma.tbONG.findMany({});
    res.status(200).json(ONGs);
  } catch (error) {
    res.status(500).send("Error retrieving ONGs: " + error.message);
  }
}

async function getByIDTbONG(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const ONG = await prisma.tbONG.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (ONG) {
      res.status(200).json(ONG);
    } else {
      res.status(404).send("ONG not found");
    }
  } catch (error) {
    res.status(500).send("Error retrieving ONG: " + error.message);
  }
}

export { getTbONG, getByIDTbONG };