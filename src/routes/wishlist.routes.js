import { Router } from "express"
import {
    getAllWishlistController,
    getOneWishlistController,
    createWishlistController,
    updateWishlistController,
    deleteWishlistController,
} from "../controllers/index.js"
import { authGuard, roleGuard, createWishlist } from "../middlewares/index.js"

export const wishlistRouter = Router()

wishlistRouter.get("/all", authGuard, getAllWishlistController)
wishlistRouter.get("/one/:id", authGuard, getOneWishlistController)
wishlistRouter.post(
    "/add",
    authGuard,
    roleGuard(["admin"]),
    createWishlist,
    createWishlistController,
)
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
