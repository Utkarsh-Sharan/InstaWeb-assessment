import { Router } from "express";
import { createLead } from "../controllers/lead.controllers.js";

const router = Router();

router.route("/create").post(createLead);

export default router;