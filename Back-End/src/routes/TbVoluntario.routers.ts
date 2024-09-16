import express from "express";

import { postTbVoluntario } from "../controllers/TbVoluntario.controller/TbVoluntario.POST.controller";
import { getTbVoluntario } from "../controllers/TbVoluntario.controller/TbVoluntario.GET.controller";
import { getByIDTbVoluntario } from "../controllers/TbVoluntario.controller/TbVoluntario.GET.controller";
import { putTbVoluntario } from "../controllers/TbVoluntario.controller/TbVoluntario.PUT.controller";
import { patchTbVoluntario } from "../controllers/TbVoluntario.controller/TbVoluntario.PATCH.controller";
import { deleteTbVoluntario } from "../controllers/TbVoluntario.controller/TbVoluntario.DELETE.controller";
import { deleteByIDTbVoluntario } from "../controllers/TbVoluntario.controller/TbVoluntario.DELETE.controller";


export const TbVoluntarioRouter = express.Router();

TbVoluntarioRouter.post("/", postTbVoluntario);
TbVoluntarioRouter.get("/", getTbVoluntario);
TbVoluntarioRouter.get("/:id", getByIDTbVoluntario);
TbVoluntarioRouter.put("/:id", putTbVoluntario);
TbVoluntarioRouter.patch("/:id", patchTbVoluntario);
TbVoluntarioRouter.delete("/", deleteTbVoluntario);
TbVoluntarioRouter.delete("/:id", deleteByIDTbVoluntario);
