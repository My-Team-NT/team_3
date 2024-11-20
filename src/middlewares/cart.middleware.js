import { validateCart } from "../validators/index.js"

export const createCart = (req, res, next) => {
    const { error } = validateCart(req.body)
    if (error) {
        return res.status(400).json({
            success: false,
            message: "Validation failed",
            errors: error.details.map((err) => err.message),
        })
    }
    next()
}
