import mongoose from "mongoose"

const orderSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId,ref:"Users", required: true },
    cart_id: { type: mongoose.Schema.Types.ObjectId,ref:"Carts", required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
})

export const Order = mongoose.model("Orders", orderSchema)
