import mongoose from "mongoose"

const cartItemSchema = new mongoose.Schema({
    cart_id: { type: mongoose.Schema.Types.ObjectId,ref:"Carts", required: true },
    product_id: { type: mongoose.Schema.Types.ObjectId,ref:"Products", required: true },
    quantity: { type: Number, default: 1 },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
})

export const CartItem = mongoose.model("CartItems", cartItemSchema)
