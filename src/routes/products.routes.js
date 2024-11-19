import { Router } from "express"
import {
    getAllProductController,
    getOneProductController,
    createProductController,
    updateProductController,
    deleteProductController,
} from "../controllers/index.js"

export const productRouter = Router()

productRouter.get("/all", getAllProductController)
productRouter.get("/one/:id", getOneProductController)
productRouter.post("/add", createProductController)
productRouter.put("/update/:id", updateProductController)
productRouter.delete("/delete/:id", deleteProductController)
