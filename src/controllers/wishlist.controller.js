import db from "../databases/index.js"
import { logger } from "../utils/logger.js"

export const getAllWishlistController = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1
        const limit = parseInt(req.query.limit) || 10
        const skip = (page - 1) * limit

        const data = await db("Wishlist").select("*").limit(limit).offset(skip)

        if (data.length === 0) {
            return res.status(404).send("Not found")
        }
        res.send({ Status: "ok", data })
    } catch (error) {
        logger.error(error)
        next(error)
    }
}

export const getOneWishlistController = async (req, res, next) => {
    try {
        const { id } = req.params
        const data = await db("Wishlist").select("*").where({ id })

        if (data.length === 0) {
            return res.status(404).send("Not found")
        }

        res.send({ Status: "ok", data: data[0] })
    } catch (error) {
        logger.error(error)
        next(error)
    }
}

export const createWishlistController = async (req, res, next) => {
    try {
        const data = new db("Wishlist").insert(req.body).returning("*")

        res.status(201).send({ status: "created", data: data[0].id })
    } catch (error) {
        logger.error(error)
        next(error)
    }
}

export const updateWishlistController = async (req, res, next) => {
    try {
        const { id } = req.params
        const data = await db("Wishlist")
            .where({ id })
            .update(req.body)
            .returning("*")

        if (data.length === 0) {
            return res.status(404).send({
                status: "Not Found",
                message: "Wishlist not found",
            })
        }

        res.status(202).send({ status: "Updated", data })
    } catch (error) {
        logger.error(error)
        next(error)
    }
}

export const deleteWishlistController = async (req, res, next) => {
    try {
        const data = await db("Wishlist").where({ id }).del().returning("*")

        if (data.length === 0) {
            return res.status(404).send({
                status: "Not Found",
                message: "Wishlist not found",
            })
        }

        res.status(200).send({ status: "deleted" })
    } catch (error) {
        logger.error(error)
        next(error)
    }
}
