import mongoose from "mongoose"

const cartSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    total: { type: Number, default: 0 },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
})

export const Cart = mongoose.model("Carts", cartSchema)
