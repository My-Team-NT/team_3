import db from "../databases/index.js"
import { logger } from "../utils/index.js"

export const getAllProductController = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1
        const limit = parseInt(req.query.limit) || 10
        const skip = (page - 1) * limit

        const products = await db("products")
            .select("*")
            .limit(limit)
            .offset(skip)

        if (products.length === 0) {
            return res.status(404).send({
                status: "Not Found",
                message: "No products found",
            })
        }

        return res.status(200).send({
            status: "Success",
            page,
            limit,
            products,
        })
    } catch (error) {
        logger.error(error)
        next(error)
    }
}

export const getOneProductController = async (req, res, next) => {
    try {
        const id = req.params.id
        const product = await db("products")
            .select("*")
            .where({ id })
            .first()

        if (!product) {
            return res.status(404).send({
                status: "Not Found",
                message: "Product not found",
            })
        }

        return res.status(200).send({
            status: "Success",
            product,
        })
    } catch (error) {
        logger.error(error)
        next(error)
    }
}

export const createproductController = async (req, res, next) => {
    try {
        const newProduct = await db("products")
            .insert(req.body)
            .returning("*")

        return res.status(201).send({
            status: "Created",
            product: newProduct[0],
        })
    } catch (error) {
        logger.error(error)
        next(error)
    }
}

export const updateProductController = async (req, res, next) => {
    try {
        const id = req.params.id
        const updates = req.body

        const updated = await db("products")
            .where({ id })
            .update(updates)
            .returning("*")

        if (updated.length === 0) {
            return res.status(404).send({
                status: "Not Found",
                message: "Product not found",
            })
        }

        return res.status(200).send({
            status: "Success",
            product: updated[0],
        })
    } catch (error) {
        logger.error(error)
        next(error)
    }
}

export const deleteProductController = async (req, res, next) => {
    try {
        const id = req.params.id

        const deleted = await db("products").where({ id }).del()

        if (!deleted) {
            return res.status(404).send({
                status: "Not Found",
                message: "Product not found",
            })
        }

        return res.status(200).send({
            status: "Deleted",
            message: "Product deleted successfully",
        })
    } catch (error) {
        logger.error(error)
        next(error)
    }
}
