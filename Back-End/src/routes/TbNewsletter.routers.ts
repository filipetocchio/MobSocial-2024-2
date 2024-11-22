import express from "express";

import { postTbNewsletter } from "../controllers/TbNewsletter.controller/TbNewsletter.POST.controller";
import { getTbNewsletter } from "../controllers/TbNewsletter.controller/TbNewsletter.GET.controller";
import { getByIDTbNewsletter } from "../controllers/TbNewsletter.controller/TbNewsletter.GET.controller";
import { putTbNewsletter } from "../controllers/TbNewsletter.controller/TbNewsletter.PUT.controller";
import { patchTbNewsletter } from "../controllers/TbNewsletter.controller/TbNewsletter.PATCH.controller";
import { deleteTbNewsletter } from "../controllers/TbNewsletter.controller/TbNewsletter.DELETE.controller";
import { deleteByIDTbNewsletter } from "../controllers/TbNewsletter.controller/TbNewsletter.DELETE.controller";


export const TbNewsletterRouter = express.Router();

TbNewsletterRouter.post("/", postTbNewsletter);
TbNewsletterRouter.get("/", getTbNewsletter);
TbNewsletterRouter.get("/:id", getByIDTbNewsletter);
TbNewsletterRouter.put("/:id", putTbNewsletter);
TbNewsletterRouter.patch("/:id", patchTbNewsletter);
TbNewsletterRouter.delete("/", deleteTbNewsletter);
TbNewsletterRouter.delete("/:id", deleteByIDTbNewsletter);
