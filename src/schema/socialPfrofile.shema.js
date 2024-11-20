import mongoose from "mongoose"

const socialProfileSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    platform: {type:String , required: true},
    user_platform: {type:String , required: true}
},{
    timestamps:true
})

export const SocileProfile = mongoose.model('socileprofile' , socialProfileSchema)