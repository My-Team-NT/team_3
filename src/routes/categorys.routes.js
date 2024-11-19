import { Router } from "express"
import {
    getAllCategoryController,
    getOneCategoryController,
    createCategoryController,
    updateCategoryController,
    deleteCategoryController,
} from "../controllers/index.js"
import {authGuard, roleGuard} from '../middlewares/index.js'

export const categoryRouter = Router()

categoryRouter.get("/all",authGuard, getAllCategoryController)
categoryRouter.get("/one/:id",authGuard, getOneCategoryController)
categoryRouter.post("/add",authGuard, roleGuard("admin"), createCategoryController)
categoryRouter.put("/update/:id",authGuard, roleGuard("admin"), updateCategoryController)
categoryRouter.delete("/delete/:id",authGuard, roleGuard("admin"), deleteCategoryController)
