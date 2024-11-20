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
import { roleGuard } from "../middlewares/index.js"

export const userRouter = express.Router()

// authguard yozmasdan yana roleguard yozilgan bu mumkinmas
userRouter.post("/profile" , getProfile)
userRouter.get("/page" , getPageUser)
userRouter.get("/filter", filterUser)
userRouter.get("/search", searchrUser)
userRouter.get("/", getAllUsers)
userRouter.get("/:id", getByIdUser)
userRouter.put("/:id", roleGuard('Admin') ,updateUser)
userRouter.delete("/:id",roleGuard('Admin'),deleteUser)
