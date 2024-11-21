import Joi from "joi"

export const addressValidation = (data) => {
    const validation = Joi.object({
        user_id: Joi.string().required(),
        title: Joi.string().required(),
        address_line_1: Joi.string().required(),
        address_line_2: Joi.string().required(),
        country: Joi.string().required(),
        city: Joi.string().required(),
        postal_code: Joi.string().required(),
        phone_number: Joi.string().required(),
        landmark: Joi.string().required(),
    })
    return validation.validate(data)
}
