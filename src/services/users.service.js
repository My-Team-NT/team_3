import db from "../databases/index.js"
export const getAllUsers = () => {
    try {
        return db("users").select("*")
    } catch (error) {
        throw error
    }
}
export const getPageUsers = (page, limit) => {
    try {
        return db("users").select("*").limit(limit).offset(page)
    } catch (error) {
        throw error
    }
}
export const filterUsers = (name, value) => {
    try {
        return db("users").select("*").where(name, "=", value)
    } catch (error) {
        throw error
    }
}

export const searchUsers = (search) => {
    try {
        return db("users").select("*").where("platform", "ILIKE", `%${search}%`)
    } catch (error) {
        throw error
    }
}
export const getByIdUsers = (id) => {
    try {
        return db("users").select("*").where("id", "=", id)
    } catch (error) {
        throw error
    }
}

export const updateUsers = (id, data) => {
    try {
        return db("users").where("id", "=", id).update(data)
    } catch (error) {
        throw error
    }
}

export const deleteUsers = (id) => {
    try {
        return db("users").where("id", "=", id).del()
    } catch (error) {
        throw error
    }
}
