import mongoose from "mongoose"

const addressSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    title: { type: String, required: true },
    address_line_1: { type: String, required: true },
    address_line_2: { type: String, required: true },
    country: { type: String, required: true },
    city: { type: String, required: true },
    postal_code: { type: String, required: true },
    phone_number: { type: String, required: true },
    landmark: { type: String, required: true },
},{
    timestamps:true
})

export const Address = mongoose.model('Address' , addressSchema)
