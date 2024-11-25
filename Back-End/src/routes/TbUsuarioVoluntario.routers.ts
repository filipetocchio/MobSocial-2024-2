import express from "express";

import { postTbUsuarioVoluntario } from "../controllers/TbUsuarioVoluntario.controller/TbUsuarioVoluntario.POST.controller";
import { postLoginTbUsuarioVoluntario } from "../controllers/TbUsuarioVoluntario.controller/TbUsuarioVoluntario.POST.controller";
import { getTbUsuarioVoluntario } from "../controllers/TbUsuarioVoluntario.controller/TbUsuarioVoluntario.GET.controller";
import { getByIDTbUsuarioVoluntario } from "../controllers/TbUsuarioVoluntario.controller/TbUsuarioVoluntario.GET.controller";
import { getLogoutTbUsuarioVoluntario } from "../controllers/TbUsuarioVoluntario.controller/TbUsuarioVoluntario.GET.controller";
import { getRefreshTokenTbUsuarioVoluntario } from "../controllers/TbUsuarioVoluntario.controller/TbUsuarioVoluntario.GET.controller";
import { putTbUsuarioVoluntario } from "../controllers/TbUsuarioVoluntario.controller/TbUsuarioVoluntario.PUT.controller";
import { patchTbUsuarioVoluntario } from "../controllers/TbUsuarioVoluntario.controller/TbUsuarioVoluntario.PATCH.controller";
import { deleteTbUsuarioVoluntario } from "../controllers/TbUsuarioVoluntario.controller/TbUsuarioVoluntario.DELETE.controller";
import { deleteByIDTbUsuarioVoluntario } from "../controllers/TbUsuarioVoluntario.controller/TbUsuarioVoluntario.DELETE.controller";

import { upload } from "../utils/multerConfig";
import { uploadUserPhoto } from "../controllers/TbUsuarioVoluntario.controller/TbUsuarioVoluntario.Upload.controller";

export const TbUsuarioVoluntarioRouter = express.Router();
export const TbUsuarioVoluntarioLoginRouter = express.Router();
export const tbUsuarioVoluntarioLogoutRouter = express.Router();
export const TbUsuarioVoluntarioRefreshToneRouter = express.Router();

TbUsuarioVoluntarioRouter.post("/", postTbUsuarioVoluntario);
TbUsuarioVoluntarioRouter.get("/", getTbUsuarioVoluntario);
TbUsuarioVoluntarioRouter.get("/:id", getByIDTbUsuarioVoluntario);
TbUsuarioVoluntarioRouter.put("/:id", putTbUsuarioVoluntario);
TbUsuarioVoluntarioRouter.patch("/:id", patchTbUsuarioVoluntario);
TbUsuarioVoluntarioRouter.delete("/", deleteTbUsuarioVoluntario);
TbUsuarioVoluntarioRouter.delete("/:id", deleteByIDTbUsuarioVoluntario);

// Nova rota de upload de foto com ID
TbUsuarioVoluntarioRouter.post(
  "/uploadPhoto/:id",
  upload.single("photo"),
  uploadUserPhoto
);

TbUsuarioVoluntarioLoginRouter.post("/", postLoginTbUsuarioVoluntario);
tbUsuarioVoluntarioLogoutRouter.get("/", getLogoutTbUsuarioVoluntario);
TbUsuarioVoluntarioRefreshToneRouter.get("/:id", getRefreshTokenTbUsuarioVoluntario);
