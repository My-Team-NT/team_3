import { validateCartItem } from "../validators/index.js"

export const createCartItem = (req, res, next) => {
    const { error } = validateCartItem(req.body)
    if (error) {
        return res.status(400).json({
            success: false,
            message: "Validation failed",
            errors: error.details.map((err) => err.message),
        })
    }
    next()
}
