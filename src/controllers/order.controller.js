import { logger } from "../utils/logger.js"
import db from "../databases/index.js"

export const getAllOrderController = async (req, res, next) => {
    try {
        const page = req.query.page || 1
        const limit = req.query.limit || 10
        const skip = (page - 1) * limit

        const data = await db("Orders").select("*").limit(limit).offset(skip)
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
        const data = await db("Orders").select("*").where({ id }).first()

        if (data.length === 0) {
            return res.status(404).send("Not found")
        }
        res.send({ Status: "ok", data: data })
    } catch (error) {
        logger.error(error)
        next(error)
    }
}

export const createOrderController = async (req, res, next) => {
    try {
        const data = await db("Order").insert(req.body).returning("*")

        res.status(201).send({ status: "created", data: data[0].id })
    } catch (error) {
        logger.error(error)
        next(error)
    }
}

export const updateOrderController = async (req, res, next) => {
    try {
        const { id } = req.params
        const data = await db("Order")
            .where({ id })
            .update(req.body)
            .returning("*")

        if (data.length === 0) {
            return res.status(404).send({
                status: "Not Found",
                message: "Order not found",
            })
        }

        res.status(202).send({ status: "Updated", data })
    } catch (error) {
        logger.error(error)
        next(error)
    }
}

export const deleteOrderController = async (req, res, next) => {
    try {
        const { id } = req.params
        const data = await db("Order").where({ id }).del().returning("*")

        if (data.length === 0) {
            return res.status(404).send({
                status: "Not Found",
                message: "Order not found",
            })
        }

        res.status(200).send({ status: "deleted" })
    } catch (error) {
        logger.error(error)
        next(error)
    }
}
