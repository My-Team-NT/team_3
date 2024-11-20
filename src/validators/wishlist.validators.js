import Joi from "joi"

export const validateWishlist = (data) => {
    const schema = Joi.object({
        user_id: Joi.string().required().messages({
            "any.required": "User ID is required",
        }),
        product_id: Joi.string().required().messages({
            "any.required": "Product ID is required",
        }),
    })

    return schema.validate(data)
}
