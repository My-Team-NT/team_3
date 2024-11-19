import express from "express"
import morgan from "morgan"

import { productRouter, categoryRouter, reviewRouter } from "./index.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))

app.use("/api/v1/products", productRouter)
app.use("/api/v1/categories", categoryRouter)
app.use("/api/v1/reviews", reviewRouter)

app.use((err, req, res, next) => {
    if (err) {
        return res.send(err.message)
    }
    return res.send("not found")
})

export default app
