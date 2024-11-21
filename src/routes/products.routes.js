import { Router } from "express"
import {
    getAllProductController,
    getOneProductController,
    createProductController,
    updateProductController,
    deleteProductController,
} from "../controllers/index.js"
import {
    authGuard,
    roleGuard,
    validateProductMiddleware,
} from "../middlewares/index.js"

export const productRouter = Router()

productRouter.get("/all", getAllProductController)
productRouter.get("/one/:id", getOneProductController)
productRouter.post(
    "/add",
    authGuard,
    roleGuard("admin"),
    validateProductMiddleware,
    createProductController,
)
productRouter.put(
    "/update/:id",
    authGuard,
    roleGuard("admin"),
    updateProductController,
)
productRouter.delete(
    "/delete/:id",
    authGuard,
    roleGuard("admin"),
    deleteProductController,
)
