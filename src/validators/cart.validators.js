import { object, string, number } from "joi"

export const validateCart = (data) => {
    const schema = object({
        user_id: string().required().messages({
            "any.required": "User ID is required",
        }),
        total: number().min(0).default(0).messages({
            "number.base": "Total must be a number",
            "number.min": "Total cannot be negative",
        }),
    })

    return schema.validate(data)
}
