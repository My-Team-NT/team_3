import mongoose from "mongoose"

const wishlistSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId,ref:"Users", required: true },
    product_id: { type: mongoose.Schema.Types.ObjectId,ref:"Products", required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
})

export const Wishlist = mongoose.model("Wishlists", wishlistSchema)
