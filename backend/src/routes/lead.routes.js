import { Router } from "express";
import { createLead } from "../controllers/lead.controllers.js";
import { leadCreationValidator } from "../validators/index.js";
import { validate } from "../middlewares/validator.middleware.js";

const router = Router();

router.route("/create").post(leadCreationValidator(), validate, createLead);

export default router;