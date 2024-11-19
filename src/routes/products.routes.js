import { Router } from "express"
import {
    getAllProductController,
    getOneProductController,
    createProductController,
    updateProductController,
    deleteProductController,
} from "../controllers/index.js"
import { authGuard, roleGuard } from "../middlewares/index.js"

export const productRouter = Router()

productRouter.get("/all",authGuard, getAllProductController)
productRouter.get("/one/:id",authGuard, getOneProductController)
productRouter.post("/add",authGuard, createProductController)
productRouter.put("/update/:id",authGuard, updateProductController)
productRouter.delete("/delete/:id",authGuard, deleteProductController)
