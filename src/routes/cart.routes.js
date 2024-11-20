import { Router } from "express"
import {
    getAllCartController,
    getOneCartController,
    createCartController,
    updateCartController,
    deleteCartController,
} from "../controllers/index.js"
import { authGuard, roleGuard } from "../middlewares/index.js"

export const cartRouter = Router()

cartRouter.get("/all", authGuard, getAllCartController)
cartRouter.get("/one/:id", authGuard, getOneCartController)
cartRouter.post("/add", authGuard,roleGuard(['admin']), createCartController)
cartRouter.put("/update/:id", authGuard,roleGuard(['admin']), updateCartController)
cartRouter.delete("/delete/:id", authGuard,roleGuard(['admin']), deleteCartController)
