import express from "express"
import {
    getProfile,
    getAllUsers,
    getByIdUser,
    getPageUser,
    filterUser,
    searchrUser,
    updateUser,
    deleteUser,
} from "../controllers/index.js"

export const userRouter = express.Router()

userRouter.post("/profile" , getProfile)
userRouter.get("/page" , getPageUser)
userRouter.get("/filter", filterUser)
userRouter.get("/search", searchrUser)
userRouter.get("/", getAllUsers)
userRouter.get("/:id", getByIdUser)
userRouter.put("/:id", updateUser)
userRouter.delete("/:id",deleteUser)
