import db from "../databases/index.js"
export const getAllSocialProfileService = () => {
    try {
        return db("socialsprofile").select("*")
    } catch (error) {
        throw error
    }
}
export const getPageSocialProfileService = (page, limit) => {
    try {
        return db("socialsprofile").select("*").limit(limit).offset(page)
    } catch (error) {
        throw error
    }
}
export const filterSocialProfileService = (name , value) => {
    try {
        return db("socialsprofile").select("*").where(name ,'=', value )
    } catch (error) {
        throw error
    }
}

export const searchSocialProfileService = (search) => {
    try {
        return db("socialsprofile").select("*").where("platform", "ILIKE", `%${search}%`)
    } catch (error) {
        throw error
    }
}
export const getByIdSocialProfileService = (id) => {
    try {
        return db("socialsprofile").select("*").where('id' , '=' , id)
    } catch (error) {
        throw error
    }
}

export const createSocialProfileService = (data) => {
    try {
        return db("socialsprofile").insert({...data}).returning("*")
    } catch (error) {
        throw error
    }
}

export const updateSocialProfileService = (id , data) => {
    try {
        return db("socialsprofile").where('id' ,'=', id ).update(data)
    } catch (error) {
        throw error
    }
}

export const deleteSocialProfileService = (id) => {
    try {
        return db("socialsprofile").where('id' ,'=', id ).del()
    } catch (error) {
        throw error
    }
}
