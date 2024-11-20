import Joi from "joi"

export const validateCart = (data) => {
    const schema = Joi.object({
        user_id: Joi.string().required().messages({
            "any.required": "User ID is required",
        }),
        total:  Joi.number().min(0).default(0).messages({
            "number.base": "Total must be a number",
            "number.min": "Total cannot be negative",
        }),
    })

    return schema.validate(data)
}
