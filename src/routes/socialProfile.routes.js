import express from "express"
import {
    getAllSocialProfile,
    getByIdSocialProfile,
    filterSocialProfile,
    searchSocialProfile,
    getPageSocialProfile,
    updateSocileProfile,
    createSocialProfile,
    deleteSocileProfile,
} from "../controllers/index.js"
import { roleGuard } from "../middlewares/index.js"

export const socialProfileRouter = express.Router()
// roleGuard tekshirish uchun birinchi authGuard yozilishi kerak royxatdan otgan va login qilingan
socialProfileRouter.get("/page",roleGuard('Admin'), getPageSocialProfile)
socialProfileRouter.get("/filter", roleGuard('Admin'),filterSocialProfile)
socialProfileRouter.get("/search",roleGuard('Admin'), searchSocialProfile)
socialProfileRouter.get("/",roleGuard('Admin'), getAllSocialProfile)
socialProfileRouter.get("/:id",roleGuard('Admin'), getByIdSocialProfile)
socialProfileRouter.post("/",roleGuard('Admin'), createSocialProfile)
socialProfileRouter.put("/:id",roleGuard('Admin'), updateSocileProfile)
socialProfileRouter.delete("/:id",roleGuard('Admin'), deleteSocileProfile)
