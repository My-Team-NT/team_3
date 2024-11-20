import db from "../databases/index.js"
export const createUser = (data) => {
    try {
        return db("users").insert({...data}).returning("*")
    } catch (error) {
        throw error
    }
}

export const createOtp = (data) => {
    try {
        return db("otp").insert({...data}).returning("*")
    } catch (error) {
        throw error
    }
}

export const verifyToken = (id, data) => {
    try {
        return db("socialsprofile").where('id' ,'=', id ).update({...data})
    } catch (error) {
        throw error
    }
}