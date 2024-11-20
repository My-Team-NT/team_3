import { Order } from "../schema/index.js"
import { logger } from "../utils/logger.js"

export const getAllOrderController = async (req, res, next) => {
    try {
        const page = req.query.page || 1
        const limit = req.query.limit || 10

        const data = await Order.find().skip(page).limit(limit)
        if (data.length === 0) {
            return res.status(404).send("Not found")
        }
        res.send({ Status: "ok", data })
    } catch (error) {
        logger.error(error)
        next(error)
    }
}

export const getOneOrderController = async (req, res, next) => {
    try {
        const { id } = req.params
        const data = await Order.find({ _id: id })
        if (data.length === 0) {
            return res.status(404).send("Not found")
        }
        res.send({ Status: "ok", data: data[0] })
    } catch (error) {
        logger.error(error)
        next(error)
    }
}

export const createOrderController = async (req, res, next) => {
    try {
        const data = new Order(req.body)
        await data.save()
        res.status(201).send({ status: "created", data: data._id })
    } catch (error) {
        logger.error(error)
        next(error)
    }
}

export const updateOrderController = async (req, res, next) => {
    try {
        const { id } = req.params
        const data = await Order.findByIdAndUpdate({ _id: id }, req.body)
        res.status(202).send({ status: "Updated", data })
    } catch (error) {
        logger.error(error)
        next(error)
    }
}

export const deleteOrderController = async (req, res, next) => {
    try {
        const data = await Order.findByIdAndDelete(req.params.id)
        res.status(200).send({ status: "deleted", data })
    } catch (error) {
        logger.error(error)
        next(error)
    }
}
