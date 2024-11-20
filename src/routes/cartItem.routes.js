import { Router } from "express"
import {
    getAllCartItemController,
    getOneCartItemController,
    createCartItemController,
    updateCartItemController,
    deleteCartItemController,
} from "../controllers/index.js"
import { authGuard, roleGuard } from "../middlewares/index.js"

export const cartItemRouter = Router()

cartItemRouter.get("/all", authGuard, getAllCartItemController)
cartItemRouter.get("/one/:id", authGuard, getOneCartItemController)
cartItemRouter.post("/add", authGuard, roleGuard(["admin"]), createCartItemController)
cartItemRouter.put(
    "/update/:id",
    authGuard,
    roleGuard(["admin"]),
    updateCartItemController,
)
cartItemRouter.delete(
    "/delete/:id",
    authGuard,
    roleGuard(["admin"]),
    deleteCartItemController,
)
