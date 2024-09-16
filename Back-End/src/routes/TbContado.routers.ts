import express from "express";

import { postTbContato } from "../controllers/TbContato.controller/TbContato.POST.controller";
import { getTbContato } from "../controllers/TbContato.controller/TbContato.GET.controller";
import { getByIDTbContato } from "../controllers/TbContato.controller/TbContato.GET.controller";
import { putTbContato } from "../controllers/TbContato.controller/TbContato.PUT.controller";
import { patchTbContato } from "../controllers/TbContato.controller/TbContato.PATCH.controller";
import { deleteTbContato } from "../controllers/TbContato.controller/TbContato.DELETE.controller";
import { deleteByIDTbContato } from "../controllers/TbContato.controller/TbContato.DELETE.controller";


export const TbContatoRouter = express.Router();

TbContatoRouter.post("/", postTbContato);
TbContatoRouter.get("/", getTbContato);
TbContatoRouter.get("/:id", getByIDTbContato);
TbContatoRouter.put("/:id", putTbContato);
TbContatoRouter.patch("/:id", patchTbContato);
TbContatoRouter.delete("/", deleteTbContato);
TbContatoRouter.delete("/:id", deleteByIDTbContato);
