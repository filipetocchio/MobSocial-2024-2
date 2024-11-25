import { prisma } from '../../utils/prisma';
import { Request, Response } from "express";
import { AuthRouteResponse, RouteResponse } from "../../utils/interfaces/interfaces";
import { ZodError } from "zod";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

async function postTbUsuarioONG(req: Request, res: Response) {
  try {
    const { username, password, email, cnpj, numeroDeIndentificacaoDaOng, razaoSocial, nomeFantasia, site, descricao, areasAtuacao, responsavel, endereco, complemento, cidade, estado, cep, telefone } = req.body;

    const duplicate = await prisma.tbUsuarioONG.findFirst({
      where: { OR: [{ username: username }, { email: email }] },
    });
    if (duplicate) {
      return res.status(409).json({
        success: false,
        error: "This username or email is already in use.",
      });
    }

    if (username.length < 1 || username.length > 20) {
      return res.status(400).json({
        success: false,
        error: "Username must be between 1 and 20 characters.",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        error: "Password must be at least 6 characters.",
      });
    }

    if (!cnpj || !numeroDeIndentificacaoDaOng) {
      return res.status(400).json({
        success: false,
        error: "CNPJ and numeroDeIndentificacaoDaOng are required.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const accessToken = jwt.sign({ UserInfo: { username: username } }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "6h",
    });
    const refreshToken = jwt.sign({ username: username }, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: "1d",
    });

    const user = await prisma.tbUsuarioONG.create({
      data: {
        email: email,
        username: username,
        password: hashedPassword,
        refreshToken: refreshToken,
        cnpj: cnpj,
        razaoSocial: razaoSocial,
        nomeFantasia: nomeFantasia,
        site: site,
        descricao: descricao,
        areasAtuacao: areasAtuacao,
        responsavel: responsavel,
        numeroDeIndentificacaoDaOng: numeroDeIndentificacaoDaOng,
        endereco: endereco,
        complemento: complemento,
        cidade: cidade,
        estado: estado,
        cep: cep,
        telefone: telefone,
      },
    });

    return res.status(201).json({
      success: true,
      data: {
        id: user.id,
        email: user.email,
        username: user.username,
        cnpj: user.cnpj,
        razaoSocial: user.razaoSocial,
        nomeFantasia: user.nomeFantasia,
        site: user.site,
        descricao: user.descricao,
        areasAtuacao: user.areasAtuacao,
        responsavel: user.responsavel,
        numeroDeIndentificacaoDaOng: user.numeroDeIndentificacaoDaOng,
        endereco: user.endereco,
        complemento: user.complemento,
        cidade: user.cidade,
        estado: user.estado,
        cep: user.cep,
        telefone: user.telefone,
        accessToken: accessToken,
      },
    });
  } catch (error) {
    console.error("Error:", error);

    return res.status(500).json({
      success: false,
      error: "Internal server error.",
    });
  }
}

const postLoginTbUsuarioONG = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.status(422).json({ msg: 'email is required!' });
    }

    if (!password) {
      return res.status(422).json({ msg: 'Password is required!' });
    }

    const foundUser = await prisma.tbUsuarioONG.findFirst({ where: { email: email } });

    if (!foundUser) {
      const response: RouteResponse<null> = {
        code: 401,
        data: null,
        success: false,
        error: "No user found with this email.",
        message: "No user found with this email.",
      };
      return res.status(response.code).json(response);
    }

    const match = await bcrypt.compare(password, foundUser.password);

    if (match) {
      const accessToken = jwt.sign({ UserInfo: { email: foundUser.email } }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "6h",
      });

      const refreshToken = jwt.sign({ email: foundUser.email }, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: "1d",
      });

      await prisma.tbUsuarioONG.update({ where: { id: foundUser.id }, data: { refreshToken: refreshToken } });

      res.header("Access-Control-Allow-Credentials: true");
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "*");

      res.cookie("jwt", refreshToken, {
        httpOnly: true,
        sameSite: "lax",
        secure: true,
        maxAge: 24 * 60 * 60 * 1000,
      });

      const response: RouteResponse<AuthRouteResponse> = {
        code: 200,
        success: true,
        error: null,
        message: `User ${email} successfully logged in`,
        data: {
          id: foundUser.id,
          email: foundUser.email,
          accessToken: accessToken,
        },
      };
      return res.status(response.code).json(response);
    } else {
      const response: RouteResponse<null> = {
        code: 401,
        data: null,
        success: false,
        error: "The password is incorrect.",
        message: "The password is incorrect.",
      };
      return res.status(response.code).json(response);
    }
  } catch (error) {
    const response: RouteResponse<null> = {
      code: 400,
      data: null,
      success: false,
      error: "Internal server error.",
      message: "Internal server error.",
    };
    if (error instanceof ZodError) {
      response.error = error.errors[0].message;
      response.message = error.errors[0].message;
      return res.status(response.code).json(response);
    }
    res.status(response.code).json(response);
  }
};

export { postTbUsuarioONG, postLoginTbUsuarioONG };