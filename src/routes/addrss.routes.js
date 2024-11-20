import express from "express"
import {getAllAddress , createAddress, getPageAddress, filterAddress, searchAddress, getByIdAddress, updateAddress, deleteAddress } from "../controllers/index.js"
import {roleGuard} from '../middlewares/index.js'
export const addressRouter = express.Router()

addressRouter.get("/page" , roleGuard('Admin'), getPageAddress)
addressRouter.get("/filter", roleGuard('Admin'), filterAddress)
addressRouter.get("/search",  roleGuard('Admin'), searchAddress)
addressRouter.get("/",  roleGuard('Admin'), getAllAddress)
addressRouter.get("/:id",  roleGuard('Admin'),getByIdAddress)
addressRouter.post('/' ,  roleGuard('Admin'),createAddress)
addressRouter.put("/:id",  roleGuard('Admin'),updateAddress)
addressRouter.delete("/:id", roleGuard('Admin'),deleteAddress)
