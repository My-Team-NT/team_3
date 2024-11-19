import { Router } from "express"
import {
    getAllWishlistController,
    getOneWishlistController,
    createWishlistController,
    updateWishlistController,
    deleteWishlistController,
} from "../controllers/index.js"
import { authGuard, roleGuard } from "../middlewares/index.js"

export const wishlistRouter = Router()

wishlistRouter.get("/all", authGuard, getAllWishlistController)
wishlistRouter.get("/one/:id", authGuard, getOneWishlistController)
wishlistRouter.post("/add", authGuard, roleGuard(["admin"]), createWishlistController)
wishlistRouter.put(
    "/update/:id",
    authGuard,
    roleGuard(["admin"]),
    updateWishlistController,
)
wishlistRouter.delete(
    "/delete/:id",
    authGuard,
    roleGuard(["admin"]),
    deleteWishlistController,
)
