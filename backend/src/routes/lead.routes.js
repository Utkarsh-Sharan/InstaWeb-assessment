import { Router } from "express";
import { 
    createLead, 
    getAllLeads,
    updateLead
} from "../controllers/lead.controllers.js";
import { leadCreationValidator } from "../validators/index.js";
import { validate } from "../middlewares/validator.middleware.js";

const router = Router();

router.route("/create").post(leadCreationValidator(), validate, createLead);
router.route("/fetch").get(getAllLeads);
router.route("/update/:leadId").put(leadCreationValidator(), validate, updateLead);

export default router;