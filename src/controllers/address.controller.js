import { Address } from "../schema/index.js"
import { addressValidation } from "../validators/index.js"

export const getAllAddress = async (req, res, next) => {
    try {
        const adress = await Address.find()
        return res.status(200).send({ status: "Success", data: adress })
    } catch (error) {
        next(error)
    }
}

export const getByIdAddress = async (req, res, next) => {
    try {
        const adress = await Address.findById(req.params.id)
        if (!adress) {
            return res.status(404).send({ msg: "NOTFOUND" })
        }
        return res.status(200).send({ status: "Success", data: adress })
    } catch (error) {
        next(error)
    }
}

export const filterAddress = async (req, res, next) => {
    try {
        const adress = await Address.find({ ...req.query })
        if (!adress) {
            return req.status(404).send({ msg: "NOT FOUND" })
        }
        return res.status(200).send({ status: "Success", data: adress })
    } catch (error) {
        next(error)
    }
}

export const searchAddress = async (req, res, next) => {
    try {
        const search = req.query.name || ""
        const adress = await Address.find({
            title: { $regex: search, $options: "i" },
        })
        if (!adress) {
            return req.status(404).send({ msg: "NOT FOUND" })
        }
        return res.status(200).send({ status: "Success", data: adress })
    } catch (error) {
        next(error)
    }
}
export const getPageAddress = async (req, res, next) => {
    try {
        const { page, limit } = req.query
        const skip = (page - 1) * limit
        const adress = await Address.find().skip(skip).limit(limit)
        return res.status(200).send({ status: "Success", data: adress })
    } catch (error) {
        next(error)
    }
}
export const createAddress = async (req, res, next) => {
    try {
        const { error, value } = addressValidation(req.body)
        if (error) {
            return res
                .status(400)
                .send({ msg: "MALUMORLAENI TOQLI VA TOGRI KIRTING" })
        }
        const adress = new Address({ ...req.body })
        await adress.save()
        return res.status(201).send({
            status: "Created",
            data: adress,
        })
    } catch (error) {
        next(new ApiError(error.statusCode, error.messages))
    }
}

export const updateAddress = async (req, res, next) => {
    try {
        const adress = await Address.findById(req.params.id)
        if (!adress) {
            return res.status(404).send({ msg: "NOT FOUND" })
        }
        const newAdressData = { ...adress._doc, ...req.body }
        const newAdress = await Address.findByIdAndUpdate(
            req.params.id,
            newAdressData,
        )
        return res.status(200).send({ status: "Success", id: newAdress._id })
    } catch (error) {
        next(error)
    }
}

export const deleteAddress = async (req, res, next) => {
    try {
        const adress = await Address.findById(req.params.id)
        if (!adress) {
            return res.status(404).send({ msg: "NOT FOUND" })
        }
        const deleteadress = await Address.findByIdAndDelete(req.params.id)
        return res.status(200).send({ status: "Success", id: deleteadress._id })
    } catch (error) {
        next(error)
    }
}
