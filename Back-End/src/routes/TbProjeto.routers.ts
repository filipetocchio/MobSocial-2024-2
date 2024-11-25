import express from "express";

import { postTbProjeto } from "../controllers/TbProjeto.controller/TbProjeto.POST.controller";
import { getTbProjeto } from "../controllers/TbProjeto.controller/TbProjeto.GET.controller";
import { getByIDTbProjeto } from "../controllers/TbProjeto.controller/TbProjeto.GET.controller";
import { putTbProjeto } from "../controllers/TbProjeto.controller/TbProjeto.PUT.controller";
import { patchTbProjeto } from "../controllers/TbProjeto.controller/TbProjeto.PATCH.controller";
import { deleteTbProjeto } from "../controllers/TbProjeto.controller/TbProjeto.DELETE.controller";
import { deleteByIDTbProjeto } from "../controllers/TbProjeto.controller/TbProjeto.DELETE.controller";


export const TbProjetoRouter = express.Router();

TbProjetoRouter.post("/", postTbProjeto);
TbProjetoRouter.get("/", getTbProjeto);
TbProjetoRouter.get("/:id", getByIDTbProjeto);
TbProjetoRouter.put("/:id", putTbProjeto);
TbProjetoRouter.patch("/:id", patchTbProjeto);
TbProjetoRouter.delete("/", deleteTbProjeto);
TbProjetoRouter.delete("/:id", deleteByIDTbProjeto);
