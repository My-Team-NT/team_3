import Joi from "joi"

export const validateOrder = (data) => {
    const schema = Joi.object({
        user_id: Joi.string().required().messages({
            "any.required": "User ID is required",
        }),
        cart_id: Joi.string().required().messages({
            "any.required": "Cart ID is required",
        }),
    })

    return schema.validate(data)
}
