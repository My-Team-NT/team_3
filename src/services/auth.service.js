
import db from "../databases/index.js"
export const createUserService  = (data) => {
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
export const deleteOtpService  = (id) => {
    try {
        return db("users").where("user_id", "=", id).del()
    } catch (error) {
        throw error
    }
}

export const getUserEmail = (email) => {
    try {
        return db("users").select("*").where("email", "=",email)
    } catch (error) {
        throw error
    }
}