import db from "../databases/index.js"

export const getProfileService = (email) => {
    try {
        return db("users").select("*").where('email', "=", email)
    } catch (error) {
        throw error
    }
}
export const getAllUsersService = () => {
    try {
        return db("users").select("*")
    } catch (error) {
        throw error
    }
}
export const getPageUsersService  = (page, limit) => {
    try {
        return db("users").select("*").limit(limit).offset(page)
    } catch (error) {
        throw error
    }
}
export const filterUsersService  = (name, value) => {
    try {
        return db("users").select("*").where(name, "=", value)
    } catch (error) {
        throw error
    }
}

export const searchUsersService  = (search) => {
    try {
        return db("users").select("*").where("platform", "ILIKE", `%${search}%`)
    } catch (error) {
        throw error
    }
}
export const getByIdUsersService  = (id) => {
    try {
        return db("users").select("*").where("id", "=", id)
    } catch (error) {
        throw error
    }
}

export const updateUsersService  = (id, data) => {
    try {
        return db("users").where("id", "=", id).update(data)
    } catch (error) {
        throw error
    }
}

export const deleteUsersService  = (id) => {
    try {
        return db("users").where("id", "=", id).del()
    } catch (error) {
        throw error
    }
}
