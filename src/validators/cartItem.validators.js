import Joi from "joi"

export const validateCartItem = (data) => {
    const schema = Joi.object({
        cart_id: Joi.string().required().messages({
            "any.required": "Cart ID is required",
        }),
        product_id: Joi.string().required().messages({
            "any.required": "Product ID is required",
        }),
        quantity: Joi.number().integer().min(1).required().messages({
            "number.base": "Quantity must be a number",
            "number.min": "Quantity must be at least 1",
            "any.required": "Quantity is required",
        }),
    })

    return schema.validate(data)
}
