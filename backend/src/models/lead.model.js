import mongoose, { Schema } from "mongoose";

const leadSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    phone: {
        type: Number,
        unique: true,
        required: true,
    },
    companyName: {
        type: String,
        required: true,
    },
    leadStatus: {
        type: String,
        enum: ["New", "Contacted", "Qualified", "Converted", "Lost"],
        default: "New",
    },
    dateCreated: {
        type: Date,
        default: Date.now(),
    },
});

export const Lead = mongoose.model("Lead", leadSchema);