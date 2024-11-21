import db from "../databases/index.js"
import { logger } from "../utils/logger.js"

export const getAllCartItemController = async (req, res, next) => {
    try {
        const page = req.query.page || 1
        const limit = req.query.limit || 10
        const skip = (page - 1) * limit

        const data = await db("Cart_item").select("*").limit(limit).offset(skip)

        if (data.length === 0) {
            return res.status(404).send("Not found")
        }
        res.send({ Status: "ok", data })
    } catch (error) {
        logger.error(error)
        next(error)
    }
}

export const getOneCartItemController = async (req, res, next) => {
    try {
        const { id } = req.params
        const data = await db("Cart_item").select("*").where({ id }).first()

        if (data.length === 0) {
            return res.status(404).send("Not found")
        }
        res.send({ Status: "ok", data: data[0] })
    } catch (error) {
        logger.error(error)
        next(error)
    }
}

export const createCartItemController = async (req, res, next) => {
    try {
        const data = await db("Cart_item").insert(req.body).returning("*")

        res.status(201).send({ status: "created", data: data[0].id })
    } catch (error) {
        logger.error(error)
        next(error)
    }
}

export const updateCartItemController = async (req, res, next) => {
    try {
        const { id } = req.params
        const data = await db("Cart_item")
            .where({ id })
            .update(req.body)
            .returning("*")

        if (data.length === 0) {
            return res.status(404).send({
                status: "Not Found",
                message: "Cart_item not found",
            })
        }

        res.status(202).send({ status: "Updated", data })
    } catch (error) {
        logger.error(error)
        next(error)
    }
}

export const deleteCartItemController = async (req, res, next) => {
    try {
        const { id } = req.params
        const data = await db("Cart_item").where({ id }).del().returning("*")

        if (data.length === 0) {
            return res.status(404).send({
                status: "Not Found",
                message: "Cart_item not found",
            })
        }

        res.status(200).send({ status: "deleted" })
    } catch (error) {
        logger.error(error)
        next(error)
    }
}
