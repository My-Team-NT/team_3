import {
    createAddressService,
    deleteAddressService,
    filterAddressService,
    getAllAddressService,
    getByIdAddressService,
    getPageAddressService,
    searchAddressService,
    updateAddressService,
} from "../services/index.js"
import { addressValidation } from "../validators/index.js"

export const getAllAddress = async (req, res, next) => {
    try {
        const adress = await getAllAddressService()
        return res.status(200).send({ status: "Success", data: adress })
    } catch (error) {
        next(error)
    }
}

export const getByIdAddress = async (req, res, next) => {
    try {
        const adress = await getByIdAddressService(req.params.id)
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
        const adress = await filterAddressService(...req.query)
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
        const adress = await searchAddressService(search)
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
        const adress = await getPageAddressService(skip, limit)
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
        const adress = new createAddressService(...req.body)
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
        const adress = await getByIdAddressService(req.params.id)
        if (!adress) {
            return res.status(404).send({ msg: "NOT FOUND" })
        }
        const newAdressData = { ...adress._doc, ...req.body }
        const newAdress = await updateAddressService(
            req.params.id,
            newAdressData,
        )
        return res.status(200).send({ status: "Success", id: newAdress.id })
    } catch (error) {
        next(error)
    }
}

export const deleteAddress = async (req, res, next) => {
    try {
        const adress = await getByIdAddressService(req.params.id)
        if (!adress) {
            return res.status(404).send({ msg: "NOT FOUND" })
        }
        const deleteadress = await deleteAddressService(req.params.id)
        return res.status(200).send({ status: "Success", id: deleteadress.id })
    } catch (error) {
        next(error)
    }
}
