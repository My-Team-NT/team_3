import Joi from "joi"

export const validateProduct = (product) => {
    const schema = Joi.object({
        category_id: Joi.number().integer().required().messages({
            "number.base": '"category_id" butun son bo\'lishi kerak',
            "number.integer": '"category_id" butun son bo\'lishi kerak',
            "any.required": '"category_id" majburiy maydon',
        }),
        title: Joi.string().max(255).required().messages({
            "string.base": '"title" matn bo\'lishi kerak',
            "string.max": '"title" 255 belgidan oshmasligi kerak',
            "any.required": '"title" majburiy maydon',
        }),
        picture: Joi.string().uri().messages({
            "string.uri": "\"picture\" to'g'ri URL formatida bo'lishi kerak",
        }),
        summary: Joi.string().max(255).messages({
            "string.max": '"summary" 255 belgidan oshmasligi kerak',
        }),
        description: Joi.string().messages({
            "string.base": '"description" matn bo\'lishi kerak',
        }),
        price: Joi.number().positive().required().messages({
            "number.base": '"price" raqam bo\'lishi kerak',
            "number.positive": '"price" musbat qiymat bo\'lishi kerak',
            "any.required": '"price" majburiy maydon',
        }),
        discount_type: Joi.string().valid("percentage", "fixed").messages({
            "any.only":
                '"discount_type" faqat "percentage" yoki "fixed" bo\'lishi kerak',
        }),
        discount_value: Joi.number().min(0).messages({
            "number.min": '"discount_value" 0 dan kichik bo\'lmasligi kerak',
        }),
        tags: Joi.array().items(Joi.string()).messages({
            "array.base": "\"tags\" ro'yxat bo'lishi kerak",
        }),
    })

    return schema.validate(product, { abortEarly: false })
}
