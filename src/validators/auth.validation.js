import Joi from "joi"

export const registerValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(2).required(),
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
            .required(),
        password: Joi.string()
            .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
            .required(),
        avatar: Joi.string(),
        username: Joi.string().required(),
        birth_of_date: Joi.date().required(),
        phone_number: Joi.string().required(),
    })
    return schema.validate(data)
}

export const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
            .required(),
        password: Joi.string().min(2).required(),
    })
    return schema.validate(data)
}

export const verifyValidation = (data) => {
    const schema = Joi.object({
        otp: Joi.string().min(2).required(),
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
            .required(),
    })
    return schema.validate(data)
}
