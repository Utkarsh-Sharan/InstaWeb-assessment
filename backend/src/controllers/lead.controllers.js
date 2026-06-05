import { Lead } from "../models/lead.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const createLead = asyncHandler(async (req, res) => {
    const {name, email, phone, companyName, leadStatus, dateCreated} = req.body;


});

export {
    createLead,
}