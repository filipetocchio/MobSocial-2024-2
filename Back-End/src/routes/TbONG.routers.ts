import express from "express";

import { postTbONG } from "../controllers/TbONG.controller/TbONG.POST.controller";
import { getTbONG } from "../controllers/TbONG.controller/TbONG.GET.controller";
import { getByIDTbONG } from "../controllers/TbONG.controller/TbONG.GET.controller";
import { putTbONG } from "../controllers/TbONG.controller/TbONG.PUT.controller";
import { patchTbONG } from "../controllers/TbONG.controller/TbONG.PATCH.controller";
import { deleteTbONG } from "../controllers/TbONG.controller/TbONG.DELETE.controller";
import { deleteByIDTbONG } from "../controllers/TbONG.controller/TbONG.DELETE.controller";


export const TbONGRouter = express.Router();

TbONGRouter.post("/", postTbONG);
TbONGRouter.get("/", getTbONG);
TbONGRouter.get("/:id", getByIDTbONG);
TbONGRouter.put("/:id", putTbONG);
TbONGRouter.patch("/:id", patchTbONG);
TbONGRouter.delete("/", deleteTbONG);
TbONGRouter.delete("/:id", deleteByIDTbONG);
