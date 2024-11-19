import Joi from "joi"
import mongoose from "mongoose"

export const validateReview = (review) => {
    const schema = Joi.object({
        user_id: Joi.string()
            .custom((value, helpers) => {
                if (!mongoose.Types.ObjectId.isValid(value)) {
                    return helpers.message(
                        '"user_id" haqiqiy ObjectId bo\'lishi kerak',
                    )
                }
                return value
            })
            .required()
            .messages({
                "any.required": '"user_id" majburiy maydon',
            }),
        product_id: Joi.string()
            .custom((value, helpers) => {
                if (!mongoose.Types.ObjectId.isValid(value)) {
                    return helpers.message(
                        '"product_id" haqiqiy ObjectId bo\'lishi kerak',
                    )
                }
                return value
            })
            .required()
            .messages({
                "any.required": '"product_id" majburiy maydon',
            }),
        rating: Joi.number().min(1).max(5).required().messages({
            "number.base": '"rating" raqam bo\'lishi kerak',
            "number.min": '"rating" kamida 1 bo\'lishi kerak',
            "number.max": '"rating" 5 dan oshmasligi kerak',
            "any.required": '"rating" majburiy maydon',
        }),
        comment: Joi.string().max(1000).messages({
            "string.base": '"comment" matn bo\'lishi kerak',
            "string.max": '"comment" 1000 ta belgidan oshmasligi kerak',
        }),
    })

    return schema.validate(review, { abortEarly: false })
}
