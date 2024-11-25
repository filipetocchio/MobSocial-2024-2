import express from "express";

import { postTbUsuarioONG } from "../controllers/TbUsuarioONG.controller/TbUsuarioONG.POST.controller";
import { postLoginTbUsuarioONG } from "../controllers/TbUsuarioONG.controller/TbUsuarioONG.POST.controller";
import { getTbUsuarioONG } from "../controllers/TbUsuarioONG.controller/TbUsuarioONG.GET.controller";
import { getByIDTbUsuarioONG } from "../controllers/TbUsuarioONG.controller/TbUsuarioONG.GET.controller";
import { getLogoutTbUsuarioONG } from "../controllers/TbUsuarioONG.controller/TbUsuarioONG.GET.controller";
import { getRefreshTokenTbUsuarioONG } from "../controllers/TbUsuarioONG.controller/TbUsuarioONG.GET.controller";
import { putTbUsuarioONG } from "../controllers/TbUsuarioONG.controller/TbUsuarioONG.PUT.controller";
import { patchTbUsuarioONG } from "../controllers/TbUsuarioONG.controller/TbUsuarioONG.PATCH.controller";
import { deleteTbUsuarioONG } from "../controllers/TbUsuarioONG.controller/TbUsuarioONG.DELETE.controller";
import { deleteByIDTbUsuarioONG } from "../controllers/TbUsuarioONG.controller/TbUsuarioONG.DELETE.controller";


export const TbUsuarioONGRouter = express.Router();
export const TbUsuarioONGLoginRouter = express.Router();
export const tbUsuarioONGLogoutRouter = express.Router();
export const TbUsuarioONGRefreshToneRouter = express.Router();

TbUsuarioONGRouter.post("/", postTbUsuarioONG);
TbUsuarioONGRouter.get("/", getTbUsuarioONG);
TbUsuarioONGRouter.get("/:id", getByIDTbUsuarioONG);
TbUsuarioONGRouter.put("/:id", putTbUsuarioONG);
TbUsuarioONGRouter.patch("/:id", patchTbUsuarioONG);
TbUsuarioONGRouter.delete("/", deleteTbUsuarioONG);
TbUsuarioONGRouter.delete("/:id", deleteByIDTbUsuarioONG);

TbUsuarioONGLoginRouter.post("/", postLoginTbUsuarioONG);
tbUsuarioONGLogoutRouter.get("/", getLogoutTbUsuarioONG);
TbUsuarioONGRefreshToneRouter.get("/:id", getRefreshTokenTbUsuarioONG);