import { Router } from "express"
import {
    getAllProductController,
    getOneProductController,
    createProductController,
    updateProductController,
    deleteProductController,
} from "../controllers/index.js"
import { authGuard, roleGuard } from "../middlewares/index.js"

export const productRouter = Router()
// productgayam authguard shart emas getlarga!!!! royxatdan otmagan shaxslarham kora olishi kerak
productRouter.get("/all",authGuard, getAllProductController)
productRouter.get("/one/:id",authGuard, getOneProductController)
productRouter.post("/add",authGuard, roleGuard("admin"), createProductController)
productRouter.put("/update/:id",authGuard, roleGuard("admin"), updateProductController)
productRouter.delete("/delete/:id",authGuard, roleGuard("admin"), deleteProductController)
