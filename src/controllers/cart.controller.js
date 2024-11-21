import { Cart } from "../schema/index.js"
import { logger } from "../utils/logger.js"

export const getAllCartController = async (req, res, next) => {
    try {
        const page = req.query.page || 1
        const limit = req.query.limit || 10
        const skip = (page - 1) * limit

        const data = await db("Cart").select("*").limit(limit).offset(skip)

        if (data.length === 0) {
            return res.status(404).send("Not found")
        }
        res.send({ Status: "ok", data })
    } catch (error) {
        logger.error(error)
        next(error)
    }
}

export const getOneCartController = async (req, res, next) => {
    try {
        const { id } = req.params
        const data = await db("Cart").select("*").where({ id }).first()

        if (data.length === 0) {
            return res.status(404).send("Not found")
        }
        res.send({ Status: "ok", data: data[0] })
    } catch (error) {
        logger.error(error)
        next(error)
    }
}

export const createCartController = async (req, res, next) => {
    try {
        const data = await db("Cart").insert(req.body).returning("*")

        res.status(201).send({ status: "created", data: data[0].id })
    } catch (error) {
        logger.error(error)
        next(error)
    }
}

export const updateCartController = async (req, res, next) => {
    try {
        const { id } = req.params
        const data = await db("Cart")
            .where({ id })
            .update(req.body)
            .returning("*")

        if (data.length === 0) {
            return res.status(404).send({
                status: "Not Found",
                message: "Cart not found",
            })
        }

        res.status(202).send({ status: "Updated", data })
    } catch (error) {
        logger.error(error)
        next(error)
    }
}

export const deleteCartController = async (req, res, next) => {
    try {
        const { id } = req.params
        const data = await db("Cart").where({ id }).del().returning("*")

        if (data.length === 0) {
            return res.status(404).send({
                status: "Not Found",
                message: "Cart not found",
            })
        }

        res.status(200).send({ status: "deleted", data })
    } catch (error) {
        logger.error(error)
        next(error)
    }
}
