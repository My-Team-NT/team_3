import db from "../databases/index.js"
export const getAllAddressService = () => {
    try {
        return db("address").select("*")
    } catch (error) {
        throw error
    }
}
export const getPageAddressService = (page, limit) => {
    try {
        return db("address").select("*").limit(limit).offset(page)
    } catch (error) {
        throw error
    }
}
export const filterAddressService = (name , value) => {
    try {
        return db("address").select("*").where(name ,'=', value )
    } catch (error) {
        throw error
    }
}

export const searchAddressService = (search) => {
    try {
        return db("address").select("*").where("platform", "ILIKE", `%${search}%`)
    } catch (error) {
        throw error
    }
}
export const getByIdAddressService = (id) => {
    try {
        return db("address").select("*").where('id' , '=' , id)
    } catch (error) {
        throw error
    }
}

export const createAddressService = (data) => {
    try {
        return db("address").insert({...data}).returning("*")
    } catch (error) {
        throw error
    }
}

export const updateAddressService = (id , data) => {
    try {
        return db("address").where('id' ,'=', id ).update(data)
    } catch (error) {
        throw error
    }
}

export const deleteAddressService = (id) => {
    try {
        return db("address").where('id' ,'=', id ).del()
    } catch (error) {
        throw error
    }
}
