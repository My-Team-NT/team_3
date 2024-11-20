import { User } from "../schema/index.js"

export const getProfile = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.user.sub })
        return res.status(200).send({ status: "Success", data: user })
    } catch (error) {
        next(error)
    }
}

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find()
        return res.status(200).send({ status: "Success", data: users })
    } catch (error) {
        next(error)
    }
}

export const getByIdUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
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
        const users = await User.find({
            name: { $regex: search, $options: "i" },
        })
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
        const users = await User.find({ ...req.query })
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
        const users = await User.find().skip(skip).limit(limit)
        return res.status(200).send({ status: "Success", data: users })
    } catch (error) {
        next(error)
    }
}

export const updateUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user) {
            return res.status(404).send({ msg: "NOT FOUND" })
        }
        const newUserData = { ...user._doc, ...req.body }
        const newUser = await User.findByIdAndUpdate(req.params.id, newUserData)
        return res.status(200).send({ status: "Success", id: newUser._id })
    } catch (error) {
        next(error)
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user) {
            return res.status(404).send({ msg: "NOT FOUND" })
        }
        const deleteUser = await User.findByIdAndDelete(req.params.id)
        return res.status(200).send({ status: "Success", id: deleteUser._id })
    } catch (error) {
        next(error)
    }
}
