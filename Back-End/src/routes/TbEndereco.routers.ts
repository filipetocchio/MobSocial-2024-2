import express from "express";

import { postTbEndereco } from "../controllers/TbEndereco.controller/TbEndereco.POST.controller";
import { getTbEndereco } from "../controllers/TbEndereco.controller/TbEndereco.GET.controller";
import { getByIDTbEndereco } from "../controllers/TbEndereco.controller/TbEndereco.GET.controller";
import { putTbEndereco } from "../controllers/TbEndereco.controller/TbEndereco.PUT.controller";
import { patchTbEndereco } from "../controllers/TbEndereco.controller/TbEndereco.PATCH.controller";
import { deleteTbEndereco } from "../controllers/TbEndereco.controller/TbEndereco.DELETE.controller";
import { deleteByIDTbEndereco } from "../controllers/TbEndereco.controller/TbEndereco.DELETE.controller";


export const TbEnderecoRouter = express.Router();

TbEnderecoRouter.post("/", postTbEndereco);
TbEnderecoRouter.get("/", getTbEndereco);
TbEnderecoRouter.get("/:id", getByIDTbEndereco);
TbEnderecoRouter.put("/:id", putTbEndereco);
TbEnderecoRouter.patch("/:id", patchTbEndereco);
TbEnderecoRouter.delete("/", deleteTbEndereco);
TbEnderecoRouter.delete("/:id", deleteByIDTbEndereco);
