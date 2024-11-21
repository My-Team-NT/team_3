import {
    getAllUsersService,
    getPageUsersService,
    filterUsersService,
    searchUsersService,
    getByIdUsersService,
    updateUsersService,
    deleteUsersService,
    getProfileService,
} from "../services/index"

export const getProfile = async (req, res, next) => {
    try {
        const user = await getProfileService(req.user.sub) 
        return res.status(200).send({ status: "Success", data: user })
    } catch (error) {
        next(error)
    }
}

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await getAllUsersService()
        return res.status(200).send({ status: "Success", data: users })
    } catch (error) {
        next(error)
    }
}

export const getByIdUser = async (req, res, next) => {
    try {
        const user = await getByIdUsersService(req.params.id)
        if (!user) {
            return res.status(404).send({ msg: "NOT FOUND" })
        }
        return res.status(200).send({ status: "Success", data: user })
    } catch (error) {
        next(error)
    }
}

export const searchrUser = async (req, res, next) => {
    try {
        const search = req.query.name || ""
        const users = await searchUsersService(search)
        if (!users) {
            return res.status(404).send({ msg: "Malumot Topilmadi" })
        }
        return res.status(200).send({ status: "Success", data: users })
    } catch (error) {
        next(error)
    }
}
export const filterUser = async (req, res, next) => {
    try {
        const users = await filterUsersService(...req.query)
        if (!users) {
            return res.status(404).send({ msg: "Malumot Topilmadi" })
        }
        return res.status(200).send({ status: "Success", data: users })
    } catch (error) {
        next(error)
    }
}
export const getPageUser = async (req, res, next) => {
    try {
        const { page, limit } = req.query
        const skip = (page - 1) * limit
        const users = await getPageUsersService(skip,limit)
        return res.status(200).send({ status: "Success", data: users })
    } catch (error) {
        next(error)
    }
}

export const updateUser = async (req, res, next) => {
    try {
        const user = await getByIdUsersService(req.params.id)
        if (!user) {
            return res.status(404).send({ msg: "NOT FOUND" })
        }
        const newUserData = { ...user._doc, ...req.body }
        const newUser = await updateUsersService(req.params.id, newUserData)
        return res.status(200).send({ status: "Success", id: newUser.id })
    } catch (error) {
        next(error)
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        const user = await getByIdUsersService(req.params.id)
        if (!user) {
            return res.status(404).send({ msg: "NOT FOUND" })
        }
        const deleteUser = await deleteUsersService(req.params.id)
        return res.status(200).send({ status: "Success", id: deleteUser.id })
    } catch (error) {
        next(error)
    }
}
