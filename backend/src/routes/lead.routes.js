import { Router } from "express";
import { 
    createLead, 
    getAllLeads
} from "../controllers/lead.controllers.js";
import { leadCreationValidator } from "../validators/index.js";
import { validate } from "../middlewares/validator.middleware.js";

const router = Router();

router.route("/create").post(leadCreationValidator(), validate, createLead);
router.route("/fetch").get(getAllLeads);

export default router;