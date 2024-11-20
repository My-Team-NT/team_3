import { Reviews } from "../schema/index.js"
import { logger } from "../utils/index.js"

export const getAllReviewController = async (req, res, next) => {
    try {
        const page = req.query.page || 1
        const limit = req.query.limit || 10
        const skip = (page - 1) * limit
        const products = await Reviews.find().skip(skip).limit(limit)

        if (!products) {
            return res.status(404).send({
                status: "NoT Found",
            })
        }

        return res.status(200).send({
            status: "Success",
            products: products,
        })
    } catch (error) {
        logger.error(error)
        next(error)
    }
}

export const getOneReviewController = async (req, res, next) => {
    try {
        const id = req.params.id
        const product = await Reviews.findById({ _id: id })
        if (!product) {
            return res.status(404).send({
                status: "NoT Found",
            })
        }

        return res.status(200).send({
            status: "Success",
            product: product,
        })
    } catch (error) {
        logger.error(error)
        next(error)
    }
}

export const createReviewController = async (req, res, next) => {
    try {
        const newProduct = new Reviews(req.body)
        await newProduct.save()
        return res.status(201).send({
            status: "Created",
        })
    } catch (error) {
        logger.error(error)
        next(error)
    }
}

export const updateReviewController = async (req, res, next) => {
    try {
        const id = req.params.id
        await Reviews.findByIdAndUpdate({ _id: id }, req.body, { new: true })
        return res.status(200).send({
            status: "Updated",
        })
    } catch (error) {
        logger.error(error)
        next(error)
    }
}

export const deleteReviewController = async (req, res, next) => {
    try {
        const id = req.params.id
        await Reviews.findByIdAndDelete({ _id: id })
        return res.status(200).send({
            status: "Deleted",
        })
    } catch (error) {
        logger.error(error)
        next(error)
    }
}
