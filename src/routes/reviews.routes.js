import { Router } from "express"
import {
    getAllReviewController,
    getOneReviewController,
    createReviewController,
    updateReviewController,
    deleteReviewController,
} from "../controllers/index.js"

export const reviewRouter = Router()

reviewRouter.get("/all", getAllReviewController)
reviewRouter.get("/one/:id", getOneReviewController)
reviewRouter.post("/add", createReviewController)
reviewRouter.put("/update/:id", updateReviewController)
reviewRouter.delete("/delete/:id", deleteReviewController)
