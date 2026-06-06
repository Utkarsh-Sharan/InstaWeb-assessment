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
        index: true,
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
        enum: ["new", "contacted", "qualified", "converted", "lost"],
        default: "new",
    },
    notes: {
        type: String,
    },
},
{
    timestamps: true,
});

export const Lead = mongoose.model("Lead", leadSchema);