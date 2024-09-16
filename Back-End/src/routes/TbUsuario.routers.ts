import express from "express";

import { postTbUsuario } from "../controllers/TbUsuario.controller/TbUsuario.POST.controller";
import { postLoginTbUsuario } from "../controllers/TbUsuario.controller/TbUsuario.POST.controller";
import { getTbUsuario } from "../controllers/TbUsuario.controller/TbUsuario.GET.controller";
import { getByIDTbUsuario } from "../controllers/TbUsuario.controller/TbUsuario.GET.controller";
import { getLogoutTbUsuario } from "../controllers/TbUsuario.controller/TbUsuario.GET.controller";
import { getRefreshTokenTbUsuario } from "../controllers/TbUsuario.controller/TbUsuario.GET.controller";
import { putTbUsuario } from "../controllers/TbUsuario.controller/tbUsuario.PUT.controller";
import { patchTbUsuario } from "../controllers/TbUsuario.controller/TbUsuario.PATCH.controller";
import { deleteTbUsuario } from "../controllers/TbUsuario.controller/TbUsuario.DELETE.controller";
import { deleteByIDTbUsuario } from "../controllers/TbUsuario.controller/TbUsuario.DELETE.controller";


export const TbUsuarioRouter = express.Router();
export const TbUsuarioLoginRouter = express.Router();
export const tbUsuariLogoutRouter = express.Router();
export const TbUsuarioRefreshToneRouter = express.Router();

TbUsuarioRouter.post("/", postTbUsuario);
TbUsuarioRouter.get("/", getTbUsuario);
TbUsuarioRouter.get("/:id", getByIDTbUsuario);
TbUsuarioRouter.put("/:id", putTbUsuario);
TbUsuarioRouter.patch("/:id", patchTbUsuario);
TbUsuarioRouter.delete("/", deleteTbUsuario);
TbUsuarioRouter.delete("/:id", deleteByIDTbUsuario);

TbUsuarioLoginRouter.post("/", postLoginTbUsuario);
tbUsuariLogoutRouter.get("/", getLogoutTbUsuario);
TbUsuarioRefreshToneRouter.get("/:id", getRefreshTokenTbUsuario);