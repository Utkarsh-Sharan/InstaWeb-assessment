import mongoose from "mongoose";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Lead } from "../models/lead.model.js";

export const verifyLead = asyncHandler(async (req, res, next) => {
    const {leadId} = req.params;

    if(!mongoose.Types.ObjectId.isValid(leadId))
        return res.status(400).json({message: "Invalid Lead ID!"});

    const lead = await Lead.findById(leadId);
    if(!lead)
        return res.status(404).json({message: "Lead not found!"});

    req.leadId = leadId;
    next();
});