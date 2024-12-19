import express, { Router } from "express";

import { TbProjetoRouter } from "./TbProjeto.routers";
import { TbNewsletterRouter } from "./TbNewsletter.routers";

import { TbUsuarioONGRouter } from "./TbUsuarioONG.routers";
import { TbUsuarioONGLoginRouter } from "./TbUsuarioONG.routers";
import { tbUsuarioONGLogoutRouter } from "./TbUsuarioONG.routers";
import { TbUsuarioONGRefreshToneRouter } from "./TbUsuarioONG.routers";

import { TbUsuarioVoluntarioRouter } from "./TbUsuarioVoluntario.routers";
import { TbUsuarioVoluntarioLoginRouter } from "./TbUsuarioVoluntario.routers";
import { tbUsuarioVoluntarioLogoutRouter } from "./TbUsuarioVoluntario.routers";
import { TbUsuarioVoluntarioRefreshToneRouter } from "./TbUsuarioVoluntario.routers";

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

apiV1Router.use("/TbProjeto", TbProjetoRouter);
apiV1Router.use("/TbNewsletter", TbNewsletterRouter);

apiV1Router.use("/TbUsuarioONG", TbUsuarioONGRouter);
apiV1Router.use("/loginONG", TbUsuarioONGLoginRouter);
apiV1Router.use("/logoutONG", tbUsuarioONGLogoutRouter);
apiV1Router.use("/refreshONG", TbUsuarioONGRefreshToneRouter);

apiV1Router.use("/TbUsuarioVoluntario", TbUsuarioVoluntarioRouter); // Inclui todas as rotas relacionadas a voluntários
apiV1Router.use("/loginVoluntario", TbUsuarioVoluntarioLoginRouter);
apiV1Router.use("/logoutVoluntario", tbUsuarioVoluntarioLogoutRouter);
apiV1Router.use("/refreshVoluntario", TbUsuarioVoluntarioRefreshToneRouter);
