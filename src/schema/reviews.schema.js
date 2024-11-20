import { Schema, model } from "mongoose"

const reviewsSchema = new Schema(
    {
        user_id: {
            type: Schema.ObjectId,
            ref: "User",
            required: true,
        },
        product_id: {
            type: Schema.ObjectId,
            ref: "Product",
            required: true,
        },
        rating: {
            type: Number,
            min: 1,
            max: 5,
            required: true,
        },
        comment: {
            type: String,
            maxlength: 1000,
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

export const Reviews = model("Review", reviewsSchema)
