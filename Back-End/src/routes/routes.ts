import express, { Router } from "express";

import { TbContatoRouter } from "./TbContado.routers";
import { TbEnderecoRouter } from "./TbEndereco.routers";
import { TbONGRouter } from "./TbONG.routers";     
import { TbVoluntarioRouter } from "./TbVoluntario.routers";
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

apiV1Router.use("/TbContato", TbContatoRouter);
apiV1Router.use("/TbEndereco", TbEnderecoRouter);
apiV1Router.use("/TbONG", TbONGRouter);
apiV1Router.use("/TbVoluntario", TbVoluntarioRouter);
apiV1Router.use("/TbProjeto", TbProjetoRouter);
apiV1Router.use("/TbNewsletter", TbNewsletterRouter);

apiV1Router.use("/TbUsuarioONG", TbUsuarioONGRouter);
apiV1Router.use("/login", TbUsuarioONGLoginRouter);
apiV1Router.use("/logout", tbUsuarioONGLogoutRouter);
apiV1Router.use("/refresh", TbUsuarioONGRefreshToneRouter);

apiV1Router.use("/TbUsuarioVoluntario", TbUsuarioVoluntarioRouter);
apiV1Router.use("/login", TbUsuarioVoluntarioLoginRouter);
apiV1Router.use("/logout", tbUsuarioVoluntarioLogoutRouter);
apiV1Router.use("/refresh", TbUsuarioVoluntarioRefreshToneRouter);