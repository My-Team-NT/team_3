import mongoose from "mongoose"
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ["User", "Admin"],
            default: "User",
        },
        username: {
            type: String,
            required: true,
        },
        birth_of_date: {
            type: Date,
            required: true,
        },
        is_active: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    },
)

userSchema.pre("save", async function () {
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(this.password, salt)
    this.password = hashPassword
})

userSchema.method("compare", function (userPassword) {
    return bcrypt.compare(userPassword, this.password)
})

export const User = mongoose.model("users", userSchema)
