import { Schema, model } from "mongoose"

const categorySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            maxlength: 255,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        tag: {
            type: String,
            maxlength: 50,
            trim: true,
        },
        created_at: {
            type: Date,
            default: Date.now,
        },
        updated_at: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    },
)

export const Category = model("Category", categorySchema)
