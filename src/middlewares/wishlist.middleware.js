import { validateWishlist } from "../validators/index.js"

export const createWishlist = (req, res, next) => {
    const { error } = validateWishlist(req.body)
    if (error) {
        return res.status(400).json({
            success: false,
            message: "Validation failed",
            errors: error.details.map((err) => err.message),
        })
    }
    next()
}
