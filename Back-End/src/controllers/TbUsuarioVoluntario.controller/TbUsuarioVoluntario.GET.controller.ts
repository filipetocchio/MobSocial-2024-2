import { prisma } from '../../utils/prisma';
import { Request, Response } from "express";
import { RouteResponse } from "../../utils/interfaces/interfaces";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

async function getTbUsuarioVoluntario(req: Request, res: Response) {
  try {
    const usuarios = await prisma.tbUsuarioVoluntario.findMany({});
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).send("Error retrieving usuarios: " + error.message);
  }
}

async function getByIDTbUsuarioVoluntario(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const usuario = await prisma.tbUsuarioVoluntario.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (usuario) {
      res.status(200).json(usuario);
    } else {
      res.status(404).send("Usuario not found");
    }
  } catch (error) {
    res.status(500).send("Error retrieving usuario: " + error.message);
  }
}

const getLogoutTbUsuarioVoluntario = async (req: Request, res: Response) => {
  const cookies = req.cookies;

  const response: RouteResponse<null> = {
    code: 204,
    data: null,
    error: null,
    message: "No content.",
    success: true,
  };

  if (!cookies?.jwt) {
    return res.status(response.code).json(response);
  }

  const refreshToken = cookies.jwt;

  await prisma.tbUsuarioVoluntario.update({
    where: { refreshToken: refreshToken },
    data: { refreshToken: "" }
  });

  res.clearCookie("jwt", { httpOnly: true, sameSite: "lax", secure: true });

  res.status(response.code).json(response);
};

const getRefreshTokenTbUsuarioVoluntario = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.id);
    if (isNaN(userId)) {
      return res.status(400).json({
        code: 400,
        success: false,
        error: "Invalid user ID.",
        message: null,
        data: null
      });
    }

    const TbUsuarioVoluntario = await prisma.tbUsuarioVoluntario.findUnique({
      where: {
        id: userId,
      },
    });

    if (!TbUsuarioVoluntario) {
      return res.status(404).json({
        code: 404,
        success: false,
        error: "TbUsuarioVoluntario not found.",
        message: null,
        data: null
      });
    }

    if (!TbUsuarioVoluntario.refreshToken) {
      return res.status(404).json({
        code: 404,
        success: false,
        error: "TbUsuarioVoluntario does not have a refresh token.",
        message: null,
        data: null
      });
    }

    const generateAccessToken = () => {
      return jwt.sign({ userId: TbUsuarioVoluntario.id, username: TbUsuarioVoluntario.username }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '6h'
      });
    };

    const accessToken = generateAccessToken();

    return res.status(200).json({
      code: 200,
      success: true,
      error: null,
      message: "Access token generated successfully.",
      data: {
        id: TbUsuarioVoluntario.id,
        username: TbUsuarioVoluntario.username,
        accessToken
      }
    });

  } catch (error) {
    console.error('Error generating the access token:', error);
    return res.status(500).json({
      code: 500,
      success: false,
      error: "Internal server error.",
      message: null,
      data: null
    });
  }
};

export { getTbUsuarioVoluntario, getByIDTbUsuarioVoluntario, getLogoutTbUsuarioVoluntario, getRefreshTokenTbUsuarioVoluntario };