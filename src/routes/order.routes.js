import { Router } from "express"
import {
    getAllOrderController,
    getOneOrderController,
    createOrderController,
    updateOrderController,
    deleteOrderController,
} from "../controllers/index.js"
import { authGuard, roleGuard } from "../middlewares/index.js"

export const orderRouter = Router()

orderRouter.get("/all", authGuard, getAllOrderController)
orderRouter.get("/one/:id", authGuard, getOneOrderController)
orderRouter.post("/add", authGuard, roleGuard(["admin"]), createOrderController)
orderRouter.put(
    "/update/:id",
    authGuard,
    roleGuard(["admin"]),
    updateOrderController,
)
orderRouter.delete(
    "/delete/:id",
    authGuard,
    roleGuard(["admin"]),
    deleteOrderController,
)
