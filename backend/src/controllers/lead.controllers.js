import { Lead } from "../models/lead.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const createLead = asyncHandler(async (req, res) => {
    const {name, email, phone, companyName, leadStatus, notes} = req.body;

    const leadAlreadyExists = await Lead.find({
        $or: [
            {email},
            {phone},
        ]
    });

    if(leadAlreadyExists) return res.status(409).json({message: "Lead already exists!"});

    const lead = await Lead.create({
        name,
        email,
        phone,
        companyName,
        leadStatus,
        notes,
    });

    return res.status(201).json({message: "Lead created successfully!", lead});
});

const getAllLeads = asyncHandler(async (req, res) => {
    const leads = await Lead.find();

    return res.status(200).json({message: "Fetched all leads!", leads});
})

export {
    createLead,
    getAllLeads,
}