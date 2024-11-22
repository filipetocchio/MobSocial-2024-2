import express, { Router } from "express";

import { TbContatoRouter } from "./TbContado.routers";
import { TbEnderecoRouter } from "./TbEndereco.routers";
import { TbONGRouter } from "./TbONG.routers";     
import { TbVoluntarioRouter } from "./TbVoluntario.routers";
import { TbProjetoRouter } from "./TbProjeto.routers";
import { TbNewsletterRouter } from "./TbNewsletter.routers";
import { TbUsuarioRouter } from "./TbUsuario.routers";
import { TbUsuarioLoginRouter } from "./TbUsuario.routers";
import { tbUsuariLogoutRouter } from "./TbUsuario.routers";
import { TbUsuarioRefreshToneRouter } from "./TbUsuario.routers";

import bodyParser from "body-parser";
import cors from "cors";
import { corsOptions } from "../config/corsOptions";
import { logger } from "../middleware/logEvents";
import { credentials } from "../middleware/credentials";

import cookieParser from "cookie-parser";

export const apiV1Router = Router();

apiV1Router.use(bodyParser.json());
apiV1Router.use(logger);
apiV1Router.use(credentials);
apiV1Router.use(express.json());
apiV1Router.use(bodyParser.urlencoded({ extended: false }));
apiV1Router.use(express.urlencoded({ extended: false }));
apiV1Router.use(cookieParser());
apiV1Router.use(cors({ ...corsOptions, credentials: true }));

apiV1Router.use("/TbContato", TbContatoRouter);
apiV1Router.use("/TbEndereco", TbEnderecoRouter);
apiV1Router.use("/TbONG", TbONGRouter);
apiV1Router.use("/TbVoluntario", TbVoluntarioRouter);
apiV1Router.use("/TbProjeto", TbProjetoRouter);
apiV1Router.use("/TbNewsletter", TbNewsletterRouter);
apiV1Router.use("/TbUsuario", TbUsuarioRouter);
apiV1Router.use("/login", TbUsuarioLoginRouter);
apiV1Router.use("/logout", tbUsuariLogoutRouter);
apiV1Router.use("/refresh", TbUsuarioRefreshToneRouter);