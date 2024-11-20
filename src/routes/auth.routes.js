import express from "express";
import {registerController , loginController , verifyToken} from '../controllers/index.js'

export const authRouter = express.Router()

authRouter.post('/register', registerController)
authRouter.post('/login' , loginController)
authRouter.post('/varifyToken' , verifyToken)
