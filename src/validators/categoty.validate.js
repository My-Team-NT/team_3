import Joi from "joi"

export const validateCategory = (category) => {
    const schema = Joi.object({
        name: Joi.string().max(255).required().messages({
            "string.base": '"name" matn bo\'lishi kerak',
            "string.max": '"name" 255 belgidan oshmasligi kerak',
            "any.required": '"name" majburiy maydon',
        }),
        description: Joi.string().messages({
            "string.base": '"description" matn bo\'lishi kerak',
        }),
        tag: Joi.string().max(255).messages({
            "string.max": '"tag" 255 belgidan oshmasligi kerak',
        }),
    })

    return schema.validate(category, { abortEarly: false })
}
