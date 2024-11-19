import { Router } from "express"
import {
    getAllCategoryController,
    getOneCategoryController,
    createCategoryController,
    updateCategoryController,
    deleteCategoryController,
} from "../controllers/index.js"

export const categoryRouter = Router()

categoryRouter.get("/all", getAllCategoryController)
categoryRouter.get("/one/:id", getOneCategoryController)
categoryRouter.post("/add", createCategoryController)
categoryRouter.put("/update/:id", updateCategoryController)
categoryRouter.delete("/delete/:id", deleteCategoryController)
