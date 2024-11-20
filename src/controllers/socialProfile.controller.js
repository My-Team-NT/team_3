import { SocileProfile } from "../schema/index.js"
import { socialProfileValidation } from "../validators/index.js"

export const getAllSocialProfile = async (req, res, next) => {
    try {
        const socialProfile = await SocileProfile.find()
        return res.status(200).send({ status: "Success", data: socialProfile })
    } catch (error) {
        next(error)
    }
}

export const getByIdSocialProfile = async (req, res, next) => {
    try {
        const socialProfile = await SocileProfile.findById(req.params.id)
        if (!socialProfile) {
            return res.status(404).send({ msg: "NOTFOUND" })
        }
        return res.status(200).send({ status: "Success", data: socialProfile })
    } catch (error) {
        next(error)
    }
}

export const filterSocialProfile = async (req, res, next) => {
    try {
        const socialProfile = await SocileProfile.find({ ...req.query })
        if (!socialProfile) {
            return req.status(404).send({ msg: "NOT FOUND" })
        }
        return res.status(200).send({ status: "Success", data: socialProfile })
    } catch (error) {
        next(error)
    }
}

export const searchSocialProfile = async (req, res, next) => {
    try {
        const search = req.query.platform || ""
        const socialProfile = await SocileProfile.find({
            platform: { $regex: search, $options: "i" },
        })
        if (!socialProfile) {
            return req.status(404).send({ msg: "NOT FOUND" })
        }
        return res.status(200).send({ status: "Success", data: socialProfile })
    } catch (error) {
        next(error)
    }
}
export const getPageSocialProfile = async (req, res, next) => {
    try {
        const { page, limit } = req.query
        const skip = (page - 1) * limit
        const socialProfile = await SocileProfile.find().skip(skip).limit(limit)
        return res.status(200).send({ status: "Success", data: socialProfile })
    } catch (error) {
        next(error)
    }
}
export const createSocialProfile = async (req, res, next) => {
    try {
        const { error, value } = socialProfileValidation(req.body)
        if (error) {
            return res
                .status(400)
                .send({ msg: "MALUMORLAENI TOQLI VA TOGRI KIRTING" })
        }
        const socialProfile = new SocileProfile({ ...req.body })
        await socialProfile.save()
        return res.status(201).send({
            status: "Created",
            data: socialProfile,
        })
    } catch (error) {
        next(new ApiError(error.statusCode, error.messages))
    }
}

export const updateSocileProfile = async (req, res, next) => {
    try {
        const socialProfile = await SocileProfile.findById(req.params.id)
        if (!socialProfile) {
            return res.status(404).send({ msg: "NOT FOUND" })
        }
        const newsocialProfileData = { ...socialProfile._doc, ...req.body }
        const newsocialProfile = await SocileProfile.findByIdAndUpdate(
            req.params.id,
            newsocialProfileData,
        )
        return res
            .status(200)
            .send({ status: "Success", id: newsocialProfile._id })
    } catch (error) {
        next(error)
    }
}

export const deleteSocileProfile = async (req, res, next) => {
    try {
        const socialProfile = await SocileProfile.findById(req.params.id)
        if (!socialProfile) {
            return res.status(404).send({ msg: "NOT FOUND" })
        }
        const deleteSocialProfile = await SocileProfile.findByIdAndDelete(
            req.params.id,
        )
        return res
            .status(200)
            .send({ status: "Success", id: deleteSocialProfile._id })
    } catch (error) {
        next(error)
    }
}
