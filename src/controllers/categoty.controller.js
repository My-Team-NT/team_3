import { Category } from "../schema/index.js"
import { logger } from "../utils/index.js"

export const getAllCategoryController = async (req, res, next) => {
    try {
        const page = req.query.page || 1
        const limit = req.query.limit || 10
        const skip = (page - 1) * limit
        const categories = await Category.find().skip(skip).limit(limit)

        if (!categories) {
            return res.status(404).send({
                status: "NoT Found",
            })
        }

        return res.status(200).send({
            status: "Success",
            categories: categories,
        })
    } catch (error) {
        logger.error(error)
        next(error)
    }
}

export const getOneCategoryController = async (req, res, next) => {
    try {
        const id = req.params.id
        const category = await Category.findById(id)
        if (!category) {
            return res.status(404).send({
                status: "NoT Found",
            })
        }

        return res.status(200).send({
            status: "Success",
            category: category,
        })
    } catch (error) {
        logger.error(error)
        next(error)
    }
}

export const createCategoryController = async (req, res, next) => {
    try {
        const newcategory = new Category(req.body)
        await newcategory.save()
        return res.status(201).send({
            status: "Created",
        })
    } catch (error) {
        logger.error(error)
        next(error)
    }
}

export const updateCategoryController = async (req, res, next) => {
    try {
        const id = req.params.id
        await Category.findByIdAndUpdate({ _id: id }, req.body, { new: true })
        return res.status(200).send({
            status: "Updated",
        })
    } catch (error) {
        logger.error(error)
        next(error)
    }
}

export const deleteCategoryController = async (req, res, next) => {
    try {
        const id = req.params.id
        await Category.findByIdAndDelete(id)
        return res.status(200).send({
            status: "Deleted",
        })
    } catch (error) {
        logger.error(error)
        next(error)
    }
}
