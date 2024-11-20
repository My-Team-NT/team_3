import db from "../databases/index.js"
export const getAllAddress = () => {
    try {
        return db("address").select("*")
    } catch (error) {
        throw error
    }
}
export const getPageAddress = (page, limit) => {
    try {
        return db("address").select("*").limit(limit).offset(page)
    } catch (error) {
        throw error
    }
}
export const filterAddress = (name , value) => {
    try {
        return db("address").select("*").where(name ,'=', value )
    } catch (error) {
        throw error
    }
}

export const searchAddress = (search) => {
    try {
        return db("address").select("*").where("platform", "ILIKE", `%${search}%`)
    } catch (error) {
        throw error
    }
}
export const getByIdAddress = (id) => {
    try {
        return db("address").select("*").where('id' , '=' , id)
    } catch (error) {
        throw error
    }
}

export const createAddress = (data) => {
    try {
        return db("address").insert({...data}).returning("*")
    } catch (error) {
        throw error
    }
}

export const updateAddress = (id , data) => {
    try {
        return db("address").where('id' ,'=', id ).update(data)
    } catch (error) {
        throw error
    }
}

export const deleteAddress = (id) => {
    try {
        return db("address").where('id' ,'=', id ).del()
    } catch (error) {
        throw error
    }
}
