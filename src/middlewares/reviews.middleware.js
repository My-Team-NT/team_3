import { validateReview } from "../validators/index.js"

export const createReview = (req, res) => {
    const { error } = validateReview(req.body)
    if (error) {
        return res.status(400).json({
            success: false,
            message: "Validation failed",
            errors: error.details.map((err) => err.message),
        })
    }
    next()
}
