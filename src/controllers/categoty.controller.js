import db from "../databases/index.js"
import { logger } from "../utils/index.js"

export const getAllCategoryController = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1
        const limit = parseInt(req.query.limit) || 10
        const skip = (page - 1) * limit

        const categories = await db("categories")
            .select("*")
            .limit(limit)
            .offset(skip)

        if (categories.length === 0) {
            return res.status(404).send({
                status: "Not Found",
                message: "No categories found",
            })
        }

        return res.status(200).send({
            status: "Success",
            page,
            limit,
            categories,
        })
    } catch (error) {
        logger.error(error)
        next(error)
    }
}

export const getOneCategoryController = async (req, res, next) => {
    try {
        const id = req.params.id
        const category = await db("categories")
            .select("*")
            .where({ id })
            .first()

        if (!category) {
            return res.status(404).send({
                status: "Not Found",
                message: "Category not found",
            })
        }

        return res.status(200).send({
            status: "Success",
            category,
        })
    } catch (error) {
        logger.error(error)
        next(error)
    }
}

export const createCategoryController = async (req, res, next) => {
    try {
        const newCategory = await db("categories")
            .insert(req.body)
            .returning("*")

        return res.status(201).send({
            status: "Created",
            category: newCategory[0],
        })
    } catch (error) {
        logger.error(error)
        next(error)
    }
}

export const updateCategoryController = async (req, res, next) => {
    try {
        const id = req.params.id
        const updates = req.body

        const updated = await db("categories")
            .where({ id })
            .update(updates)
            .returning("*")

        if (updated.length === 0) {
            return res.status(404).send({
                status: "Not Found",
                message: "Category not found",
            })
        }

        return res.status(200).send({
            status: "Success",
            category: updated[0],
        })
    } catch (error) {
        logger.error(error)
        next(error)
    }
}

export const deleteCategoryController = async (req, res, next) => {
    try {
        const id = req.params.id

        const deleted = await db("categories").where({ id }).del()

        if (!deleted) {
            return res.status(404).send({
                status: "Not Found",
                message: "Category not found",
            })
        }

        return res.status(200).send({
            status: "Deleted",
            message: "Category deleted successfully",
        })
    } catch (error) {
        logger.error(error)
        next(error)
    }
}
