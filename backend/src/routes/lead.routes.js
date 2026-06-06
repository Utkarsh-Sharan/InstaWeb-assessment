import { Router } from "express";
import { 
    createLead, 
    deleteLead, 
    getAllLeads,
    updateLead
} from "../controllers/lead.controllers.js";
import { leadCreationValidator } from "../validators/index.js";
import { validate } from "../middlewares/validator.middleware.js";
import { verifyLead } from "../middlewares/lead.middleware.js";

const router = Router();

router.route("/create").post(leadCreationValidator(), validate, createLead);
router.route("/fetch").get(getAllLeads);
router.route("/update/:leadId").put(leadCreationValidator(), validate, verifyLead, updateLead);
router.route("/delete/:leadId").delete(verifyLead, deleteLead);

export default router;