import { Schema, model } from "mongoose"

const productsSchema = new Schema({
    category_id: {
        type: Schema.ObjectId,
        required: true,
        ref: "Category",
    },
    title: {
        type: String,
        required: true,
        maxlength: 255,
    },
    picture: {
        type: String,
        maxlength: 255,
    },
    summary: {
        type: String,
        maxlength: 255,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    discount_type: {
        type: String,
        enum: ["percentage", "fixed"],
        default: "fixed",
    },
    discount_value: {
        type: Number,
        default: 0,
        min: 0,
    },
    tags: {
        type: [String],
        default: [],
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    },
})

export const Product = model("Product", productsSchema)
